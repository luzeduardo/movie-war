const movies = (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_MOVIE_SUCCESS':
      return Object.assign({}, state, {
        is_searching: false,
        movies: action.movies
      });
    case 'GET_REMOTE_MOVIES':
      return Object.assign({}, state, {
        is_searching: true,
        search: action.search
      });
    default:
      return state;
  }
}

export default movies;
