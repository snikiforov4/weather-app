import React, {Component} from 'react';
import Header from './container/Header';
import Main from './container/Main';
import Footer from './container/Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {city: null, searchQuery: null};
    this.onChooseCity = this.onChooseCity.bind(this);
    this.onFindCity = this.onFindCity.bind(this);
  }

  render() {
    return (
      <div className="center-align site">
        <Header onChooseCity={this.onChooseCity} onFindCity={this.onFindCity}/>
        <Main city={this.state.city} searchQuery={this.state.searchQuery}/>
        <Footer/>
      </div>
    );
  }

  onChooseCity(e) {
    e.preventDefault();
    this.setState({city: e.target.text});
  }

  onFindCity(e) {
    if (e.key === 'Enter') {
      this.setState({searchQuery: e.target.value});
    }
  }

}

export default App;
