import React from 'react';
import PropTypes from 'prop-types';

function Chip({ color, className, size, textColor, value }) {
  return (
    <svg
      className={className}
      fill="none"
      height={size}
      viewBox="0 0 512 512"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d)">
        <circle id="base" cx="256" cy="256" r="224" fill={color} />
      </g>
      <circle
        id="outer-dashes"
        cx="256"
        cy="256"
        fill="none"
        r="208"
        stroke={textColor}
        strokeWidth="32"
        strokeDasharray="82"
      />
      <g filter="url(#filter1_i)">
        <circle
          cx="256"
          cy="256"
          fill="#000"
          fillOpacity="0.2"
          r="192"
        />
      </g>
      <g filter="url(#filter2_d)">
        <circle id="middle" cx="256" cy="256" fill={color} r="160" />
      </g>
      <circle
        id="inner-dashes"
        fill="none"
        cx="256"
        cy="256"
        r="144"
        stroke={textColor}
        strokeDasharray="30"
        strokeOpacity="0.75"
        strokeWidth="8"
      />
      <text
        dominantBaseline="central"
        fill={textColor}
        fontFamily="inherit"
        fontSize="84px"
        fontWeight="800"
        textAnchor="middle"
        x="256"
        y="256"
      >
        {value}
      </text>
      <defs>
        <filter
          id="filter0_d"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
          height="472"
          x="24"
          y="24"
          width="472"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dx="4" dy="4" />
          <feGaussianBlur stdDeviation="6" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
          />
          <feBlend
            in2="BackgroundImageFix"
            mode="normal"
            result="effect1_dropShadow"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow"
            mode="normal"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_i"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
          height="384"
          x="64"
          y="64"
          width="384"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            in="SourceGraphic"
            in2="BackgroundImageFix"
            mode="normal"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="6" />
          <feComposite
            in2="hardAlpha"
            k2="-1"
            k3="1"
            operator="arithmetic"
          />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
          />
          <feBlend
            in2="shape"
            mode="normal"
            result="effect1_innerShadow"
          />
        </filter>
        <filter
          id="filter2_d"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
          height="344"
          x="84"
          y="84"
          width="344"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="6" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
          />
          <feBlend
            in2="BackgroundImageFix"
            mode="normal"
            result="effect1_dropShadow"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow"
            mode="normal"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}

Chip.defaultProps = {
  size: '80px',
  textColor: '#fff',
};

Chip.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string.isRequired,
  size: PropTypes.string,
  textColor: PropTypes.string,
  value: PropTypes.number.isRequired,
};

export default Chip;
