'use strict';

import React from 'react';
import Streamer from '../Streamer/Streamer';

require('./Main.css');

class Main extends React.Component {
  render() {
    return (
      <div className="main-component">
        {this.props.streamers.map((streamer, index) => {
          return <Streamer key={index} name={streamer.name}/>
        })}
      </div>
    );
  }
}

Main.displayName = 'Main';

// Uncomment properties you need
// Main.propTypes = {};
// Main.defaultProps = {};

export default Main;
