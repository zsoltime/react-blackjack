import styled, { css } from 'styled-components/macro';

export const StyledCard = styled.div`
  background-color: #fff;
  border-radius: 0.325rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  color: ${({ suit }) =>
    ['Hearts', 'Diamonds'].includes(suit) ? '#cc1e1e' : '#333'};
  font-size: 1.75rem;
  font-weight: 600;
  height: 14rem;
  line-height: 1;
  margin: 0.5rem;
  position: relative;
  transform: ${({ rotate, translate }) =>
    `rotate(${rotate}) translate(${translate})`};
  user-select: none;
  width: 10rem;
  will-change: transform;
`;

export const OuterSection = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 1.5rem;
  ${({ position }) =>
    position === 'bottom'
      ? css`
          bottom: 0.25rem;
          right: 0.25rem;
          transform: rotate(180deg);
        `
      : css`
          left: 0.25rem;
          top: 0.25rem;
        `};
`;

export const Face = styled.div`
  height: 10rem;
  margin: 2rem;
  width: 6rem;

  svg {
    height: 100%;
    width: 100%;
  }
`;

export const Mid = styled.div`
  display: grid;
  grid-column-gap: 0;
  grid-row-gap: 0;
  grid-template-columns: repeat(3, 1fr);
  height: 13.5rem;
  margin: 0.25rem 2rem;
  width: 6rem;

  div {
    align-items: center;
    display: flex;
    justify-content: center;
  }
`;

// Display grid for 9-10
export const MidGridHigh = styled(Mid)`
  grid-template-rows: repeat(8, 1fr);

  div {
    &:nth-child(1) {
      grid-area: 1 / 1 / 3 / 2;
    }
    &:nth-child(2) {
      grid-area: 2 / 2 / 4 / 3;
    }
    &:nth-child(3) {
      grid-area: 1 / 3 / 3 / 4;
    }
    &:nth-child(4) {
      grid-area: 3 / 1 / 5 / 2;
    }
    &:nth-child(5) {
      grid-area: 4 / 2 / 6 / 3;
    }
    &:nth-child(6) {
      grid-area: 3 / 3 / 5 / 4;
    }
    &:nth-child(7) {
      grid-area: 5 / 1 / 7 / 2;
    }
    &:nth-child(8) {
      grid-area: 6 / 2 / 8 / 3;
    }
    &:nth-child(9) {
      grid-area: 5 / 3 / 7 / 4;
    }
    &:nth-child(10) {
      grid-area: 7 / 1 / 9 / 2;
    }
    &:nth-child(11) {
      grid-area: 7 / 3 / 9 / 4;
    }
    &:nth-child(n + 7) {
      transform: rotate(180deg);
    }
  }
`;

// Display grid for 7-8
export const MidGridMid = styled(Mid)`
  grid-template-rows: repeat(6, 1fr);

  div {
    &:nth-child(1) {
      grid-area: 1 / 1 / 3 / 2;
    }
    &:nth-child(2) {
      grid-area: 2 / 2 / 4 / 3;
    }
    &:nth-child(3) {
      grid-area: 1 / 3 / 3 / 4;
    }
    &:nth-child(4) {
      grid-area: 3 / 1 / 5 / 2;
    }
    &:nth-child(5) {
      grid-area: 3 / 3 / 5 / 4;
    }
    &:nth-child(6) {
      grid-area: 5 / 1 / 7 / 2;
    }
    &:nth-child(7) {
      grid-area: 4 / 2 / 6 / 3;
    }
    &:nth-child(8) {
      grid-area: 5 / 3 / 7 / 4;
    }
    &:nth-child(n + 6) {
      transform: rotate(180deg);
    }
  }
`;

// Display grid for A-6
export const MidGridLow = styled(Mid)`
  grid-template-rows: repeat(3, 1fr);

  div {
    &:nth-child(1) {
      grid-area: 1 / 1 / 2 / 2;
    }
    &:nth-child(2) {
      grid-area: 1 / 2 / 2 / 3;
    }
    &:nth-child(3) {
      grid-area: 1 / 3 / 2 / 4;
    }
    &:nth-child(4) {
      grid-area: 2 / 1 / 3 / 2;
    }
    &:nth-child(5) {
      grid-area: 2 / 2 / 3 / 3;
    }
    &:nth-child(6) {
      grid-area: 2 / 3 / 3 / 4;
    }
    &:nth-child(7) {
      grid-area: 3 / 1 / 4 / 2;
    }
    &:nth-child(8) {
      grid-area: 3 / 2 / 4 / 3;
    }
    &:nth-child(9) {
      grid-area: 3 / 3 / 4 / 4;
    }
    &:nth-child(n + 7) {
      transform: rotate(180deg);
    }
  }
`;
