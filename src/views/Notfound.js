import React, { Component } from "react";

export class Notfound extends Component {
  componentDidMount = () => {
    this.props.history.replace("/404");
  };
  render() {
    return (
      <div>
        <h1>404 Not Found</h1>
      </div>
    );
  }
}

export default Notfound;
