import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";

export default function Universities() {
  const [university, setuniversity] = useState([]);
  const param = useParams();

  useEffect(() => {
    axios
      .get("http://universities.hipolabs.com/search?country=" + param.country)
      .then((res) => {
        setuniversity(res.data);
      });
  }, []);

  return (
    <React.Fragment>
      <br />
      <h2
        style={{
          color: "black",
          fontFamily: "sans-serif",
          border: "2px solid grey",
          borderRadius: "5px",
        }}
      >
        &nbsp;Welcome to {param.country}.&nbsp;
      </h2>
      <br />
      <br />{" "}
      {university !== [] ? (
        university.map((u) => {
          return (
            <div
              style={{
                color: "black",
                border: "2px solid grey",
                borderRadius: "5px",
                marginBottom: "2%",
              }}
            >
              <NavLink to={`/university/${u.country}/${u.name}`}>
                &nbsp;{u.name}&nbsp;
              </NavLink>
              <h4>Country: {u.country}</h4>
              <h4>Country: {u.country}</h4>
              <i>Web Page:</i>
              <a href={u.web_pages}> {u.web_pages}</a>
            </div>
          );
        })
      ) : (
        <div>&nbsp;Waiting For Server&nbsp;</div>
      )}
    </React.Fragment>
  );
}
