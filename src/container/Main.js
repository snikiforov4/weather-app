import React, {Component} from 'react';
import SearchResult from '../component/SearchResult';
import WeatherInfo from '../component/WeatherInfo';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <main className="container">
        {this.props.searchQuery &&
        <div className="row">
          <div className="col s12 m8 offset-m2">
            <SearchResult searchQuery={this.props.searchQuery}/>
          </div>
        </div>
        }
        <WeatherInfo city={this.props.city}/>
      </main>
    );
  }
}

export default Main;