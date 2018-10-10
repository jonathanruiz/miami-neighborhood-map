import React, { Component } from "react";
import Search from "./Search";
import List from "./List";

class SideBar extends Component {
  render() {
    return (
      <aside id="sidebar">
        <h2>List</h2>
        <Search />
        <List {...this.props} />
      </aside>
    );
  }
}

export default SideBar;
