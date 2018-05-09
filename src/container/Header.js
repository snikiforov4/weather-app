import React, {Component} from 'react';
import SearchBar from '../SearchBar';
import CitiesSuggestionBar from '../CitiesSuggestionBar';

class Header extends Component {
  render() {
    return (
      <header>
        <CitiesSuggestionBar/>
        <SearchBar/>
      </header>
    );
  }
}

export default Header;