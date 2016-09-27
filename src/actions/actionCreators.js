export const ADD_MOVIE = 'ADD_MOVIE'
export const INCREMENT_MOVIE = 'INCREMENT_MOVIE'
export const GET_REMOTE_MOVIES = 'GET_REMOTE_MOVIES'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'
export const SHOW_ALL = 'SHOW_ALL'

export const addMovie = (movie) => {
  return {
    type: ADD_MOVIE, movie}
}

export const incrementMovie = (index) => {
  return {
    type: INCREMENT_MOVIE,
    index
  }
}

export const getRemoteMovies = (text) => {
  return { type: GET_REMOTE_MOVIES, text }
}

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_ASSIGNED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

export const setVisibilityFilter = (filter) => {
  return {type: SET_VISIBILITY_FILTER, filter }
}