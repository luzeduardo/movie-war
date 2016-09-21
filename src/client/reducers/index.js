import VisibilityFilters from './actions'

const initialState = {
  visibilityFilter: VisibilityFilters.SHOW_ALL,
  movies: []
}

function movies(state = initialState, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return Object.assign({}, state, {
        visibilityFilter: action.filter
      })
      break;

    case ADD_MOVIE:
      return Object.assign({}, state, {
        movies: [
          ...state.movies,
          {
            movie: action.movie,
            completed: false
          }
        ]

      })
    default:
      return state
  }
}

function visibilityFilter(state = SHOW_ALL, action){
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
      break;
    default:
      return state
  }
}

function movieApp(state = {}, action){
  return {
    visibilityFilter: visibilityFilter(state.visibilityFilter, action),
    movies: movies(state.movies, action)
  }
}
