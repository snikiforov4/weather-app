import React, {Component} from 'react';
import CitiesSuggestionBar from '../CitiesSuggestionBar';
import SearchBar from '../SearchBar';

class Header extends Component {
  render() {
    return (
      <header>
        <CitiesSuggestionBar cities={['Dnipro', 'Kiev', 'Lviv', 'Odessa']}/>
        <SearchBar/>
      </header>
    );
  }
}

export default Header;