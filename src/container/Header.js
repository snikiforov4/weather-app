import React, {Component} from 'react';
import SearchBar from '../SearchBar';
import CitiesSuggestionBar from '../CitiesSuggestionBar';

class Header extends Component {
  render() {
    return (
      <header>
        <SearchBar/>
        <CitiesSuggestionBar/>
      </header>
    );
  }
}

export default Header;