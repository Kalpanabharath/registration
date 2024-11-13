import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Registration = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const DisplayDetails = (id) => {
    navigate("/user/view/" + id);
  };
  const editDetails = (id) => {
    navigate("/user/edit/" + id);
  };
  const removedetail = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      fetch(`http://localhost:8000/students/${id}`, {
        method: "DELETE",
      })
        .then(() => {
          setUsers(users.filter((user) => user.id !== id)); // Update state to remove deleted user
          console.log("User deleted successfully");
        })
        .catch((err) => console.log(err.message));
    }
  };

  useEffect(() => {
    fetch("http://localhost:8000/students")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => setUsers(data))
      .catch((err) => console.log("Fetch error: ", err.message));
  }, []);

  return (
    <div className="container">
      <h2>Registration Application</h2>
      <div className="table-container">
        <Link to="/user/create" className="btn btn-add">
          Add new Student
        </Link>

        {users.length === 0 ? (
          <p>
            No users found. <Link to="/user/create">Add a User</Link>
          </p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Date of Birth</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.dateOfBirth}</td>
                  <td>
                    <button
                      className="btn btn-info"
                      onClick={() => DisplayDetails(user.id)}
                    >
                      View
                    </button>
                    <button
                      className="btn btn-primary"
                      onClick={() => editDetails(user.id)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => removedetail(user.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Registration;
