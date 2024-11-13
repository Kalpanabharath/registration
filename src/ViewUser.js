import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "../src/ViewUser.css";

const ViewUser = () => {
  const { userid } = useParams();
  const [userdata, setuserdata] = useState({});
  useEffect(() => {
    fetch("http://localhost:8000/students/" + userid)
      .then((res) => res.json())
      .then((data) => setuserdata(data))
      .catch((err) => console.log(err.message));
  }, []);
  return (
    <div>
      <div className="viewcontainer">
        <h1>User Details</h1>
        <div class="details">
          <p>
            <strong>ID</strong> {userdata.id}
          </p>
          <p>
            <strong>Name</strong>
            {userdata.name}
          </p>
          <p>
            <strong>Email Id</strong>
            {userdata.email}
          </p>
          <p>
            <strong>Date of birth</strong>
            {userdata.dateOfBirth}
          </p>
        </div>
        <Link to="/" className="btn btn-back">
          Back
        </Link>
      </div>
    </div>
  );
};

export default ViewUser;
