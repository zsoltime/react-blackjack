import React from 'react';
import PropTypes from 'prop-types';

import Clubs from './Clubs';
import Diamonds from './Diamonds';
import Hearts from './Hearts';
import Spades from './Spades';

const Icons = ({ type, ...props }) => {
  const components = {
    Clubs,
    Diamonds,
    Hearts,
    Spades,
  };
  const Icon = components[type];

  if (!Icon) {
    return null;
  }

  return <Icon {...props} />;
};

Icons.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Icons;
