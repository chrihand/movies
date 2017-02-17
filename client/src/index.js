import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import moviesApp from './reducers'
import App from './components/App/App';
import './index.css';

let store = createStore(moviesApp)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
