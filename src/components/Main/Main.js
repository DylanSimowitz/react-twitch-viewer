'use strict';

import React from 'react';
import SelectedStream from '../SelectedStream/SelectedStream'
import Stream from '../Stream/Stream';
import Channel from '../Channel/Channel';

import CSSTransitionGroup from 'react-addons-css-transition-group'
require('./Main.css');

class Main extends React.Component {
  render() {
    if (this.props.streams.length > 0) {

    }
    return (
      <div className="main-component">
        <div className="streams">
          {this.props.streams.map(stream => {
            return <Stream key={stream._id} stream={stream}/>
          })}
        </div>
        <div className="stream-embed">
          <SelectedStream channel={this.props.featured}/>
        </div>
        <div className="channels">
          <CSSTransitionGroup transitionName="stream-transition" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
          {this.props.channels.map(channel => {
            return <Channel key={channel._id} channel={channel}/>
          })}
        </CSSTransitionGroup>
        </div>
      </div>
    );
  }
}

Main.displayName = 'Main';

// Uncomment properties you need
// Main.propTypes = {};
// Main.defaultProps = {};

export default Main;
