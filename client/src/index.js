import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import configureStore from "./configureStore";

import '../assets/style/index.css';
import MoviesContainer from './containers/MoviesContainer';

import { fetchAllMovies, fetchGenres } from './actions/index';

const store = configureStore();
store.dispatch(fetchAllMovies());
store.dispatch(fetchGenres());

ReactDOM.render(
  <Provider store={store}>
    <MoviesContainer />
  </Provider>,
  document.getElementById('root')
);
