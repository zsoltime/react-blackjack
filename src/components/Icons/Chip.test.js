import React from 'react';
import { shallow } from 'enzyme';

import Chip from './Chip';

describe('<Chip /> icon', () => {
  it('passes className, color, size, textColor, and value props to the svg element', () => {
    const className = 'small-chip';
    const color = 'rebeccapurple';
    const size = '32px';
    const textColor = 'black';
    const value = 1000;
    const wrapper = shallow(
      <Chip
        className={className}
        color={color}
        size={size}
        textColor={textColor}
        value={value}
      />
    );

    const svg = wrapper.find('svg');

    expect(svg.prop('className')).toBe(className);
    expect(svg.prop('height')).toBe(size);
    expect(svg.prop('width')).toBe(size);
    expect(svg.find('#base').prop('fill')).toBe(color);
    expect(svg.find('#middle').prop('fill')).toBe(color);
    expect(svg.find('#inner-dashes').prop('stroke')).toBe(textColor);
    expect(svg.find('#outer-dashes').prop('stroke')).toBe(textColor);
    expect(svg.find('text').prop('fill')).toBe(textColor);
  });
});
