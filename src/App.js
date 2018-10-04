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
      zoom: 13,
      center: { lat: 25.7739436, lng: -80.263992 }
    };
  }

  render() {
    return (
      <React.Fragment>
        <SideBar {...this.state} />
        <Map {...this.state} />
      </React.Fragment>
    );
  }
}

export default App;
