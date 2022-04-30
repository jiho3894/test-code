import { HashRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Main from "../pages/Main";
import Profile from "../pages/Profile";
import RoomList from "../pages/RoomList";
import Drag from "../pages/Test/Drag";
import Home from "../pages/Test/Home";
import TestLogin from "../pages/Test/TestLogin";
import ToolMain from "../pages/Tool/Main";
import ToolDocument from "../pages/Tool/Document";
import ToolBoard from "../pages/Tool/Board";
import Header from "./Header";
import AddDocs from "../pages/Tool/AddDocs";

const Router = () => {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/roomList" element={<RoomList />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/tool/:id" element={<ToolMain />} />
        <Route path="/tool/:id/document" element={<ToolDocument />} />
        <Route path="/tool/:id/addDocs" element={<AddDocs />} />
        <Route path="/tool/:id/board" element={<ToolBoard />} />
        <Route path="/test" element={<Home />} />
        <Route path="/test/login" element={<TestLogin />} />
        <Route path="/test/drag" element={<Drag />} />
      </Routes>
    </HashRouter>
  );
};

export default Router;
