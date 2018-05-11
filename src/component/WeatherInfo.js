import React, {Component} from 'react';
import CityWeather from './CityWeather';
import appId from '../config/openweathermap';

class WeatherInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {cityWeather: null};
  }

  render() {
    const city = this.state.cityWeather ? (
      <div className="col s12 m6">
        <CityWeather weather={this.state.cityWeather}/>
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

  static async getDerivedStateFromProps(nextProps, prevState) {
    const prevCityName = prevState.cityWeather && prevState.cityWeather.name;
    if (nextProps.city !== prevCityName) {
      try {
        const cityWeather = await WeatherInfo.getWeather(nextProps.city);
        return {cityWeather: cityWeather}
      } catch (e) {
        console.log(e);
        return null
      }
    }
    return null
  }

  static async getWeather(city) {
    if (city) {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appId}`);
      if (response.ok) {
        return await response.json();
      }
      throw new Error('Network response was not ok.');
    }
  }
}

export default WeatherInfo;