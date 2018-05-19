import React, {Component} from 'react';
import CityWeather from './CityWeather';
import appId from '../config/openweathermap';

class SearchResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResult: null,
    };
  }

  render() {
    const cities = [];
    if (this.state.searchResult) {
      for (let cityWeather of this.state.searchResult.list) {
        cities.push(this.buildCityWeather(cityWeather.name));
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
        <CityWeather weather={this.getWeatherFromResult(cityName)}
                     onMarkFavorite={function () {}}
                     favorite={false}/>
      </div>
    );
  }

  getWeatherFromResult(cityName) {
    return {}
  }

  componentDidUpdate(prevProps) {
    const query = this.props.searchQuery;
    if (query && prevProps.searchQuery !== query) {
      console.log(`Search query: ${query}`);
      fetch(`https://api.openweathermap.org/data/2.5/find?q=${query}&type=like&sort=population&cnt=4&appid=${appId}`)
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          throw new Error('Network response was not ok.');
        })
        .then(response => {
          this.setState({searchResult: response});
        })
        .catch(console.log);
    }
  }

}

export default SearchResult;