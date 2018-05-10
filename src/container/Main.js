import React, {Component} from 'react';
import WeatherInfo from '../component/WeatherInfo';

class Main extends Component {
  render () {
    return (
      <main className="container">
        <WeatherInfo/>
      </main>
    );
  }
}

export default Main;