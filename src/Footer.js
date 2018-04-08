import React, {Component} from 'react';
import LastUpdateInfo from './LastUpdateInfo';

class Footer extends Component {
  render () {
    return (
      <footer>
        <LastUpdateInfo/>
        <hr/>
        <p>&copy; 2018 Serhii Nykyforov All Rights Reserved.</p>
      </footer>
    );
  }
}

export default Footer;