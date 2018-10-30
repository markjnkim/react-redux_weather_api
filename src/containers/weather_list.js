import React, { Component } from 'react';
import { connect } from 'react-redux';
// Data comes in from mapStateToProps
// Smart Component
class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name;
    return (
      <tr key={name}>
        <td>{name}</td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
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