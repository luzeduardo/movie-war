import * from './actionTypes';

export function addMovie(movie){
  return { type: ADD_MOVIE, movie}
}

export function getRemoteMovies(text){
  return { type: GET_REMOTE_MOVIES, text }
}

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_ASSIGNED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

export setVisibilityFilter(filter){
  return {type: SET_VISIBILITY_FILTER, filter }
}
