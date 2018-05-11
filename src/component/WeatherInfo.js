import React, {Component} from 'react';
import CityWeather from './CityWeather';
import appId from '../config/openweathermap';

class WeatherInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {cityWeather: null};
  }

  componentDidMount() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.props.city}&appid=${appId}`)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(response => this.setState({cityWeather: response}))
      .catch(console.log)
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
}

export default WeatherInfo;