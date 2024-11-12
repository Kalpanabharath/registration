import React from "react";
import { Routes, Route } from "react-router-dom"; // No need for Switch in v6
import "./App.css";
import Registration from "./Registration";
import CreateUser from "./CreateUser";
import EditUser from "./EditUser";
import ViewUser from "./ViewUser";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Registration />} />
      <Route path="/user/create" element={<CreateUser />} />
      <Route path="/user/edit/:userid" element={<EditUser />} />
      <Route path="/user/view/:userid" element={<ViewUser />} />
    </Routes>
  );
}

export default App;
