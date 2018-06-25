import React, {Component} from 'react';

class SearchBar extends Component {
  render () {
    return (
      <div className="container row">
        <div className="input-field col s6 offset-s3">
          <input id="search_bar" type="text" className="validate"/>
          <label htmlFor="search_bar" className="active">Find city</label>
        </div>
      </div>
    );
  }
}

export default SearchBar;