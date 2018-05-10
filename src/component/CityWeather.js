import React, {Component} from 'react';

class CityWeather extends Component {
  render() {
    const weatherIcon = `https://openweathermap.org/img/w/${this.props.city.weather[0].icon}.png`;
    return (
      <div className="card">
        <div className="card-content">
              <span className="card-title">
                {this.props.city.name}
                <i className="material-icons right materialize-red-text">favorite_border</i>
              </span>
          <div className="row">
            <div className="col s2"><img src={weatherIcon} alt="weather icon"/></div>
            <div className="col s10 left-align">
              <p className="grey-text text-lighten-1">{this.props.city.weather[0].main}</p>
              <p>{this.props.city.main.temp} &#8457;</p>
              <p>Min temperature: {this.props.city.main.temp_min} &#8457;</p>
              <p>Max temperature: {this.props.city.main.temp_max} &#8457;</p>
              <p>Humidity: {this.props.city.main.humidity}%</p>
              <p>Wind: {this.props.city.wind.speed}m/s</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CityWeather;