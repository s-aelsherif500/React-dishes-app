import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
 
export class MapContainer extends Component {
  render() {
    return (
      <Map google={this.props.google} zoom={14}>
 
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
 
        <InfoWindow onClose={this.onInfoWindowClose}>

        </InfoWindow>
      </Map>
    );
  }
}
 
const API_KEY = "AIzaSyCiHvmmX2JhdbLcxL8oGtg4GgIyBg9QcWs";
export default GoogleApiWrapper({
  apiKey: (API_KEY)
})(MapContainer)
