import React, { Component } from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";

const MyMapComponent = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={props.zoom}
      defaultCenter={props.center}
      defaultOptions={props.styles}
    >
      {props.markers.map(marker => {
        return (
          <Marker
            key={marker.key}
            position={marker.position}
            title={marker.title}
          >
            <InfoWindow>
              <p>{marker.title}</p>
            </InfoWindow>
          </Marker>
        );
      })}
    </GoogleMap>
  ))
);

class Map extends Component {
  render() {
    const key = `AIzaSyBxSMGTzFzavFfAfgPhhWg1jww-bqQyPME`;
    return (
      <MyMapComponent
        {...this.props}
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&key=${key}`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={
          <div id="map" style={{ height: `100%`, width: `100%` }} />
        }
        mapElement={<div style={{ height: `100vh` }} />}
      />
    );
  }
}

export default Map;
