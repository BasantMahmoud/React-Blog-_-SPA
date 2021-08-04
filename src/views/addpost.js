import React, { useState } from "react";
import { Redirect } from "react-router-dom";

const Addpost = (props) => {
  // const [redirect, setRedirect] = useState(false);
  const addPostHandler = () => {
    // first way
    // setRedirect(true);
    // second way
    // props.history.push("/blog");
    // third way
    props.history.replace("/blog");
  };
  return (
    <div>
      <h2> Add Post</h2>
      {/* {redirect ? <Redirect to="/blog" /> : null} */}
      <button className="btn btn-primary" onClick={addPostHandler}>
        Add new post
      </button>
    </div>
  );
};

export default Addpost;
