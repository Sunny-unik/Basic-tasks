import React, { useEffect, useState } from "react";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import { Button } from "@material-ui/core";
import axios from "axios";
import { NavLink } from "react-router-dom";

export default function Select_country() {
  const [data, setdata] = useState([]);
  const [country, setcountry] = useState("");

  useEffect(() => {
    axios.get("http://universities.hipolabs.com/search").then((res) => {
      setdata(res.data);
    });
  }, []);

  let countries = [];
  countries = data.map((d) => d.country);
  let uniquecountries = [];
  uniquecountries = new Set([].concat(...countries));
  let options = [];

  return (
    <Box
      component="form"
      sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="select-country"
          onChange={(t) => setcountry(t.target.value)}
          select
          label="Select Country"
          value={country}
          helperText="Please select your currency"
        >
          {uniquecountries.forEach((p) => {
            options.push(p);
          })}
          {options.length !== 204 ? (
            <p> 🤔 Loading...</p>
          ) : (
            options.map((option) => (
              <MenuItem key={option} value={option}>
                {" "}
                {option}{" "}
              </MenuItem>
            ))
          )}
        </TextField>
        &nbsp;
        {country !== "" ? (
          <NavLink to={`/universities/${country}`}>
            <Button variant="contained"> Send </Button>
          </NavLink>
        ) : (
          <div style={{ color: "black", fontFamily: "fantasy" }}>
            Select Country
          </div>
        )}
      </div>
    </Box>
  );
}
