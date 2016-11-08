import { call, put} from 'redux-saga/effects';
import {doLoadMovie} from '../../sagas/loadMovie';
import {expect} from 'chai';

it ('getMovie Promisse', () => {
  const generator = doLoadMovie()
  let list = [
    { Title : "Mumy", Type: "horror" },
    { Title : "Grow Up", Type: "comedy"}
  ]
  generator.next();
  let expected = generator.next(list).value;
  let mocked = put({ type: 'FETCH_MOVIE_SUCCESS', list });
  expect(expected).deep.equal(mocked);
});
