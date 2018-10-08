import React, { Component } from "react";
import SideBar from "./components/SideBar";
import Map from "./components/Map";
import "./App.scss";
import MapStyles from "./data/MapStyles";
import RestauarantLocations from "./data/RestaurantLocations";
import SquareAPI from "./api/Helper";

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

  componentDidMount() {
    SquareAPI.search({
      query: "bakery",
      near: "Miami, FL",
      limit: 10
    }).then(res => {
      console.log(res);
    });
  }

  closeAllMarkers = () => {
    const markers = this.state.markers.map(marker => {
      marker.isOpen = false;
      return marker;
    });
    this.setState({ markers: Object.assign(this.state.markers, markers) });
  };

  markerClickedOpen = marker => {
    this.closeAllMarkers();
    marker.isOpen = true;

    // Look at the Object.assign method to learn how it works - https://mzl.la/1Mo3l21
    this.setState({ markers: Object.assign(this.state.markers, marker) });
  };

  render() {
    return (
      <div className="app">
        <SideBar {...this.state} />
        <Map {...this.state} markerClickedOpen={this.markerClickedOpen} />
      </div>
    );
  }
}

export default App;
