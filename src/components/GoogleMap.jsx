import { REACT_APP_GOOGLE_MAPS_API_KEY } from '../config'
import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';

// import { GoogleMap, Marker } from 'react-google-maps'

const mapStyles = {
  width: '100%',
  height: '100%',
  border: 'solid 0px black',
  borderRadius: '20px'
};

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {}
  }
  render() {
    const { events, handleMarkerClick } = this.props
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
          lat: 53.740997,
          lng: -2.013413
        }}
      >
        {events.map((event) => {
          return (
            <Marker
              key={event.title}
              position={{ lat: event.location.lat, lng: event.location.lon }}
              // onClick={() => { handleMarkerClick(event.venue) }} 
              onClick={this.onMarkerClick}
              name={event.venue}
            />
          )
        })}

        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h3>{this.state.selectedPlace.name}</h3>
          </div>
        </InfoWindow>

      </Map>
    );
  }
  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };
}

export default GoogleApiWrapper({
  apiKey: REACT_APP_GOOGLE_MAPS_API_KEY
})(MapContainer);