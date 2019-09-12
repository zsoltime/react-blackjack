import React from 'react';
import { shallow } from 'enzyme';

import Diamonds from './Diamonds';

describe('<Diamonds /> icon', () => {
  it('passes className, color, and size props to the svg element', () => {
    const className = 'small-icon';
    const color = 'pink';
    const size = '128px';
    const wrapper = shallow(
      <Diamonds className={className} color={color} size={size} />
    );

    const svg = wrapper.find('svg');

    expect(svg.prop('className')).toBe(className);
    expect(svg.prop('height')).toBe(size);
    expect(svg.prop('width')).toBe(size);
    expect(svg.childAt(0).prop('fill')).toBe(color);
  });
});
