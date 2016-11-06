
import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import Movie from '../../components/Movie';

describe('<Movie />', () => {
  it('should have a prop name with value', () => {
    const mock = {
      name: 'Cars',
      type: 'Animation'
    }

    const wrapper = shallow( <Movie name="Cars"/> );
    expect(wrapper.find('div.card p span').first().props().children).to.equal("Cars");
  });
});
