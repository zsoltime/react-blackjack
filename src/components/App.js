import React, { useState } from 'react';
import styled, { css } from 'styled-components/macro';
import random from 'utils.random';

import Card from './Card';

const CardWrapper = styled.div`
  margin: 0 auto;
  ${({ collapsed }) =>
    collapsed
      ? css`
          display: grid;
          grid-template-columns: repeat(
            auto-fit,
            minmax(10px, max-content)
          );
          width: ${({ length }) => `${length * 30}px`};
        `
      : css`
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          width: 100%;
        `}
`;

function App() {
  const randomSuit = () =>
    random(['Clubs', 'Diamonds', 'Hearts', 'Spades']);
  const randomHand = () => [
    { rank: 'Ace', suit: randomSuit() },
    { rank: '2', suit: randomSuit() },
    { rank: '3', suit: randomSuit() },
    { rank: '4', suit: randomSuit() },
    { rank: '5', suit: randomSuit() },
    { rank: '6', suit: randomSuit() },
    { rank: '7', suit: randomSuit() },
    { rank: '8', suit: randomSuit() },
    { rank: '9', suit: randomSuit() },
    { rank: '10', suit: randomSuit() },
    { rank: 'Jack', suit: randomSuit() },
    { rank: 'Queen', suit: randomSuit() },
    { rank: 'King', suit: randomSuit() },
  ];
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [cardsInHand, setCardsInHand] = useState(randomHand());

  return (
    <div>
      <h1>Blackjack</h1>
      <button onClick={() => setCardsInHand(randomHand())}>
        Randomize
      </button>
      <button onClick={() => setIsCollapsed(c => !c)}>
        Collapse
      </button>
      <CardWrapper
        aria-atomic="true"
        aria-live="polite"
        collapsed={isCollapsed}
        length={cardsInHand.length}
      >
        {cardsInHand.map(({ rank, suit }) => (
          <Card key={`${rank}-${suit}`} rank={rank} suit={suit} />
        ))}
      </CardWrapper>
    </div>
  );
}

export default App;
