import React, {Component} from 'react';
import Header from './container/Header';
import Main from './container/Main';
import Footer from './container/Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {city: 'Kiev'};
  }

  render() {
    return (
      <div className="center-align">
        <Header/>
        <Main city={this.state.city}/>
        <Footer/>
      </div>
    );
  }
}

export default App;
