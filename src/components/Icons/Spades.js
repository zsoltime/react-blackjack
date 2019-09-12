import React from 'react';
import PropTypes from 'prop-types';

const Spades = ({ className, color, size }) => (
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    viewBox="0 0 225.371 225.371"
    className={className}
    height={size}
    width={size}
  >
    <path
      fill={color}
      d="M212.205,85.186c-8.983-15.185-28.005-33.898-56.537-55.622c-11.14-8.481-21.397-15.613-28.042-20.103 c-12.905-8.721-13.281-8.721-14.866-8.721c-1.581,0-1.956,0-14.856,8.675c-6.649,4.473-16.917,11.579-28.064,20.039 c-28.567,21.679-47.643,40.43-56.695,55.731C3.931,100.759,0,115.153,0,133.317C0,179.339,33.921,200.3,65.438,200.3 c13.825,0,24.237-3.495,32.023-8.283l-8.619,32.613h47.343l-8.708-32.948c7.828,4.959,18.383,8.618,32.501,8.618 c31.495,0,65.393-20.961,65.393-66.983C225.371,115.18,221.434,100.786,212.205,85.186z"
    />
  </svg>
);

Spades.defaultProps = {
  color: 'currentColor',
  size: '24px',
};

Spades.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
};

export default Spades;
