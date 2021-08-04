import React from "react";
import Singlepost from "../components/blog/singlePost";
const post = (props) => {
  return (
    <div>
      <Singlepost {...props} />
    </div>
  );
};

export default post;
