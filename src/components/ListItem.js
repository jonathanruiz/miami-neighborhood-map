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
        aria-labelledby="listItem"
        onClick={() => this.props.listItemClick(this.props)}
        tabIndex={0}
      >
        <p>{this.props.title}</p>
      </li>
    );
  }
}

export default ListItem;
