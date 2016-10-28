import React from 'react';
import MovieList from './MovieList';
import MovieSearch from './MovieSearch';

export default class Main extends React.Component {
  render() {
    return (
      <div>
        <div className="container is-fluid">
          <MovieSearch {...this.props}/>
        </div>

        <div className="container is-fluid">
          <MovieList {...this.props}/>
        </div>

        <Map google={this.props.google} zoom={14}>
          <Marker onClick={this.onMarkerClick}
                  name={'Current location'} />
          <InfoWindow onClose={this.onInfoWindowClose}>
              <div>
                <h1>{this.state.selectedPlace.name}</h1>
              </div>
          </InfoWindow>
        </Map>
      </div>
    )
  }
}
