import React, {Component} from 'react';
import CityWeather from './CityWeather';
import appId from '../config/openweathermap';

class WeatherInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityWeather: null,
      favorites: new Set(),
    };
    this.onMarkFavorite = this.onMarkFavorite.bind(this);
  }

  render() {
    const city = this.state.cityWeather ? (
      <div className="col s12 m6">
        <CityWeather weather={this.state.cityWeather} onMarkFavorite={this.onMarkFavorite}
                     favorite={this.state.favorites.has(this.props.city)}/>
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

  componentDidUpdate(prevProps) {
    if (prevProps.city !== this.props.city) {
      console.log(`Receive weather for city: ${this.props.city}`);
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.props.city}&appid=${appId}`)
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          throw new Error('Network response was not ok.');
        })
        .then(response => this.setState({cityWeather: response}))
        .catch(console.log);
    }
  }

  onMarkFavorite(cityName) {
    this.setState({favorite: this.state.favorites.add(cityName)});
    console.log(this.state.favorites);
    console.log(`Mark ${cityName} as favorite`);
  }
}

export default WeatherInfo;