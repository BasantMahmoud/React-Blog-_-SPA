import React from "react";
import { Route } from "react-router-dom";

import Head from "../components/blog/head";
import Home from "../components/blog/home";
import Blog from "./blog";
const home = () => {
  return (
    <div>
      <Head />
      {/* <Home /> */}
      {/* <Route path="/" exact render={() => <h1>Home</h1>} />
      <Route path="/blog" exact render={() => <h1>Blog</h1>} /> */}
      <Route path="/" exact component={Home} />
      {/* <Route path="/" exact component={Blog} /> */}
    </div>
  );
};

export default home;
