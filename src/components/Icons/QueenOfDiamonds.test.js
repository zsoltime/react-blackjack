import React from 'react';
import { shallow } from 'enzyme';

import QueenOfDiamonds from './QueenOfDiamonds';

describe('<QueenOfDiamonds /> icon', () => {
  it('passes className, height, and width props to the svg element', () => {
    const className = 'small-icon';
    const height = '96px';
    const width = '64px';
    const wrapper = shallow(
      <QueenOfDiamonds
        className={className}
        height={height}
        width={width}
      />
    );

    const svg = wrapper.find('svg');

    expect(svg.prop('className')).toBe(className);
    expect(svg.prop('height')).toBe(height);
    expect(svg.prop('width')).toBe(width);
  });
});
