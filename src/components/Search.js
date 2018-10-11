import React, { Component } from "react";

class Search extends Component {
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
      <input
        value={this.state.query}
        id="search"
        type="search"
        placeholder="Bakery"
        onChange={event => this.updateQuery(event.target.value)}
      />
    );
  }
}

export default Search;
