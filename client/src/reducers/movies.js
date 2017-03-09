import { ADD_MOVIE } from '../actions';

const initialState = {
}

const movie = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MOVIE:
      return {
        id: action.id,
        text: action.text,
        ...state,
      }
    default:
      return state;
  }
}

const moviesList = (state = [], action) => {
  switch (action.type) {
    case ADD_MOVIE:
      return [
        ...state,
        movie(undefined, action)
      ]
    default:
      return state;

  }
}

export default moviesList
