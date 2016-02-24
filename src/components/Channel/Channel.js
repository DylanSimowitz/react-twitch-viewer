'use strict';

import React from 'react';
import { connect } from 'react-redux'
import { removeChannel } from '../../actions/ChannelActions'

require('./Channel.css');

class Channel extends React.Component {
  handleRemoveChannel() {
    this.props.dispatch(removeChannel(this.props.channel._id))
  }
  render() {
    return (
      <div className="channel-component">
        <div className="channel-avatar">

        </div>
        <div className="channel-remove" onClick={this.handleRemoveChannel.bind(this)}>
          <span className="fa-stack">
            <i className="fa fa-circle fa-stack-2x"></i>
            <i className="fa fa-minus fa-stack-1x"></i>
          </span>
        </div>
      </div>
    );
  }
}

Channel.displayName = 'Channel';

// Uncomment properties you need
// Channel.propTypes = {};
// Channel.defaultProps = {};

export default connect()(Channel);
