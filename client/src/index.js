import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import configureStore from "./configureStore";

import MoviesContainer from './containers/MoviesContainer';

import { fetchAllMovies } from './actions/index'


import './index.css';

const store = configureStore();
store.dispatch(fetchAllMovies());

ReactDOM.render(
  <Provider store={store}>
    <MoviesContainer />
  </Provider>,
  document.getElementById('root')
);
