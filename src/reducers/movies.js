const movies = (state = {}, action) => {
  const index = action.index
  switch (action.type) {
    case 'ADD_MOVIE':
      return [...state, {
        statechangedprop: true,
        data: action.data,
        index
      }]
      break;
    case 'GET_MOVIE':
      return [...state, {
        statechangedprop: true,
        movie: action.movie,
        index
      }]
      break;

    default:
      return state;
  }
}

export default movies
