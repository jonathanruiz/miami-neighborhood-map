import React, { Component } from "react";
import Header from "./components/Header";
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
      venues: [],
      styles: { styles: MapStyles },
      zoom: 12,
      center: { lat: 25.7739436, lng: -80.263992 }
    };
  }

  closeAllMarkers = () => {
    const markers = this.state.markers.map(marker => {
      marker.isOpen = false;
      return marker;
    });

    // Look at the Object.assign method to learn how it works - https://mzl.la/1Mo3l21
    this.setState({
      markers: Object.assign(this.state.markers, markers)
    });
  };

  markerClickedOpen = marker => {
    this.closeAllMarkers();
    marker.isOpen = true;

    // Look at the Object.assign method to learn how it works - https://mzl.la/1Mo3l21
    this.setState({ markers: Object.assign(this.state.markers, marker) });

    const venue = this.state.markers.find(venue => venue.id === marker.id);

    SquareAPI.getVenueDetails(marker.id).then(res => {
      const newVenue = Object.assign(venue, res.response.venue);
      this.setState({ venues: Object.assign(this.state.venues, newVenue) });

      // console.log(newVenue, "New Venue");
    });
  };

  render() {
    return (
      <div className="app">
        <Header />
        <SideBar {...this.state} />
        <Map {...this.state} markerClickedOpen={this.markerClickedOpen} />
      </div>
    );
  }
}

export default App;
