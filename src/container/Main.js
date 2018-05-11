import React, {Component} from 'react';
import WeatherInfo from '../component/WeatherInfo';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render () {
    return (
      <main className="container">
        <WeatherInfo city={this.props.city}/>
      </main>
    );
  }
}

export default Main;