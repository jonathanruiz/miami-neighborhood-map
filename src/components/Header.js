import React, { Component } from "react";
import Hamburger from "./Hamburger";

class Header extends Component {
  state = {};
  render() {
    return (
      <header id="header">
        <Hamburger />
        <h2>Miami Neighborhood Map</h2>
      </header>
    );
  }
}

export default Header;
