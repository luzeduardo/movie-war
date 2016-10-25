import {call, put} from 'redux-saga/effects';
import {loadMovie as getMovie} from './apiCalls';

export function* loadMovie(){
  try {
    const movie = yield call(getMovie);
    yield put({type: 'FETCH_MOVIE_SUCCESS', payload: movie});
  } catch(error) {
    yield put({type: 'FETCH_MOVIE_FAILURE', error});
  }
}
