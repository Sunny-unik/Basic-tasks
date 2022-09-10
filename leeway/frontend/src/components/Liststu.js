import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Liststu() {
  const [students, setstudents] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/list-student").then((res) => {
      console.log(res.data.data);
      setstudents(res.data.data);
    });
  }, []);

  const liststu = students.map((st) => {
    return (
      <tr style={{ border: "1px solid black" }} className="p-1" key={st._id}>
        <td style={{ border: "1px solid black" }} className="p-1">
          {st.name}
        </td>
        <td style={{ border: "1px solid black" }} className="p-1">
          {st.age}
        </td>
        <td style={{ border: "1px solid black" }} className="p-1">
          {st.city}
        </td>
        <td style={{ border: "1px solid black" }} className="p-1">
          {st.marks}
        </td>
        <td style={{ border: "1px solid black" }} className="p-1">
          {st.email}
        </td>
      </tr>
    );
  });

  return (
    <div className="text-center">
      <table
        className="text-center m-auto my-1"
        style={{ border: "1px solid black", width: "99%", height: "100%" }}
      >
        <thead>
          <td
            style={{ border: "1px solid black" }}
            className="p-1 bg-dark text-light"
          >
            {" "}
            Name{" "}
          </td>
          <td
            style={{ border: "1px solid black" }}
            className="p-1 bg-dark text-light"
          >
            {" "}
            Age{" "}
          </td>
          <td
            style={{ border: "1px solid black" }}
            className="p-1 bg-dark text-light"
          >
            {" "}
            City{" "}
          </td>
          <td
            style={{ border: "1px solid black" }}
            className="p-1 bg-dark text-light"
          >
            {" "}
            Marks{" "}
          </td>
          <td
            style={{ border: "1px solid black" }}
            className="p-1 bg-dark text-light"
          >
            {" "}
            Email{" "}
          </td>
        </thead>
        <tbody>{liststu}</tbody>
      </table>
    </div>
  );
}
