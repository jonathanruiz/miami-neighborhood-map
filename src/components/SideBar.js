import React, { Component } from "react";

class SideBar extends Component {
  render() {
    return (
      <div id="list-sidebar" {...this.props}>
        <h2>List</h2>
        <ul>
          {this.props.markers.map(marker => {
            return <li key={marker.key}>{marker.title}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default SideBar;
