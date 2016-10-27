import {call, put, takeLatest} from 'redux-saga/effects';
import {loadMovie as getMovie} from './apiCalls';

export function* doLoadMovie(){
  try {
    const movie = yield call(getMovie);
    yield put({type: 'FETCH_MOVIE_SUCCESS', movies: movie});
  } catch(error) {
    yield put({type: 'FETCH_MOVIE_FAILURE', error});
  }
}
