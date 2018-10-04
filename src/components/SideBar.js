import React, { Component } from "react";

class SideBar extends Component {
  render() {
    return (
      <div id="sidebar" {...this.props}>
        <h2>List</h2>
        <ul id="list-sidebar">
          {this.props.markers.map(marker => {
            return (
              <li className="list-item" key={marker.key}>
                {marker.title}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default SideBar;
