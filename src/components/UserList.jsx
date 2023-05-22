import React, { useState, useEffect } from "react";
import axios from "axios";
import "./userlist.css";

function UserList() {
  const [users, setUsers] = useState([]);
  const [updatedUser, setUpdatedUser] = useState({ name: "", email: "" });

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

  const handleEdit = async (userId) => {
    try {
      await axios.put(
        `http://localhost:3001/auth/updateuser/${userId}`,
        updatedUser
      );
      fetchUsers(); // Refresh the user list after update
    } catch (error) {
      console.log("Error updating user:", error);
    }
  };

  const handleDelete = async (userId) => {
    try {
      await axios.delete(`http://localhost:3001/auth/deleteuser/${userId}`);
      fetchUsers(); // Refresh the user list after deletion
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
              <td>
                {user._id === updatedUser._id ? (
                  <input
                    type="text"
                    value={updatedUser.name}
                    onChange={(e) =>
                      setUpdatedUser({ ...updatedUser, name: e.target.value })
                    }
                  />
                ) : (
                  user.name
                )}
              </td>
              <td>
                {user._id === updatedUser._id ? (
                  <input
                    type="email"
                    value={updatedUser.email}
                    onChange={(e) =>
                      setUpdatedUser({ ...updatedUser, email: e.target.value })
                    }
                  />
                ) : (
                  user.email
                )}
              </td>
              <td>
                {user._id === updatedUser._id ? (
                  <button
                    className="edit-button"
                    onClick={() => handleEdit(user._id)}
                  >
                    Save
                  </button>
                ) : (
                  <button
                    className="edit-button"
                    onClick={() => setUpdatedUser(user)}
                  >
                    Edit
                  </button>
                )}
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
