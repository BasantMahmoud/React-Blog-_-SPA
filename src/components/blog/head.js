import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";

const head = (props) => {
  return (
    <Jumbotron className="head d-flex align-items-center justify-content-center">
      <h1 className="dislay-2 text-light">
        {props.title ? props.title : "Hello React"}
      </h1>
    </Jumbotron>
  );
};

export default head;
