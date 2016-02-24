'use strict';

import React from 'react';
import { connect } from 'react-redux'
import { removeStream } from '../../actions/StreamActions'

require('./Streamer.css');

class Streamer extends React.Component {
  handleRemoveStream() {
    this.props.dispatch(removeStream(this.props.stream.stream._id))
  }
  render() {
    return (
      <div className="stream-component">
        <div className="stream-avatar">

        </div>
        <div className="stream-remove" onClick={this.handleRemoveStream.bind(this)}>
          <span className="fa-stack">
            <i className="fa fa-circle fa-stack-2x"></i>
            <i className="fa fa-minus fa-stack-1x"></i>
          </span>
        </div>
      </div>
    );
  }
}

Streamer.displayName = 'Streamer';

// Uncomment properties you need
// Streamer.propTypes = {};
// Streamer.defaultProps = {};

export default connect()(Streamer);
