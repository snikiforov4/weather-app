import React, {Component} from 'react';
import CityWeather from './CityWeather';
import appId from '../config/openweathermap';

class WeatherInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherCache: new Map(),
      favorites: new Set(),
    };
    this.onMarkFavorite = this.onMarkFavorite.bind(this);
  }

  render() {
    const city = this.state.weatherCache.has(this.props.city) ? (
      <div className="col s12 m6">
        <CityWeather weather={this.state.weatherCache.get(this.props.city)}
                     onMarkFavorite={this.onMarkFavorite}
                     favorite={this.state.favorites.has(this.props.city)}/>
      </div>
    ) : null;
    return (
      <div className="row">
        <div className="col s12 m8 offset-m2">
          {/*TODO the weather for favourite cities*/}
          <div className="row">
            {city}
          </div>
        </div>
      </div>
    );
  }

  componentDidUpdate(prevProps) {
    const weatherCache = this.state.weatherCache;
    if (!weatherCache.has(this.props.city)) {
      console.log(`Receive weather for city: ${this.props.city}`);
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.props.city}&appid=${appId}`)
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          throw new Error('Network response was not ok.');
        })
        .then(response => {
          weatherCache.set(this.props.city, response);
          this.setState({weatherCache: weatherCache});
        })
        .catch(console.log);
    }
  }

  onMarkFavorite(cityName) {
    let favorites = this.state.favorites;
    if (favorites.has(cityName)) {
      favorites.delete(cityName);
      console.log(`Remove ${cityName} from favorites`);
    } else {
      favorites.add(cityName);
      console.log(`Mark ${cityName} as favorite`);
    }
    this.setState({favorites: favorites});
    console.log(`List of favorites: ${[...favorites]}`);
  }
}

export default WeatherInfo;