require('normalize.css');
require('font-awesome/css/font-awesome.css');
require('./App.css');

import React from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import actionCreators from '../../actions/index'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class App extends React.Component {
  render() {
    return (
      <div className="index">
        <Header/>
        <Main streams={this.props.streams} channels={this.props.channels} featured={this.props.featured}/>
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
