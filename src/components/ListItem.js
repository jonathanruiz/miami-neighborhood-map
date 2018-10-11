import React, { Component } from "react";

class ListItem extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <li
        className="list-item"
        onClick={() => this.props.listItemClick(this.props)}
      >
        <p>{this.props.title}</p>
      </li>
    );
  }
}

export default ListItem;
