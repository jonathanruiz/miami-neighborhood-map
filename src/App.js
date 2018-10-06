import React, { Component } from "react";
import SideBar from "./components/SideBar";
import Map from "./components/Map";
import "./App.scss";
import MapStyles from "./data/MapStyles";
import RestauarantLocations from "./data/RestaurantLocations";

class App extends Component {
  constructor() {
    super();
    this.state = {
      markers: RestauarantLocations,
      styles: { styles: MapStyles },
      zoom: 12,
      center: { lat: 25.7739436, lng: -80.263992 }
    };
  }

  markerClickedOpen = marker => {
    marker.isOpen = true;

    // Look at the Object.assign method to learn how it works - https://mzl.la/1Mo3l21
    this.setState({ markers: Object.assign(this.state.markers, marker) });
  };

  markerClickedClosed = marker => {
    marker.isOpen = false;

    // Look at the Object.assign method to learn how it works - https://mzl.la/1Mo3l21
    this.setState({ markers: Object.assign(this.state.markers, marker) });
  };

  render() {
    return (
      <div className="app">
        <SideBar {...this.state} />
        <Map
          {...this.state}
          markerClickedOpen={this.markerClickedOpen}
          markerClickedClosed={this.markerClickedClosed}
        />
      </div>
    );
  }
}

export default App;
