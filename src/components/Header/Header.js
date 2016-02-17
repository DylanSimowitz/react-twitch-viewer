'use strict';

import React from 'react';
import Search from '../Search/Search';


require('./Header.css');

class Header extends React.Component {
  render() {
    return (
      <div className="header-component">
        <div className="logo">
          <img src="http://s.jtvnw.net/jtv_user_pictures/hosted_images/Twitch_BlackLogo.png" alt="Twitch Logo"/>
        </div>
        <Search addStreamer={this.props.addStreamer}/>
      </div>
    );
  }
}

Header.displayName = 'Header';

// Uncomment properties you need
// Header.propTypes = {};
// Header.defaultProps = {};

export default Header;
