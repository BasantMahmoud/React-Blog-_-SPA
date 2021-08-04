import React, { Component } from "react";
import axios from "axios";
import Post from "./post";
import Loader from "../layout/loader";
import { Container, Col, Row } from "react-bootstrap";

export class posts extends Component {
  state = {
    posts: [],
    showModel: false,
    currentId: null,
  };
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      // console.log(data);
      this.setState({ posts: res.data });
      // console.log(this.state.posts);
    });
  }

  renderPosts = () => {
    if (this.state.posts.length > 0) {
      return this.state.posts.map((post) => {
        return (
          <Col md={6} lg={4} key={post.id}>
            <Post post={post} openModel={this.openModel} {...this.props} />
          </Col>
        );
      });
    } else {
      return <Loader />;
    }
  };

  openModel = (id) => {
    this.showModelHandler();
    this.setState({ currentId: id });
  };

  closeModelHandler = () => {
    this.setState({ showModel: false });
  };
  showModelHandler = () => {
    this.setState({ showModel: true });
  };
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h2 className="h3 text-primary border-bottom pb-3 mb-4">
              Latest Posts
            </h2>
          </Col>
        </Row>

        <Row>{this.renderPosts()}</Row>
      </Container>
    );
  }
}

export default posts;
