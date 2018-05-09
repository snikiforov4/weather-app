import React, {Component} from 'react';
import '../styles/CitiesSuggestionBar.css';

class CitiesSuggestionBar extends Component {
  render() {
    const cities = this.props.cities.map(cityName =>
      <a key={cityName} href={`#${cityName}`}>{cityName}</a>
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