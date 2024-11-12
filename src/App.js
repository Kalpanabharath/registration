import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Registration from "./Registration";
import CreateUser from "./CreateUser";
import EditUser from "./EditUser";
import ViewUser from "./ViewUser";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/registration/" element={<Registration />}></Route>
        <Route path="/user/create" element={<CreateUser />}></Route>
        <Route path="/user/edit/:userid" element={<EditUser />}></Route>
        <Route path="/user/view/:userid" element={<ViewUser />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
