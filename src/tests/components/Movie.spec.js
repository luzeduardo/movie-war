import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import Movie from '../../components/Movie';

describe('<Movie />', () => {
  it('should have prop name and type with value', () => {
    const mock = {
      Title: 'Cars',
      Year: '2000',
      Poster: 'N/A'
    }

    const wrapper = shallow( <Movie movie={mock}/> );
    expect(wrapper.find('div.content strong').props().children).to.equal("Cars");
    expect(wrapper.find('div.content small').props().children).to.equal("2000");
  });
});
