import appId from "../config/openweathermap";

export default class WeatherService {
  static async getWeatherByCityName(cityName) {
    console.log(`Receive weather for city: ${cityName}`);
    return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${appId}`)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .catch(console.log);
  }

  static async findByQuery(query) {
    console.log(`Search query: '${query}'`);
    return fetch(`https://api.openweathermap.org/data/2.5/find?q=${query}&type=like&sort=population&cnt=4&appid=${appId}`)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .catch(console.log)
  }

}