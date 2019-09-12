# ♣︎<font color="red">♦︎</font>︎ React Blackjack <font color="red">♥</font>♠︎

> Blackjack is a gambling card game in which players try to acquire cards with a face value totalling 21 and no more. This app is built using React.js. Live preview is available on [Netlify][preview].

## Blackjack Rules

- the game is played with one or more decks of 52 cards
- the objective of the game is to beat the dealer
- player is dealt two cards face up
- dealer is also dealt two cards, one up (exposed) and one down (hidden)
- the value of cards two through ten is their pip value
- face cards (Jack, Queen, and King) are all worth ten
- aces can be worth one or eleven
- a hand's value is the sum of the card values
- players are allowed to draw additional cards to improve their hands
- a hand with an ace valued as 11 will not bust by taking an additional card
- the value of the ace will become one to prevent the hand from exceeding 21
- once the player's completed their hands, it is the dealer's turn
- the dealer hand will not be completed if the player's busted
- the dealer then reveals the hidden card and must hit until the cards total 17 or more points
- player wins by:
  - not busting and having a total higher than the dealer, or
  - not busting and having the dealer bust, or
  - getting a blackjack without the dealer getting a blackjack
- if the player and dealer have the same total, the player doesn't win or lose money on that hand

## Credits

The project uses [CircleCI](https://circleci.com) to run the e2e and unit tests every time a new commit is pushed to Github. CircleCI also builds the app and deploys to [Netlify](https://netlify.com), so the latest updates are always available [here][preview].

Icons made by [Freepik](https://www.flaticon.com/authors/freepik) from [FlatIcon](https://www.flaticon.com) and licensed by [CC 3.0 BY](http://creativecommons.org/licenses/by/3.0/).

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

[preview]: https://react-blackjack.netlify.com/
