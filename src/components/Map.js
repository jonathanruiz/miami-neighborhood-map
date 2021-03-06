/* global google */
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
      defaultOptions={{
        styles: props.styles,
        gestureHandling: "greedy",
        zoomControlOptions: {
          position: google.maps.ControlPosition.RIGHT_TOP
        },
        // these following options turn certain controls off see link below
        streetViewControl: false,
        scaleControl: false,
        mapTypeControl: false,
        panControl: false,
        rotateControl: false,
        fullscreenControl: false
      }}
    >
      {props.markers
        .filter(marker => marker.isVisible)
        .map(marker => {
          const venueInfo = props.markers.find(venue => venue.id === marker.id);
          return (
            <Marker
              key={marker.id}
              position={marker.position}
              title={marker.title}
              onClick={() => props.markerClickedOpen(marker)}
              icon={{
                url: "img/marker.svg",
                scaledSize: { width: 18, height: 27 }
              }}
              animation={marker.isOpen === true ? 1 : null}
            >
              {marker.isOpen && venueInfo.bestPhoto && (
                <InfoWindow onCloseClick={() => props.closeAllMarkers()}>
                  <React.Fragment>
                    <div className="info-window">
                      <h4>{marker.title}</h4>
                      <p>
                        {`${marker.location.formattedAddress[0]},
                        ${marker.location.formattedAddress[1]}, USA`}
                      </p>
                      <img
                        src={`${venueInfo.bestPhoto.prefix}200x200${
                          venueInfo.bestPhoto.suffix
                        }`}
                        alt={`${venueInfo.name} venue`}
                      />
                    </div>
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
        containerElement={
          <div id="page-wrap" className="map-container" role="application" />
        }
        mapElement={<div id="map-element" />}
      />
    );
  }
}

export default Map;
