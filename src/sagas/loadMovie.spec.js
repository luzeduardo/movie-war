import expect from 'expect';
import { call, put, select , take} from 'redux-saga/effects';
import {loadMovie} from './apiCalls';

describe('Sequenced Saga', () => {
  const saga = doLoadMovie();
  let output = null;

  it('should take fetch movie success', () => {
      output = saga.next().value;
      let expected = take('FETCH_MOVIE_SUCCESS');
      expect(output).toEqual(expected);
  });
});
