'use strict';

import React from 'react';
import { connect } from 'react-redux'
import { removeStream, embedStream } from '../../actions/StreamActions'

require('./Stream.css');

class Stream extends React.Component {
  handleRemoveStream() {
    this.props.dispatch(removeStream(this.props.stream._id))
  }
  handleStreamEmbed() {
    this.props.dispatch(embedStream(this.props.stream.channel.name))
  }
  render() {
    return (
      <div className="stream-component" onClick={this.handleStreamEmbed.bind(this)}>
        <div className="stream-title">
          <span>{this.props.stream.channel.status.substr(0,35)}...</span>
        </div>
        <div className="stream-container">
          <img src={this.props.stream.channel.logo} alt={this.props} className="stream-avatar"/>
          <div className="stream-info">
            <div className="stream-game">
              <span>{this.props.stream.game}</span>
            </div>
            <div className="stream-stats">
              <span>{this.props.stream.viewers} watching</span>
            </div>
          </div>
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

Stream.displayName = 'Stream';

// Uncomment properties you need
// Streamer.propTypes = {};
// Streamer.defaultProps = {};

export default connect()(Stream);
