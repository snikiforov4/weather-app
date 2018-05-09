import React, {Component} from 'react';
import LastUpdateInfo from '../LastUpdateInfo';

class Footer extends Component {
  render () {
    return (
      <footer className="page-footer">
        <LastUpdateInfo/>
        <div className="footer-copyright">
          <div className="container">
            &copy; 2018 Serhii Nykyforov
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;