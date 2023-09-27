import {   Routes, Route } from "react-router-dom";
import { Login } from "./../../pages/login/Login";
import { Home } from "./../../pages/home/Home";




export const Body = () => {
  return (
    <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
    </>
  );
};
