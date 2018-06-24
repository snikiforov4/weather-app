import React, {Component} from 'react';
import CityWeather from './CityWeather';
import WeatherService from '../service/WeatherService';

export default class WeatherInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherCache: new Map(),
      favorites: new Set(),
    };
    this.onMarkFavorite = this.onMarkFavorite.bind(this);
  }

  componentDidMount() {
    let favoriteCities = JSON.parse(localStorage.getItem('favorites') || []);
    console.log(`Favorite cities from storage: ${favoriteCities}`);
    for (let favoriteCity of favoriteCities) {
      this.updateWeatherCache(favoriteCity);
    }
    this.setState({favorites: new Set(favoriteCities)});
  }

  render() {
    const cities = [];
    if (this.state.weatherCache.has(this.props.city) && !this.state.favorites.has(this.props.city)) {
      cities.push(this.buildCityWeather(this.props.city));
    }
    for (let favoriteCity of this.state.favorites) {
      if (this.state.weatherCache.has(favoriteCity)) {
        cities.push(this.buildCityWeather(favoriteCity));
      }
    }
    return (
      <div className="row">
        <div className="col s12 m8 offset-m2">
          <div className="row">
            {cities}
          </div>
        </div>
      </div>
    );
  }

  buildCityWeather(cityName) {
    return (
      <div key={cityName} className="col s12 m6">
        <CityWeather weather={this.state.weatherCache.get(cityName)}
                     onMarkFavorite={this.onMarkFavorite}
                     favorite={this.state.favorites.has(cityName)}/>
      </div>
    );
  }

  componentDidUpdate(prevProps) {
    if (this.props.city) {
      this.updateWeatherCache(this.props.city);
    }
  }

  updateWeatherCache(cityName) {
    const weatherCache = this.state.weatherCache;
    if (!weatherCache.has(cityName)) {
      WeatherService.getWeatherByCityName(cityName)
        .then(response => {
          weatherCache.set(cityName, response);
          this.setState({weatherCache: weatherCache});
        })
    }
  }

  onMarkFavorite(cityName) {
    let favorites = this.state.favorites;
    if (favorites.has(cityName)) {
      favorites.delete(cityName);
      console.log(`Remove ${cityName} from favorites`);
    } else {
      favorites = new Set([cityName, ...favorites]);
      console.log(`Mark ${cityName} as favorite`);
    }
    this.setState({favorites: favorites});
    let favoritesStr = JSON.stringify([...favorites]);
    localStorage.setItem('favorites', favoritesStr);
    console.log(`List of favorites: ${favoritesStr}`);
  }
}
