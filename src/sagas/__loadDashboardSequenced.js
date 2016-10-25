import {call, put, select, take} from 'redux-saga/effects';
export const getMovieFromState = (state) => state.movie;

export function* loadDashboardSequenced(){
  try {
    yield take('FETCH_MOVIE_SUCCESS');
    const movie = yield select(getMovieFromState);
  } catch(error) {
    yield put({type: 'FETCH_FAILED', payload: error});
  }
}
