import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function First() {
  const [firstdata, setfirstdata] = useState("");

  return (
    <header className="App-header">
      <div className="hdiv">
        <h2 className="heading">Area he visited yesterday for marketing</h2>
        <input
          type="text"
          className="input1"
          onChange={(e) => setfirstdata(e.target.value)}
          name="input1"
          value={firstdata}
        />
        <br />
        <NavLink to={`/${firstdata}`}>
          <button type="button" className="b">
            Next
          </button>
        </NavLink>
      </div>
    </header>
  );
}
