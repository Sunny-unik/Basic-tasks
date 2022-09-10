import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function Link() {
  const [universitydetail, setuniversitydetail] = useState();
  const param = useParams();

  useEffect(() => {
    axios
      .get("http://universities.hipolabs.com/search?name=" + param.university)
      .then((res) => {
        setuniversitydetail(res.data[0]);
      });
  }, []);

  return (
    <React.Fragment>
      <h3
        style={{
          color: "black",
          fontFamily: "sans-serif",
          border: "2px solid grey",
          borderRadius: "5px",
        }}
      >
        &nbsp;Welcome to {param.university} from{" "}
        {param.country.replace("%20", " ")}.&nbsp;
      </h3>
      {universitydetail === undefined ? (
        <div>server not responding</div>
      ) : (
        <div
          style={{
            color: "black",
            border: "2px solid lightgrey",
            borderRadius: "4px",
          }}
        >
          <h4>&nbsp;{universitydetail.name}&nbsp;</h4>
          <a href={universitydetail.web_pages} target="_blank">
            {universitydetail.web_pages}
          </a>
          <h6>University Domain: {universitydetail.domains}</h6>
          <h6>Country: {universitydetail.country}</h6>
          <div>Country Code: {universitydetail.alpha_two_code}</div>
        </div>
      )}
    </React.Fragment>
  );
}
