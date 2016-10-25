const movies = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_MOVIE':
      return [...state, {
        statechangedprop: true,
        data: action.movie
      }]
    case 'FETCH_MOVIE_SUCCESS' :
      return action.payload;
    default:
      return state;
  }
}

export default movies
