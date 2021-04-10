
import React, { Component } from 'react';


import { Link } from "react-router-dom";
import { ReactComponent as IconClock } from "bootstrap-icons/icons/clock.svg";
import { ReactComponent as IconBellFill } from "bootstrap-icons/icons/bell-fill.svg";
import { ReactComponent as IconCash } from "bootstrap-icons/icons/cash.svg";
import { ReactComponent as IconCartCheckFill } from "bootstrap-icons/icons/cart-check-fill.svg";
import { ReactComponent as IconCartxFill } from "bootstrap-icons/icons/cart-x-fill.svg";
import { ReactComponent as IconTagFill } from "bootstrap-icons/icons/tag-fill.svg";
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import Header from './Header';
import TopMenu from './TopMenu';
 
export class MapContainer extends Component {
    state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
      };
     
      onMarkerClick = (props, marker, e) =>
        this.setState({
          selectedPlace: props,
          activeMarker: marker,
          showingInfoWindow: true
        });
     
      onMapClicked = (props) => {
        if (this.state.showingInfoWindow) {
          this.setState({
            showingInfoWindow: false,
            activeMarker: null
          })
        }
      };
    render() {
    return (
      <div>
         <Header />
        <TopMenu />
      <div className="container mb-3 center" >
          <Map google={this.props.google} 
          containerStyle={{
            // position: 'relative',  
            width: '90%',
            height: '90%'
          }}
      onClick={this.onMapClicked}
      zoom={14}>
 
        <Marker onClick={this.onMarkerClick}
    title={'The marker`s title will appear as a tooltip.'}
    name={'Borrower Location'}
    position={{lat: 37.778519, lng: -122.405640}} />
  <Marker onClick={this.onMarkerClick}
    name={'Lender Location'}
    position={{lat: 37.759703, lng: -122.428093}} /> 
         <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
        </InfoWindow></Map>
  
     
      </div>
  </div>

    );
  }
}
 
export default GoogleApiWrapper({
    apiKey: 'AIzaSyA0ieuvPQWOg9bdWWUrx16i6GqhIzbSaCo'
})(MapContainer)