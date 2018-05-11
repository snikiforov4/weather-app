import React, {Component} from 'react';
import CitiesSuggestionBar from '../component/CitiesSuggestionBar';
import SearchBar from '../component/SearchBar';

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