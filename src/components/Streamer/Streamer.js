'use strict';

import React from 'react';


require('./Streamer.css');

class Streamer extends React.Component {
  render() {
    return (
      <div className="streamer-component">
        <div className="streamer-avatar">

        </div>
        
      </div>
    );
  }
}

Streamer.displayName = 'Streamer';

// Uncomment properties you need
// Streamer.propTypes = {};
// Streamer.defaultProps = {};

export default Streamer;
