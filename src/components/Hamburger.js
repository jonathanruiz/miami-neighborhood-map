import React, { Component } from "react";
import { elastic as Menu } from "react-burger-menu";
import SideBar from "./SideBar";

class Hamburger extends Component {
  showSettings(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div id="outer-container">
        <Menu pageWrapId={"page-wrap"} outerContainerId={"outer-container"}>
          <SideBar {...this.props} />
        </Menu>
      </div>
    );
  }
}

export default Hamburger;
