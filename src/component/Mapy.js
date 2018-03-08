import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';


export default class MapIss extends Component {
  state = {
    lat: 15.887292,
    lng: -61.313367,
    zoom: 15,
  }

 
  

  render () {
   
    let position = [this.state.lat, this.state.lng]
    return (
      <div id='mapid'>
        <Map center={position} zoom={this.state.zoom}>
          <TileLayer
            attribution='&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors'
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          />
          <Marker position={position}>
            <Popup>
              <span>
                 Casablanca    <br />  Restorante
              </span>
            </Popup>
          </Marker>
        </Map>
      </div>
    )
  }
}