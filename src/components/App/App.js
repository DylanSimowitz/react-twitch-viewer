require('normalize.css');
require('./App.css');

import React from 'react';

let yeomanImage = require('../../images/yeoman.png');

class App extends React.Component {
  render() {
    return (
      <div className="index">
        <img src={yeomanImage} alt="Yeoman Generator" />
        <div className="notice">Please edit <code>src/components/Main.js</code> to get started!</div>
      </div>
    );
  }
}

App.defaultProps = {
};

export default App;
