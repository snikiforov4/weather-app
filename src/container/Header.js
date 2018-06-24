import React, {Component} from 'react';
import CitiesSuggestionBar from '../component/CitiesSuggestionBar';
import SearchBar from '../component/SearchBar';

export default class Header extends Component {
  render() {
    return (
      <header className='header'>
        <CitiesSuggestionBar onChooseCity={this.props.onChooseCity}/>
        <SearchBar onFindCity={this.props.onFindCity}/>
      </header>
    );
  }
}
