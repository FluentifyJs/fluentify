import { create } from '@storybook/theming';
import logo from './logo.png';

export default create({
  base: 'light',

  colorPrimary: '#41B883',
  colorSecondary: '#34495E',

  // UI
  appBg: 'white',
  appContentBg: 'white',
  appBorderColor: '#41B883',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: '#34495E',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: 'silver',
  barSelectedColor: '#34495E',
  barBg: '#41B883',

  // Form colors
  inputBg: 'white',
  inputBorder: '#41B883',
  inputTextColor: '#34495E',
  inputBorderRadius: 4,

  brandTitle: 'Fluentify',
  brandUrl: 'https://github.com/FluentifyJs/fluentify',
  brandImage: logo,
});