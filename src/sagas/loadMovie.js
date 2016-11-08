import {call, put} from 'redux-saga/effects';
import {loadMovie as getMovie} from './apiCalls';

export function* doLoadMovie(search){
  try {
    const movie = yield call(getMovie, search);
    yield put({type: 'FETCH_MOVIE_SUCCESS', list: movie});
  } catch(error) {
    yield put({type: 'FETCH_MOVIE_FAILURE', error});
  }
}
