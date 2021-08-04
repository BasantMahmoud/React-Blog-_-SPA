import React from "react";
import { Card, Button } from "react-bootstrap";
import defaultImg from "../../assets/images/3.jpg";
import { Link } from "react-router-dom";

const post = (props) => {
  const openHandler = () => {
    console.log(props);
    // props.history.push("/posts/" + props.post.id);
  };
  return (
    <Card style={{ width: "18rem" }} className="mb-4">
      <Card.Img variant="top" src={defaultImg} />
      <Card.Body>
        <Card.Title> {props.post.title}</Card.Title>
        <Card.Text>{props.post.body}</Card.Text>
        {/* <Button
          variant="primary"
          onClick={() => props.openModel(props.post.id)}
        >
          open Post
        </Button> */}

        {/* <Link className="btn btn-primary" to={"/posts/" + props.post.id}>
          {" "}
          Open Post{" "}
        </Link> */}

        {/* use push to navigate */}
        <Button variant="primary" onClick={openHandler}>
          open Post
        </Button>
      </Card.Body>
    </Card>
  );
};

export default post;
