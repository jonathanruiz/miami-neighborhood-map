import React, { Component } from "react";
import Header from "./components/Header";
import Map from "./components/Map";
import MapStyles from "./data/MapStyles";
import VenueLocations from "./data/VenueLocations";
import SquareAPI from "./api/Helper";
import "./App.scss";

class App extends Component {
  constructor() {
    super();
    this.state = {
      markers: VenueLocations,
      venues: [],
      styles: { styles: MapStyles },
      zoom: 12,
      center: { lat: 25.7739436, lng: -80.263992 },
      updateSuperState: obj => {
        this.setState(obj);
      }
    };
  }

  gm_authFailure = () => {
    window.alert(
      `An error occurred while trying to fetch data from GoogleMaps.`
    );
  };

  componentDidMount() {
    window.gm_authFailure = this.gm_authFailure;
  }

  closeAllMarkers = () => {
    const markers = this.state.markers.map(marker => {
      marker.isOpen = false;
      return marker;
    });

    // Look at the Object.assign method to learn how it works - https://mzl.la/1Mo3l21
    this.setState({ markers: Object.assign(this.state.markers, markers) });
  };

  markerClickedOpen = marker => {
    this.closeAllMarkers();
    marker.isOpen = true;
    // console.log(marker);

    this.setState({ markers: Object.assign(this.state.markers, marker) });

    const venue = this.state.markers.find(venue => venue.id === marker.id);

    SquareAPI.getVenueDetails(marker.id).then(res => {
      const newVenue = Object.assign(venue, res.response.venue);
      this.setState({ venues: Object.assign(this.state.venues, newVenue) });

      // Error handeling for reaching quota limit
      if (res.meta.code === 429) {
        alert("Quota limit was reached in the Foursquare API");
      }
    });
  };

  listItemClick = venue => {
    const marker = this.state.markers.find(marker => marker.id === venue.id);
    this.markerClickedOpen(marker);
  };

  render() {
    return (
      <div id="outer-container" className="app">
        <Header {...this.state} listItemClick={this.listItemClick} />
        <Map
          {...this.state}
          markerClickedOpen={this.markerClickedOpen}
          closeAllMarkers={this.closeAllMarkers}
        />
      </div>
    );
  }
}

export default App;
