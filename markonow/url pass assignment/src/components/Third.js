import React from "react";
import { useParams } from "react-router";

export default function Third() {
  const params = useParams();
  const place = params.first.replace(",%20", " ");
  const count = params.second.replace(",%20", " ");

  return (
    <header className="App-header">
      <div className="hdiv">
        <h1 className="heading">Area he visited for marketing</h1>
        <h2 className="basic">{place}</h2>
        <h1 className="heading">Total Person he Approached</h1>
        <h2 className="basic">{count}</h2>
      </div>
    </header>
  );
}
