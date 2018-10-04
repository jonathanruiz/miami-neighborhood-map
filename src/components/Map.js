import React, { Component } from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
import MapStyles from "../data/MapStyles";

const MyMapComponent = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={13}
      defaultCenter={{ lat: 25.7739436, lng: -80.263992 }}
      defaultOptions={{ styles: MapStyles }}
    >
      {props.isMarkerShown && (
        <Marker
          position={{ lat: 25.779562, lng: -80.240688 }}
          title={"La Cana Brava"}
        />
      )}
    </GoogleMap>
  ))
);

class Map extends Component {
  render() {
    const key = `AIzaSyBxSMGTzFzavFfAfgPhhWg1jww-bqQyPME`;
    return (
      <MyMapComponent
        isMarkerShown
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&key=${key}`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `500px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    );
  }
}

export default Map;
