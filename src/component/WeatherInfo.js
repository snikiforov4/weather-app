import React, {Component} from 'react';
import CityWeather from './CityWeather';
import appId from '../config/openweathermap';

class WeatherInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {city: null};
  }

  componentDidMount() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?id=${this.props.cityId}&appid=${appId}`, {method: 'GET',})
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw Error(`Bad response response=${response}`)
        }
      })
      .then(response => this.setState({city: response}))
      .catch(console.log)
  }

  render() {
    const city = this.state.city ? (
      <div className="col s12 m6">
        <CityWeather city={this.state.city}/>
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