import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducers/reducer'
import App from './components/App/App';

let store = createStore(reducer)
// Render the main component into the dom
ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
   document.getElementById('app')
 );