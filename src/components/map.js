import React, { Component } from 'react';

export default class GoogleMap extends Component {
  componentDidMount() {
    // embedded google map
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
  }
  render() {
    return (
      // this.ref.map
      <div ref="map" />
    )
  }
}
// export default GoogleMap;