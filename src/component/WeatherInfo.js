import React, {Component} from 'react';
import CityWeather from './CityWeather';
import response from '../config/response';

class WeatherInfo extends Component {
  render() {
    return (
      <div>
        {/*TODO the weather for favourite cities*/}
        <div className="row">
          <div className="col s12 m4">
            <CityWeather city={response}/>
          </div>
        </div>
      </div>
    );
  }
}

export default WeatherInfo;