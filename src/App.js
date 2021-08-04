import React, { Suspense } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import Home from "./views/home";
import Blog from "./views/blog";
import Post from "./views/post";
// import Addpost from "./views/addpost";
import Notfound from "./views/Notfound";

// lazy loading route
const Addpost = React.lazy(() => import("./views/addpost"));

function App() {
  return (
    <BrowserRouter basename={"/app"}>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/blog" exact component={Blog} />
        <Route
          path="/posts/add-post"
          render={(props) => {
            return (
              <Suspense fallback={<div>loading.....</div>}>
                <Addpost {...props} />
              </Suspense>
            );
          }}
        />
        <Route path="/posts/:id" component={Post} />
        <Redirect from="/home" to="/" />
        {/* 404 not found rout */}
        <Route component={Notfound} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
