import React from 'react';
import { shallow } from 'enzyme';

import Icon from '.';

describe('<Icon />', () => {
  it('renders the correct component', () => {
    const wrapperClubs = shallow(<Icon type="Clubs" />);
    const wrapperDiamonds = shallow(<Icon type="Diamonds" />);
    const wrapperHearts = shallow(<Icon type="Hearts" />);
    const wrapperSpades = shallow(<Icon type="Spades" />);

    expect(wrapperClubs.find('Clubs').length).toBe(1);
    expect(wrapperDiamonds.find('Diamonds').length).toBe(1);
    expect(wrapperHearts.find('Hearts').length).toBe(1);
    expect(wrapperSpades.find('Spades').length).toBe(1);
  });

  it('passes props to component', () => {
    const wrapper = shallow(<Icon type="Hearts" color="red" />);

    expect(wrapper.find('Hearts').prop('color')).toBe('red');
  });

  it('returns null if type prop is invalid', () => {
    const wrapper = shallow(<Icon type="Test" />);

    expect(wrapper.type()).toEqual(null);
  });
});
