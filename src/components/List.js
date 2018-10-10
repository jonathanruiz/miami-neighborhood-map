import React, { Component } from "react";

class List extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <ul id="list-sidebar">
        {this.props.markers.map((marker, key) => {
          return (
            <li className="list-item" key={marker.id} tabIndex={key + 1}>
              <p>{marker.title}</p>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default List;
