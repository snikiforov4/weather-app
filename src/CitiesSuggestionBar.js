import React, {Component} from 'react';
import './CitiesSuggestionBar.css';

class CitiesSuggestionBar extends Component {
  render() {
    const cities = this.props.cities.map(cityName =>
      <a href='#'>{cityName}</a>
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

export default CitiesSuggestionBar;