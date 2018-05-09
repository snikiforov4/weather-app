import React, {Component} from 'react';
import Header from './container/Header';
import Main from './container/Main';
import Footer from './container/Footer';

class App extends Component {
  render() {
    return (
      <div className="center-align">
        <Header/>
        <Main/>
        <Footer/>
      </div>
    );
  }
}

export default App;
