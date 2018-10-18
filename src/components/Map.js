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
      {props.markers.filter(marker => marker.isVisible).map((marker, arr) => {
        const venueInfo = props.markers.find(venue => venue.id === marker.id);
        return (
          <Marker
            key={marker.id}
            position={marker.position}
            title={marker.title}
            onClick={() => props.markerClickedOpen(marker)}
            animation={marker.isOpen === true ? 1 : null}
          >
            {marker.isOpen &&
              venueInfo.bestPhoto && (
                <InfoWindow onCloseClick={() => props.closeAllMarkers()}>
                  <React.Fragment>
                    <p>{marker.title}</p>
                    <img
                      src={`${venueInfo.bestPhoto.prefix}200x200${
                        venueInfo.bestPhoto.suffix
                      }`}
                      alt={`${venueInfo.name} venue`}
                    />
                  </React.Fragment>
                </InfoWindow>
              )}
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
        containerElement={<div id="map-container" role="application" />}
        mapElement={<div id="map-element" />}
      />
    );
  }
}

export default Map;
