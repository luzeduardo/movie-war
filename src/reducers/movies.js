const movies = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_MOVIE':
      return [...state, {
        statechangedprop: true,
        data: action.movie
      }]
    case 'GET_REMOTE_MOVIES':
      return [...state, {
        statechangedprop: true,
        movie: action.movie
      }]

    default:
      return state;
  }
}

export default movies
