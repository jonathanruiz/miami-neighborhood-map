import React, { Component } from "react";
import Search from "./Search";
import List from "./List";

class SideBar extends Component {
  constructor() {
    super();
    this.state = {
      query: "",
      venues: []
    };
  }

  filterQuery = () => {
    if (this.state.query.trim() !== "") {
      const venues = this.props.markers.filter(venue =>
        venue.title.toLowerCase().includes(this.state.query.toLowerCase())
      );

      return venues;
    }
    return this.props.markers;
  };

  updateQuery = event => {
    this.setState({ query: event.target.value });
    const markers = this.props.markers.map(venue => {
      const isMatched = venue.title
        .toLowerCase()
        .includes(event.target.value.toLowerCase());
      const marker = this.props.markers.find(marker => marker.id === venue.id);
      if (isMatched) {
        marker.isVisible = true;
      } else {
        marker.isVisible = false;
      }
      return marker;
    });

    this.props.updateSuperState({ markers });
  };

  render() {
    return (
      <aside id="sidebar">
        <h2>List</h2>
        <Search {...this.props} updateQuery={this.updateQuery} />
        <List
          {...this.props}
          markers={this.filterQuery()}
          listItemClick={this.props.listItemClick}
        />
      </aside>
    );
  }
}

export default SideBar;
