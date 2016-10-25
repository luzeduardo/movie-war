import {fork} from 'redux-saga/effects';
import {loadMovie} from './loadMovie';

function* rootSaga(){
  yield [
    fork(loadMovie)
  ]
}

export default rootSaga;
