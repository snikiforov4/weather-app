import React, {Component} from 'react';
import Header from './container/Header';
import Main from './container/Main';
import Footer from './container/Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {city: null};
    this.onCityChoose = this.onCityChoose.bind(this);
  }

  render() {
    return (
      <div className="center-align site">
        <Header onCityChoose={this.onCityChoose}/>
        <Main city={this.state.city}/>
        <Footer/>
      </div>
    );
  }

  onCityChoose(e) {
    e.preventDefault();
    this.setState({city: e.target.text});
  }

}

export default App;
