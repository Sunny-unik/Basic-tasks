const express = require("express");
const cors = require("cors");
const Mongoclient = require("mongodb").MongoClient;
const bodyParser = require("body-parser");
const app = express();
require("dotenv").config();

app.use(cors());

const client = new Mongoclient(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let connection;
client.connect((err, db) => {
  if (!err) {
    connection = db;
    console.log("Database connected");
  } else console.log("error in Database connection", err);
});

app.get("/list-student", (req, res) => {
  const studentcollection = connection.db("school").collection("student");
  studentcollection.find().toArray((err, docs) => {
    if (!err) {
      res.send({ status: "ok", data: docs });
    } else {
      res.send({ status: "failed", data: err });
    }
  });
});

app.post("/create-student", bodyParser.json(), (req, res) => {
  const studentcollection = connection.db("school").collection("student");
  studentcollection.insert(req.body, (err, result) => {
    if (!err) {
      res.send({ status: "ok", data: "student created successfully" });
    } else {
      res.send({ status: "failed", data: err });
    }
  });
});

app.listen(4000, () => console.log("server is running on port 4000"));
