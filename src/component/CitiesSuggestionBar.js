import React, {Component} from 'react';
import '../styles/CitiesSuggestionBar.css';
import suggestedCitiesList from '../config/suggestedCities';
import {shuffle} from '../util/array';

export default class CitiesSuggestionBar extends Component {
  constructor(props) {
    super(props);
    this.state = {cities: []};
  }

  componentDidMount() {
    const citiesNames = suggestedCitiesList.map(e => e.name);
    shuffle(citiesNames);
    this.setState({cities: citiesNames.slice(0, 5)});
  }

  render() {
    const cities = this.state.cities.map(cityName =>
      <a key={cityName} onClick={this.props.onChooseCity}>{cityName}</a>
    );
    return (
      <div className="container row">
        <div className="col s6 offset-s3 left-align">
          Weather in:
          {cities}
        </div>
      </div>
    );
  }
}
