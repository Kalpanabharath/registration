import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const EditUser = () => {
  const { userid } = useParams();
  const navigate = useNavigate(); // Correctly call useNavigate inside the component
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");

  useEffect(() => {
    fetch(`http://localhost:8000/students/${userid}`)
      .then((res) => res.json())
      .then((data) => {
        setId(data.id);
        setName(data.name);
        setEmail(data.email);
        setDob(data.dateOfBirth);
      })
      .catch((err) => console.log(err.message));
  }, [userid]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedUser = { id: id, name: name, email: email, dateOfBirth: dob };

    fetch(`http://localhost:8000/students/${userid}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedUser),
    })
      .then(() => navigate("/")) // Navigate to the homepage after updating
      .catch((err) => console.log(err.message));
  };

  return (
    <div>
      <div className="Container">
        <h2>Edit User Details</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="id">ID:</label>
            <input
              type="text"
              id="id"
              name="id"
              value={id}
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
              value={name}
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
              value={email}
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
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              required
            />
          </div>
          <div className="btncontainer">
            <button className="btn btn-save">Update</button>
            <Link to="/" className="back-link">
              Back
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
