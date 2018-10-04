import React, { Component } from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

const MyMapComponent = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={props.zoom}
      defaultCenter={props.center}
      defaultOptions={props.styles}
    >
      {/* {props.isMarkerShown && (
        <Marker
          position={{ lat: 25.779562, lng: -80.240688 }}
          title={"La Cana Brava"}
        />
      )} */}
      {/* {markers.map((key, marker) => {
        <Marker
          key={key}
          position={{ lat: marker.lat, lng: marker.lng }}
          title={marker.title}
        />;
      })} */}
      <Marker
        position={props.markers[0].position}
        title={props.markers[0].title}
      />
      <Marker
        position={props.markers[1].position}
        title={props.markers[1].title}
      />
      ;
    </GoogleMap>
  ))
);

class Map extends Component {
  render() {
    const key = `AIzaSyBxSMGTzFzavFfAfgPhhWg1jww-bqQyPME`;
    return (
      <MyMapComponent
        {...this.props}
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
