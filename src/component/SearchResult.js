import React, {Component} from 'react';
import CityWeather from './CityWeather';
import appId from '../config/openweathermap';

export default class SearchResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResult: null,
    };
  }

  componentDidMount() {
    this.findCities(this.props.searchQuery);
  }

  render() {
    const cities = [];
    if (this.state.searchResult) {
      for (let cityWeather of this.state.searchResult.list) {
        cities.push(this.buildCityWeather(cityWeather));
      }
    }
    return (
      <div className="row">
        {cities}
      </div>
    );
  }

  buildCityWeather(cityWeather) {
    return (
      <div key={cityWeather.id} className="col s12 m6">
        <CityWeather weather={cityWeather}
                     onMarkFavorite={function () {}}
                     favorite={false}/>
      </div>
    );
  }

  componentDidUpdate(prevProps) {
    const query = this.props.searchQuery;
    if (prevProps.searchQuery !== query) {
      this.findCities(query);
    }
  }

  findCities(query) {
    if (query) {
      console.log(`Search query: '${query}'`);
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
