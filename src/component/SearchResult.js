import React, {Component} from 'react';
import CityWeather from './CityWeather';
import WeatherService from '../service/WeatherService';

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
                     onMarkFavorite={function () {}} /* todo wtf?!*/
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
      WeatherService.findByQuery(query)
        .then(response => {
          this.setState({searchResult: response});
        })
    }
  }
}
