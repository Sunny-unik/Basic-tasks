import React from "react";
import { NavLink, Routes, Route } from "react-router-dom";
import Createstu from "./Createstu";
import Liststu from "./Liststu";

export default function Dashboard() {
  return (
    <div>
      <ul class="nav nav-pills">
        <NavLink to="/" class="nav-item m-1">
          <h4 class="nav-link">List Student</h4>
        </NavLink>
        <NavLink to="Createstudent" class="nav-item m-1">
          <h4 class="nav-link">Create Student</h4>
        </NavLink>
      </ul>
      <Routes>
        <Route path="/" element={<Liststu />} />
        <Route path="/Createstudent" element={<Createstu />} />
      </Routes>
    </div>
  );
}
