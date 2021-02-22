import React, { Component } from 'react'


import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import ThreeDRotationIcon from '@material-ui/icons/ThreeDRotation';

export  class MapContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
          showingInfoWindow: false,
          activeMarker: {},
          selectedPlace: {},
        }
    
        // binding this to event-handler functions
        this.onMarkerClick = this.onMarkerClick.bind(this);
        this.onMapClicked = this.onMapClicked.bind(this);
      }
    
      onMarkerClick(props, marker, e) {
        this.setState({
          selectedPlace: props,
          activeMarker: marker,
          showingInfoWindow: true
        });
      }
    
      onMapClicked(props) {
        if (this.state.showingInfoWindow) {
          this.setState({
            showingInfoWindow: false,
            activeMarker: null
          })
        }
      }


    render() {
        if (!this.props.google) {
            return <div>Loading...</div>;
          }
        return (
            <Map google={this.props.google} zoom={14} onClick={this.onMapClicked} initialCenter={{
                lat: 33.006590,
                lng: 35.094860
              }}>

            <Marker onClick={this.onMarkerClick}
                    position={{lat: 33.006590, lng: 35.094860}}
                    name={'Current location'} 
                    title={'3D store, Gaaton Boulevard, Nahariya'}
                    />
    
            <InfoWindow marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}  >
                <div>
                  <h3><ThreeDRotationIcon fontSize="large"/> store</h3>
                  <p>Adress: 29 Gaaton Boulevard, Nahariya</p>
                  <p>Telephone: 04-9825211</p>
                  <a href="/"> View Homepage </a>
                  <img className="img-fluid float-right" src="/images/home.jpg" alt="logo" width="50" />
                </div>
            </InfoWindow>
          </Map>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyBVtHhDa2ErB1UuzEc1t3dXozBGaSHiQZk')
  })(MapContainer)