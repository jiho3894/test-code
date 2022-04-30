import { HashRouter, Route, Routes } from "react-router-dom";
import Drag from "../pages/Drag";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Header from "./Header";

const Router = () => {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/drag" element={<Drag />} />
      </Routes>
    </HashRouter>
  );
};

export default Router;
