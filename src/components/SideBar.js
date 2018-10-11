import React, { Component } from "react";
import Search from "./Search";
import List from "./List";

class SideBar extends Component {
  constructor() {
    super();
    this.state = {
      query: "",
      results: []
    };
  }

  updateQuery = query => {
    this.setState({ query: query }, this.submitQuery);
  };

  submitQuery() {
    console.log("submitted Query");
  }
  render() {
    return (
      <aside id="sidebar">
        <h2>List</h2>
        <Search {...this.props} updateQuery={this.updateQuery} />
        <List {...this.props} listItemClick={this.props.listItemClick} />
      </aside>
    );
  }
}

export default SideBar;
