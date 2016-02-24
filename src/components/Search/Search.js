'use strict';

import React from 'react';
import { addUser } from '../../actions/UserActions'
import { connect } from 'react-redux'

require('./Search.css');

class Search extends React.Component {
  constructor() {
    super()
    this.state = {
      name: ''
    }
  }
  clearInput() {
    this.setState({
      name: ''
    })
  }
  handleClick() {
    this.props.dispatch(addUser(this.state.name))
    this.clearInput()
  }
  handleChange(event) {
    this.setState({
      name: event.target.value
    })
  }
  handleSubmit(event) {
    event.preventDefault()
    this.props.dispatch(addUser(this.state.name))
    this.clearInput()
  }
  render() {
    return (
      <form className="search-component" onSubmit={this.handleSubmit.bind(this)}>
        <div className="add-streamer" onClick={this.handleClick.bind(this)}>
          <span className="fa-stack">
            <i className="fa fa-circle fa-stack-2x"></i>
            <i className="fa fa-plus fa-stack-1x"></i>
          </span>
        </div>
        <input type="text" value={this.state.name} onChange={this.handleChange.bind(this)}/>
      </form>
    );
  }
}

Search.displayName = 'Search';

// Uncomment properties you need
// Search.propTypes = {};
// Search.defaultProps = {};

export default connect()(Search);
