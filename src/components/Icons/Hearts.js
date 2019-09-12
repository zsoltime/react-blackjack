import React from 'react';
import PropTypes from 'prop-types';

const Hearts = ({ className, color, size }) => (
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
      d="M159.933,12.904c-26.386,0-40.36,12.722-47.313,22.892c-6.944-10.17-20.897-22.892-47.228-22.892 C33.897,12.904,0,33.865,0,79.887c0,18.138,3.938,32.532,13.166,48.132c8.983,15.184,28.006,33.897,56.541,55.622 c11.137,8.479,21.396,15.612,28.042,20.103c12.771,8.631,13.271,8.72,14.814,8.721c0.078,0.002,0.153,0.003,0.228,0.003 c1.459,0,2.464-0.465,14.673-8.675c6.65-4.473,16.918-11.579,28.065-20.039c28.57-21.681,47.646-40.433,56.699-55.734 c9.212-15.571,13.143-29.967,13.143-48.132C225.371,33.865,191.45,12.904,159.933,12.904z"
    />
  </svg>
);

Hearts.defaultProps = {
  color: 'currentColor',
  size: '24px',
};

Hearts.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
};

export default Hearts;
