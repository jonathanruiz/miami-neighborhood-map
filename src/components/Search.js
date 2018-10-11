import React, { Component } from "react";

class Search extends Component {
  render() {
    return (
      <input
        value={this.props.query}
        id="search"
        type="search"
        placeholder="Bakery"
        onChange={event => this.state.updateQuery(event.target.value)}
      />
    );
  }
}

export default Search;
