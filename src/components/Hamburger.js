import React, { Component } from "react";
import { elastic as Menu } from "react-burger-menu";
import SideBar from "./SideBar";

class Hamburger extends Component {
  render() {
    return (
      <Menu
        customBurgerIcon={
          <img className=".bm-icon" src="img/magnify.svg" alt="search icon" />
        }
        pageWrapId={"page-wrap"}
        outerContainerId={"outer-container"}
      >
        <SideBar {...this.props} />
      </Menu>
    );
  }
}

export default Hamburger;
