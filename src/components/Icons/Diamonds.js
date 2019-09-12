import React from 'react';
import PropTypes from 'prop-types';

const Diamonds = ({ className, color, size }) => (
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    viewBox="0 0 223.646 223.646"
    className={className}
    height={size}
    width={size}
  >
    <polygon
      fill={color}
      points="111.823,0 16.622,111.823 111.823,223.646 207.025,111.823"
    />
  </svg>
);

Diamonds.defaultProps = {
  color: 'currentColor',
  size: '24px',
};

Diamonds.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
};

export default Diamonds;
