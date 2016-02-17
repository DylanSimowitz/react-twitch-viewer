require('normalize.css');
require('font-awesome-webpack');
require('./App.css');

import React from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import actionCreators from '../../actions/streamerActions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class App extends React.Component {
  render() {
    return (
      <div className="index">
        <Header addStreamer={this.props.actions.addStreamer}/>
        <Main streamers={this.props.streamers} removeStreamer={this.props.actions.removeStreamer}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actionCreators, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
