import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import Movie from '../../components/Movie';

describe('<Movie />', () => {
  it('should have prop name and type with value', () => {
    const mock = {
      name: 'Cars',
      type: 'Animation'
    }

    const wrapper = shallow( <Movie name={mock.name} type={mock.type}/> );
    expect(wrapper.find('div.card p').childAt(0).props().children).to.equal("Cars");
    expect(wrapper.find('div.card p').childAt(1).props().children).to.equal("Animation");
  });
});
