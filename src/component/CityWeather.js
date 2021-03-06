import React, {Component} from 'react';

class CityWeather extends Component {
  render() {
    const weather = this.props.weather;
    const weatherIcon = `https://openweathermap.org/img/w/${weather.weather[0].icon}.png`;
    const favoriteIcon = this.props.favorite ? 'favorite' : 'favorite_border';
    const temperatureSign = '\u212A';
    return (
      <div className="card">
        <div className="card-content">
              <span className="card-title">
                {weather.name}
                <a>
                  <i className="material-icons right materialize-red-text"
                     onClick={this.props.onMarkFavorite.bind(this, weather.name)}>{favoriteIcon}</i>
                </a>
              </span>
          <div className="row">
            <div className="col s2"><img src={weatherIcon} alt="weather icon"/></div>
            <div className="col s10 left-align">
              <p className="grey-text text-lighten-1">{weather.weather[0].main}</p>
              <p>{weather.main.temp} {temperatureSign}</p>
              <p>Min temperature: {weather.main.temp_min} {temperatureSign}</p>
              <p>Max temperature: {weather.main.temp_max} {temperatureSign}</p>
              <p>Humidity: {weather.main.humidity}%</p>
              <p>Wind: {weather.wind.speed}m/s</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CityWeather;