import React, { Component } from "react";

class Search extends Component {
  render() {
    return (
      <input
        id="search"
        type="search"
        placeholder="Filter"
        onChange={this.props.updateQuery}
      />
    );
  }
}

export default Search;
