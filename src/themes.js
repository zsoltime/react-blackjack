const defaultTheme = {
  blue: '#2483ae',
  darkGreen: '#10372f',
  green: '#237053',
  lightBlue: '#059dc4',
  lightGreen: '#2f9169',
  lightGrey: 'rgba(0, 0, 0, 0.3)',
  lighterGrey: 'rgba(0, 0, 0, 0.1)',
  maxWidth: '800px',
  offWhite: '#f1f1ec',
  transitionEase: '0.2s ease-in-out',
  white: 'rgba(255, 255, 255, .95)',
};

export const theme = {
  ...defaultTheme,
  background: defaultTheme.lightGreen,
  backgroundImage: `radial-gradient(ellipse at center, ${defaultTheme.lightGreen} 0%, ${defaultTheme.darkGreen} 100%)`,
  border: defaultTheme.lighterGrey,
  focusRing: defaultTheme.black,
  link: defaultTheme.green,
  text: defaultTheme.white,
};

export default theme;
