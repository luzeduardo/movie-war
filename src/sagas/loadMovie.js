import {call, put, takeLatest} from 'redux-saga/effects';
import {loadMovie as getMovie} from './apiCalls';

export function* loadMovie(){
  try {
    const movie = yield call(getMovie);
    yield put({type: 'FETCH_MOVIE_SUCCESS', movie: movie});
  } catch(error) {
    yield put({type: 'FETCH_MOVIE_FAILURE', error});
  }
}

export function* watchMovie(){
  yield takeLatest({type: 'GET_REMOTE_MOVIES', loadMovie});
}
