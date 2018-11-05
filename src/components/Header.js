import React, { Component } from "react";

class Header extends Component {
  state = {};
  render() {
    return (
      <header id="header">
        <Hamburger {...this.props} />
        <h2>Miami Neighborhood Map</h2>
      </header>
    );
  }
}

export default Header;
