import React, {Component} from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import WeatherInfo from './WeatherInfo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <WeatherInfo/>
        <Footer/>
      </div>
    );
  }
}

export default App;
