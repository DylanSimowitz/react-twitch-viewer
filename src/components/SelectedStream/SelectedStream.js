'use strict';

import React from 'react';

require('./SelectedStream.css');

class SelectedStream extends React.Component {
  handleSelectedStreamEmbed() {

  }
  render() {
    return (
      <div className="selected-stream-component">
        <iframe src={'http://player.twitch.tv/?channel=' + this.props.channel} autoPlay="false" height="378" width="620" frameBorder="0"></iframe>
      </div>
    );
  }
}

SelectedStream.displayName = 'SelectedStream';

// Uncomment properties you need
// SelectedStreamer.propTypes = {};
// SelectedStreamer.defaultProps = {};

export default SelectedStream;
