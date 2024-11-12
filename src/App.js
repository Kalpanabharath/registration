import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Registration from "./Registration";
import CreateUser from "./CreateUser";
import EditUser from "./EditUser";
import ViewUser from "./ViewUser";

function App() {
  return (
    <div>
      <Link to="/user/create">
        <p>Go to Create User Page</p>
      </Link>

      <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="/user/create" element={<CreateUser />} />
        <Route path="/user/edit/:userid" element={<EditUser />} />
        <Route path="/user/view/:userid" element={<ViewUser />} />
      </Routes>
    </div>
  );
}

export default App;
