const movies = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_MOVIE':
      return [...state, {
        statechangedprop: true,
        data: action.movie
      }]
      break;
    case 'GET_REMOTE_MOVIES':
      return [...state, {
        statechangedprop: true,
        movie: action.movie
      }]
      break;

    default:
      return state;
  }
}

export default movies
