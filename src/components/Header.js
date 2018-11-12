import React, { Component } from "react";
import Hamburger from "./Hamburger";

class Header extends Component {
  state = {};
  render() {
    return (
      <header id="header">
        <Hamburger {...this.props} />
        <h2 id="main-title">Miami Neighborhood Map</h2>
      </header>
    );
  }
}

export default Header;
