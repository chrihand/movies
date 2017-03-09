import { combineReducers } from 'redux';
import moviesList from './movies';

const moviesApp = combineReducers({
  moviesList
})

export default moviesApp
