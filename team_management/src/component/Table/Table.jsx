import React, { useEffect, useState } from "react";
import "./table.css";
import { MdOutlineEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";

export const Table = () => {
  const [members, setMembers] = useState([]);
  const [filteredMember, setFilteredMember] = useState([]);
  const [search, setSearch] = useState("");

  const [newName, setNewName] = useState("");
  const [newDepartment, setNewDepartment] = useState("");
  const [newRole, setNewRole] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          "https://assessment-api-biay.onrender.com/users",
          {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          }
        );
        if (!response.ok) {
          console.error("Error fetching data");
          return;
        }
        const { data } = await response.json();
        setMembers(data);
        setFilteredMember(data);
        console.log("members are", data);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    })();
  }, []);

  const removeHandler = (id) => {
    const removedMember = filteredMember.filter((member) => member._id !== id);
    setFilteredMember(removedMember);
  };

  const addMemnber = async () => {
    try {
      const response = await fetch(
        "https://assessment-api-biay.onrender.com/users",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: newName,
            department: newDepartment,
            role: newRole,
          }),
        }
      );
    } catch (error) {
      console.log(error);
    }

    const searchHandler = () => {
      if (search.trim() !== "") {
        const searchedMember = members.filter((member) =>
          member.username.toLowerCase().includes(search.toLowerCase())
        );
        setFilteredMember(searchedMember);
      } else {
        setFilteredMember(members);
      }
    };
    useEffect(() => {
      searchHandler();
    }, [search]);
  };
  return (
    <div>
      <div className="flex_space">
        <div className="flex_space">
          <h2>Team</h2>
          <button onClick={addMemnber}>Add Members</button>
        </div>
        <div>
          <input
            type="text"
            placeholder="Search members"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
      <div className="filters flex_space">
        <div>All</div>
        <div>R&D</div>
        <div>Research</div>
        <div>SSD</div>
        <div>Finance</div>
        <div>Research</div>
        <div>Dev-Plat</div>
        <div>Research</div>
      </div>
      <div className="table">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Department</th>
              <th>Role</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {filteredMember.map((member) => (
              <tr key={member.id}>
                <td>{member.username}</td>
                <td>{member.department}</td>
                <td>{member.role}</td>
                <td>
                  <MdOutlineEdit />
                  <RiDeleteBin6Line onClick={() => removeHandler(member._id)} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
