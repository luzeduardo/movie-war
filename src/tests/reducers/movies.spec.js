import _ from 'lodash';
import {expect} from 'chai';
import rootReducer from '../../reducers/index';


describe('getRemoteMovies Reducer', () => {
  it('Should handle GET_REMOTE_MOVIES', () => {
    const expectedState = Object.assign({},{}, movies: {
      is_searching: false,
      search: undefined
    });
    const newState = rootReducer({}, {type: 'GET_REMOTE_MOVIES'});
    console.log(newState);
    console.log(expectedState);
    expect(newState).to.eql( expectedState );
  });
});
