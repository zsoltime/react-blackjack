import { createGlobalStyle } from 'styled-components/macro';

export default createGlobalStyle`
  * {
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    font-size:16px;

    @media (min-width: 600px) {
      font-size: 20px;
    }
  }

  body {
    background-color: ${({ theme }) => theme.background};
    background-image: ${({ theme }) => theme.backgroundImage};
    color: ${({ theme }) => theme.text};
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 400;
    line-height: 1.5;
    margin: 0;
    min-height: 100vh;
  }

  button {
    background-color: ${({ theme }) => theme.lightBlue};
    border: 2px solid ${({ theme }) => theme.border};
    border-radius: .25rem;
    box-shadow: 0 0 2px ${({ theme }) => theme.lightGrey};
    color: inherit;
    cursor: pointer;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
    padding: 0.5rem 1.5rem;
    transition: box-shadow ${({ theme }) =>
      theme.transitionEase}, transform ${({ theme }) =>
  theme.transitionEase};

    &:focus {
      outline: thin dotted;
    }

    &:focus,
    &:hover {
      box-shadow: 0 0 2px ${({ theme }) => theme.lighterGrey};
      transform: scale(.975)
    }
  }

  svg {
    fill: currentColor;
  }

  #root {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 100vh;
  }
`;
