'use strict';

import React from 'react';

require('./Search.css');

class Search extends React.Component {
  handleClick() {
    this.props.addStreamer(this.state.name)
  }
  handleChange(event) {
    this.setState({
      name: event.target.value
    })
  }
  handleSubmit(event) {
    event.preventDefault()
    this.props.addStreamer(this.state.name)
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
        <input type="text" onChange={this.handleChange.bind(this)}/>
      </form>
    );
  }
}

Search.displayName = 'Search';

// Uncomment properties you need
// Search.propTypes = {};
// Search.defaultProps = {};

export default Search;
