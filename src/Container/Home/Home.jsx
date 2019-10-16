import React, { Component } from "react";
import "./Home.css";
import { withRouter } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div>
        <p>Home component</p>
      </div>
    );
  }
}
export default withRouter(Home);
