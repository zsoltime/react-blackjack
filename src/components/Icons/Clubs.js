import React from 'react';
import PropTypes from 'prop-types';

const Clubs = ({ className, color, size }) => (
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    viewBox="0 0 216 216"
    className={className}
    height={size}
    width={size}
  >
    <path
      fill={color}
      d="M161.668,75.201c1.882-5.679,2.832-11.604,2.832-17.701C164.5,26.346,139.154,1,108,1S51.5,26.346,51.5,57.5 c0,6.097,0.95,12.022,2.832,17.701C24.179,76.345,0,101.232,0,131.66c0,31.154,25.346,56.5,56.5,56.5 c14.44,0,27.629-5.45,37.628-14.396L81.962,215h51.733l-12.293-41.665c10.054,9.199,23.43,14.825,38.098,14.825 c31.154,0,56.5-25.346,56.5-56.5C216,101.232,191.821,76.345,161.668,75.201z"
    />
  </svg>
);

Clubs.defaultProps = {
  color: 'currentColor',
  size: '24px',
};

Clubs.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
};

export default Clubs;
