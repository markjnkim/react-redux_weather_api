import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/map';
// Data comes in from mapStateToProps
// Smart Component
class WeatherList extends Component {
  // renders a single row (one city)
  renderWeather(cityData) {
    const name = cityData.city.name;
    const temps = _.map(cityData.list.map(weather => weather.main.temp), temp => 1.8 * (temp - 273) + 32);
    const pressures = cityData.list.map(weather => weather.main.pressure)
    const humiditys = cityData.list.map(weather => weather.main.humidity)
    const { lon, lat } = cityData.city.coord;
    

    return (
      <tr key={name}>
        <td><GoogleMap lat = {lat} lon = {lon} /></td>
        <td><Chart data={temps} color="purple" units="F" /></td>
        <td><Chart data={pressures} color="red" units="hPa" /></td>
        <td><Chart data={humiditys} color="blue" units="%" /></td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (F)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    )
  }
}

function mapStateToProps(state) {
  // from (reducers/index.js) combineReducers object weather: WeatherReducer
  return { weather: state.weather}
  // ES6 
}
// function mapStateToProps({ weather }) {
//       return { weather };
// }   // => const weather = state.weather

export default connect(mapStateToProps)(WeatherList);