import { combineReducers } from 'redux';
import movie from './moviesReducer';

const moviesApp = combineReducers({
  movie
})

export default moviesApp
