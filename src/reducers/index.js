import * as ac from '../actions/actionCreators'

const initialState = {
  visibilityFilter: ac.SHOW_ALL,
  movies: []
}

function movies(state = initialState, action) {
  switch (action.type) {
    case ac.SET_VISIBILITY_FILTER:
      return Object.assign({}, state, {
        visibilityFilter: action.filter
      })
      break;

    case ac.ADD_MOVIE:
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

function visibilityFilter(state = ac.SHOW_ALL, action){
  switch (action.type) {
    case ac.SET_VISIBILITY_FILTER:
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
