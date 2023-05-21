import React, { useState, useEffect } from "react";
import axios from "axios";
import "./userlist.css";

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:3001/auth/getuser");
      setUsers(response.data);
    } catch (error) {
      console.log("Error fetching users:", error);
    }
  };

  const handleEdit = (userId) => {
    console.log("Edit user:", userId);
    console.log(userId.id);
    // Add logic to navigate to the edit page for the user with the specified userId
  };

  const handleDelete = async (userId) => {
    console.log(userId);
    try {
      if (userId) {
        await axios.delete(`http://localhost:3001/auth/deleteuser${userId}`);
        setUsers((prevUsers) =>
          prevUsers.filter((user) => user._id !== userId)
        );
        console.log("User deleted successfully");
      } else {
        console.log("Invalid userId");
      }
    } catch (error) {
      console.log("Error deleting user:", error);
    }
  };

  return (
    <div className="user-list-container">
      <h1>User Admin</h1>
      <table className="user-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <button
                  className="edit-button"
                  onClick={() => handleEdit(user._id)}
                >
                  Edit
                </button>
                <button
                  className="delete-button"
                  onClick={() => handleDelete(user._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;
