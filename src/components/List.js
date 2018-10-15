import React, { Component } from "react";
import ListItem from "./ListItem";

class List extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <ul id="list-sidebar">
        {this.props.markers &&
          this.props.markers.map((venue, key) => {
            return (
              <ListItem
                key={key}
                {...venue}
                listItemClick={this.props.listItemClick}
              />
            );
          })}
      </ul>
    );
  }
}

export default List;
