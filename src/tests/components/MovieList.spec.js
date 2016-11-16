import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import {Provider} from 'react-redux';
import configureStore  from 'redux-mock-store';

import MovieList, {PureMovieList} from '../../components/MovieList';
import Movie from '../../components/Movie';

const middlewares = []
const mockStore = configureStore(middlewares)

describe('MovieList', () => {
  it('should list movies', () => {
    const mock = {
      movies: []
    }
		const store = mockStore(mock);
    const wrapper = shallow(<Provider store={store}><MovieList store={store}/></Provider>);
    expect(wrapper.prop('store')).to.equal(store);
  });
});

describe('PureMovieList not contain Movie', () => {
  it('should not contain Movie', () => {
    let mock = {}
    const wrapper = shallow(<PureMovieList movies={mock}/>);
    expect(wrapper.contains(<Movie Title="" Year="" Poster="" />)).to.equal(false);
  });
});
