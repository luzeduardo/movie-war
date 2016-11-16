import _ from 'lodash';
import {expect} from 'chai';
import rootReducer from '../../reducers/index';


describe('getRemoteMovies Reducer', () => {
  it('Should handle GET_REMOTE_MOVIES', () => {
    let movies = {
      seek: true,
      is_searching: true,
      search: undefined
    }

    const expectedState = { movies };
    const newState = rootReducer({}, {type: 'GET_REMOTE_MOVIES'});    
    expect(newState).to.eql( expectedState );
  });
});
