import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./CreateUser.css"; // Don't forget to import the CSS file

const CreateUser = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let userdata = {
      id: id,
      name: name,
      email: email,
      dateOfBirth: dob,
    };
    fetch("http://localhost:8000/students", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userdata),
    }).then((res) => {
      alert("User Data Save Successfuly");
      navigate("/");
    });
  };

  return (
    <div className="Container">
      <h2>Add New User</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="id">ID:</label>
          <input
            type="text"
            id="id"
            name="id"
            onChange={(e) => setId(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email ID:</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="dob">Date of Birth:</label>
          <input
            type="date"
            id="dob"
            name="dob"
            onChange={(e) => setDob(e.target.value)}
            required
          />
        </div>
        <div className="btncontainer">
          <button className="btn btn-save">Add User</button>
          <Link to="/" className="back-link">
            Back
          </Link>
        </div>
      </form>
    </div>
  );
};

export default CreateUser;
