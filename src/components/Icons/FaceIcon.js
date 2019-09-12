import React from 'react';

import JackOfClubs from './JackOfClubs';
import JackOfDiamonds from './JackOfDiamonds';
import JackOfHearts from './JackOfHearts';
import JackOfSpades from './JackOfSpades';
import KingOfClubs from './KingOfClubs';
import KingOfDiamonds from './KingOfDiamonds';
import KingOfHearts from './KingOfHearts';
import KingOfSpades from './KingOfSpades';
import QueenOfClubs from './QueenOfClubs';
import QueenOfDiamonds from './QueenOfDiamonds';
import QueenOfHearts from './QueenOfHearts';
import QueenOfSpades from './QueenOfSpades';

const FaceIcon = ({ rank, suit, ...props }) => {
  const components = {
    JackOfClubs,
    JackOfDiamonds,
    JackOfHearts,
    JackOfSpades,
    KingOfClubs,
    KingOfDiamonds,
    KingOfHearts,
    KingOfSpades,
    QueenOfClubs,
    QueenOfDiamonds,
    QueenOfHearts,
    QueenOfSpades,
  };
  const Icon = components[`${rank}Of${suit}`];

  if (!Icon) {
    return null;
  }

  return <Icon {...props} />;
};

export default FaceIcon;
