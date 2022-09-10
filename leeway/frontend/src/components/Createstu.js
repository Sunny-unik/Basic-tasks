import axios from "axios";
import React, { useState } from "react";

export default function Createstu() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [age, setage] = useState("");
  const [marks, setmarks] = useState("");
  const [city, setcity] = useState("");

  function checkv() {
    if (document.getElementById("inputName").value === "") {
      alert("enter some name");
    } else if (document.getElementById("inputEmail").value === "") {
      alert("enter some email");
    } else if (document.getElementById("inputAge").value === "") {
      alert("enter some age");
    } else if (document.getElementById("inputMarks").value === "") {
      alert("enter some marks");
    } else if (document.getElementById("inputCity").value === "") {
      alert("enter some city");
    } else {
      submit();
    }
  }

  function setvalue(e) {
    e.target.name === "name" && setname(e.target.value);
    e.target.name === "age" && setage(e.target.value);
    e.target.name === "email" && setemail(e.target.value);
    e.target.name === "marks" && setmarks(e.target.value);
    e.target.name === "city" && setcity(e.target.value);
  }

  function submit() {
    var s = { name, age, email, marks, city };
    axios.post("http://localhost:4000/create-student", s).then((res) => {
      console.log(res.data);
    });
    alert("Student Created Successfully");
  }

  return (
    <div>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-5">
            <div class="card shadow-lg border-0 rounded-lg mt-0 ">
              <div class="card-header py-0 bg-dark">
                <h3 class="text-center font-weight-light text-light my-4">
                  {" "}
                  Create Student{" "}
                </h3>
              </div>
              <div class="card-body">
                <form>
                  <div class="form-group mb-3">
                    <label for="inputName">Name</label>
                    <input
                      value={name}
                      name="name"
                      onChange={(e) => setvalue(e)}
                      class="form-control"
                      id="inputName"
                      type="text"
                      placeholder="Enter Student Name"
                    />
                  </div>
                  <div class="form-group mb-3">
                    <label for="inputEmail">Email address</label>
                    <input
                      name="email"
                      onChange={(e) => setvalue(e)}
                      value={email}
                      class="form-control"
                      id="inputEmail"
                      type="email"
                      placeholder="name@example.com"
                    />
                  </div>
                  <div class="form-group mb-3">
                    <label for="inputAge"> Age </label>
                    <input
                      name="age"
                      onChange={(e) => setvalue(e)}
                      class="form-control"
                      value={age}
                      id="inputAge"
                      type="number"
                      placeholder="Enter Student Age"
                    />
                  </div>
                  <div class="form-group mb-3">
                    <label for="inputMarks">Marks</label>
                    <input
                      name="marks"
                      onChange={(e) => setvalue(e)}
                      class="form-control"
                      value={marks}
                      id="inputMarks"
                      type="number"
                      placeholder="Enter Student Marks"
                    />
                  </div>
                  <div class="form-group mb-3">
                    <label for="inputCity">City</label>
                    <select
                      name="city"
                      onChange={(e) => setvalue(e)}
                      class="form-control"
                      value={city}
                      id="inputCity"
                    >
                      <option value="Jaipur">Jaipur</option>
                      <option value="Pune">Pune</option>
                      <option value="Mumbai">Mumbai</option>
                      <option value="Goa">Goa</option>
                      <option value="Delhi">Delhi</option>
                    </select>
                  </div>
                  <div class="d-flex align-items-center justify-content-center mt-4 mb-0">
                    <span class="btn btn-primary" onClick={() => checkv()}>
                      {" "}
                      Create Student{" "}
                    </span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
