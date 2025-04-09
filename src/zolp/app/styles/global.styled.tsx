import { createGlobalStyle } from 'styled-components';
import { globalTheme } from './global.theme';
import { addAlpha } from '../../shared/lib/utils/add-alpha-opacity.util.ts';

export const GlobalStyled = createGlobalStyle`
  html {
    position: relative;
    height: 100%;
    color: ${({ theme }) => globalTheme(theme).bodyColor};
    background-color: ${({ theme }) =>
      globalTheme(theme).bodyBackgroundColor} !important;
  }
  body {
    position:absolute;
    inset: 0 0 auto 0;
    min-height: 100%;
    width: 100vw;
    width: -moz-available;
    overflow: auto;
    overflow-x: hidden;
    overflow-y: overlay;
    top:0;
    bottom:0;
    right:0;
    left:0;
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-size: cover;
    > div, > div > .app {
      height:100%;
      width: 100%
    }
    * {
      margin: 0;
      box-sizing: border-box;
    }
  }

  body, input, button {
    font-family: Roboto, system-ui;
    border: none;
  }

  button {
    background-color: inherit;
    font-size: inherit;
  }

  h1, h2, h3 {
    font-weight: 500;
    margin: 0;
      font-family: Product Sans;
  }
  h1 {
    font-size: 3.2em;
  }
  h2 {
    font-size: 2.8em;
    
  }
  h3 {
    font-size: 2.4em;
  }
  h4 {
    font-size: 2.2em;
      font-family: Product Sans;
  }
  h5 {
    font-size: 1.6em;
      font-family: Product Sans;
  }
  h6 {
    font-size: 1.4em;
  }

  a {
    color: ${({ theme }) => globalTheme(theme).linkColor};
    font-weight: 500;
    text-decoration: inherit;
    cursor: pointer;
    text-decoration: none;
  }
  a:hover {
    color: ${({ theme }) => globalTheme(theme).linkHoverColor};
  }
  body {
    color: ${({ theme }) => globalTheme(theme).bodyColor};
  }
  body {
    font-size: 10px;
  }
  span {
    font-size: 1.4em;
  }
  * {
    &::-webkit-scrollbar {
      width: 1em;
      background: ${({ theme }) =>
        globalTheme(theme).bodyBackgroundColor} !important;
    }

    &::-webkit-scrollbar-track {
      background: ${({ theme }) =>
        globalTheme(theme).bodyBackgroundColor} !important;
    }

    &::-webkit-scrollbar-track-piece {
      height: 0.8em;
    }

    &::-webkit-scrollbar-corner {
      width: 0;
      height: 0;
      background: #00000000;
    }

    &::-webkit-scrollbar-thumb {
      background: ${({ theme }) =>
        addAlpha(globalTheme(theme).bodyColor, 0.24)};
      transition: 0.2s ease;
      border-radius: 1em;
    }
    &::-webkit-scrollbar-thumb:hover {
      background: ${({ theme }) => addAlpha(globalTheme(theme).bodyColor, 0.4)};
    }

    &::-webkit-scrollbar {
      height: 0.8em;
    }

    &::-webkit-scrollbar-button {
      height: 0.2em;
      width: 0.2em;
    }

    &::-webkit-scrollbar-track {
      background: #00000000;
      width: 0.2em;
    }

    &::-webkit-scrollbar-track-piece {
      width: 0.2em;
      height: 0.2em;
    }

    &::-webkit-scrollbar-thumb {
      height: 0.2em;
      width: 0.2em;
    }

    &::-webkit-scrollbar-corner {
      width: 0.2em;
    }

    &::-webkit-resizer {
    }
  }
  
  @media (max-width: 1299px) {
    body {
      font-size: 8px;
    }
  }
  
  @media (min-width: 1300px) and (max-width: 1599px) {
    body {
      font-size: 9px;
    }
  }
  
  
  @media (min-width: 1600px) and (max-width: 1850px) {
   body {
     font-size: 10px;
   }
  }
`;

export default GlobalStyled;
