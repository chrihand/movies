const movie = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_MOVIE':
      return {
        id: action.id,
        text: action.text,
      }
      break;
    default:

  }
}
