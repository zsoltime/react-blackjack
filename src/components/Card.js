import React from 'react';
import PropTypes from 'prop-types';

import Icon from './Icons';
import FaceIcon from './Icons/FaceIcon';
import {
  Face,
  MidGridLow,
  MidGridMid,
  MidGridHigh,
  OuterSection,
  StyledCard,
} from './Card.styles';

const suits = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];
const ranks = [
  'Ace',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  'Jack',
  'Queen',
  'King',
];

const MidGridContent = ({ length = 9, position, suit }) => {
  return Array.from({ length }).map((_, i) => (
    <div key={i}>
      {position.includes(i) && <Icon type={suit} size="32px" />}
    </div>
  ));
};

MidGridContent.defaultProps = {
  length: 9,
};

MidGridContent.propTypes = {
  length: PropTypes.number,
  position: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  suit: PropTypes.oneOf(suits).isRequired,
};

const MidSection = ({ rank, suit }) => {
  const positions = {
    Ace: [4],
    2: [1, 7],
    3: [1, 4, 7],
    4: [0, 2, 6, 8],
    5: [0, 2, 4, 6, 8],
    6: [0, 2, 3, 5, 6, 8],
    7: [0, 1, 2, 3, 4, 5, 7],
    8: [0, 1, 2, 3, 4, 5, 6, 7],
    9: [0, 1, 2, 3, 5, 6, 8, 9, 10],
    10: [0, 1, 2, 3, 5, 6, 7, 8, 9, 10],
  };

  if (['Ace', '2', '3', '4', '5', '6'].includes(rank)) {
    return (
      <MidGridLow>
        <MidGridContent position={positions[rank]} suit={suit} />
      </MidGridLow>
    );
  }

  if (['7', '8'].includes(rank)) {
    return (
      <MidGridMid>
        <MidGridContent position={positions[rank]} suit={suit} />
      </MidGridMid>
    );
  }

  if (['9', '10'].includes(rank)) {
    return (
      <MidGridHigh>
        <MidGridContent
          length={11}
          position={positions[rank]}
          suit={suit}
        />
      </MidGridHigh>
    );
  }

  return (
    <Face>
      <FaceIcon rank={rank} suit={suit} />
    </Face>
  );
};

MidSection.propTypes = {
  rank: PropTypes.oneOf(ranks).isRequired,
  suit: PropTypes.oneOf(suits).isRequired,
};

const Card = ({ rank, suit }) => {
  const shortRank = ['Ace', 'Jack', 'King', 'Queen'].includes(rank)
    ? rank[0]
    : rank;

  return (
    <StyledCard
      suit={suit}
      role="img"
      aria-label={`${rank} of ${suit}`}
    >
      <OuterSection>
        <span>{shortRank}</span>
        <Icon type={suit} size="16px" />
      </OuterSection>
      <MidSection rank={rank} suit={suit} />
      <OuterSection position="bottom">
        <span>{shortRank}</span>
        <Icon type={suit} size="16px" />
      </OuterSection>
    </StyledCard>
  );
};

Card.propTypes = {
  rank: PropTypes.oneOf(ranks).isRequired,
  suit: PropTypes.oneOf(suits).isRequired,
};

export default Card;
