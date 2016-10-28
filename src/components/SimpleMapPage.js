import React from 'react';
import { render } from 'react-dom';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
const position = [51.505, -0.09];
class SimpleMapPage extends React.Component {
  constructor() {
    super();
    this.state = {
      lat: 51.505,
      lng: -0.09,
      zoom: 14,
    };
  }

  render(){
    const position = [this.state.lat, this.state.lng];
    return (
      <Map center={position} zoom={this.state.zoom}>
       <TileLayer
         attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
         url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
       />
       <Marker position={position}>
         <Popup>
           <span>A pretty CSS3 popup. <br/> Easily customizable.</span>
         </Popup>
       </Marker>
       </Map>
    )
  }
}

export default SimpleMapPage;
