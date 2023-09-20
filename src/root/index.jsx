import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { NavbarList } from "../utils/Navbar";

const Root = () => {
  return (
    <div>
      <Routes>
        <Route element={<Navbar />}>
          {NavbarList.map(({ id, element, path }) => {
            return <Route key={id} path={path} element={element} />;
          })}
        </Route>
        <Route path="*" element={<h1>404 NOT FOUND</h1>} />
        <Route path="/" element={<Navigate to={"/home"} />} />
      </Routes>
    </div>
  );
};

export default Root;
