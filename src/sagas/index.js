import {takeLatest} from 'redux-saga';
import {doLoadMovie} from './loadMovie';

function* rootSaga(){
  yield [
    takeLatest('GET_REMOTE_MOVIES', doLoadMovie),
  ]
}

export default rootSaga;
