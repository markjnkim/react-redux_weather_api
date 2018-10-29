import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
    this.onInputChange = this.onInputChange.bind(this)
    this.onFormSubmit = this.onFormSubmit.bind(this)
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();
    // fetch action creator passing search term
    this.props.fetchWeather(this.state.term);
    // clears searchbar form rerenders
    this.setState({ term: '' });
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input 
          placeholder="Get a 5 day forecast in your city"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange} />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}

// connects the Action Creator to Component PROPS
//  
function mapDispatchToProps(dispatch) {
  // flows action creator through mid ware to reducers
  return bindActionCreators({ fetchWeather }, dispatch);
}

// function passes in as second argument
export default connect(null, mapDispatchToProps)(SearchBar)