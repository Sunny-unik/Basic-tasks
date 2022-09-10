import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router";

export default function Second(props) {
  const [seconddata, setseconddata] = useState("");
  const params = useParams();

  return (
    <header className="App-header">
      <div className="hdiv">
        <h1 className="heading">Total Person he approached</h1>
        <input
          type="number"
          className="input1"
          onChange={(e) => setseconddata(e.target.value)}
          name="input1"
          value={seconddata}
        />
        <br />
        <NavLink to={`/${params.firstdata}/${seconddata}`}>
          <button type="button" className="b">
            Next
          </button>
        </NavLink>
      </div>
    </header>
  );
}
