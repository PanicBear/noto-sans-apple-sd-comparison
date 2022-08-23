import { createGlobalStyle, css } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyles = createGlobalStyle`
  ${reset};

   @font-face {
    font-family: 'AppleSDGothicNeoB00';
    src: url('/fonts/AppleSDGothicNeoB.woff2') format('woff2');
    font-display: block;
  }
  @font-face {
    font-family: 'AppleSDGothicNeoM00';
    src: url('/fonts/AppleSDGothicNeoM.woff2') format('woff2');
    font-display: block;
  }

  html, body {
    padding: 0;
    margin: 0;
    margin: auto;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  input:focus,
  select:focus,
  textarea:focus,
  button:focus {
      outline: none;
  }

  * {
    box-sizing: border-box;

    &::-webkit-scrollbar {
    display: none;  
    }
    -ms-overflow-style: none;
    scrollbar-width: none;

    -webkit-tap-highlight-color: transparent;
  }
`;

export const Layout = {
  flexRowCenter: css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  `,
  flexRowStart: css`
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: start;
  `,
  flexRowStartCenter: css`
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
  `,
  flexRowBetweenCenter: css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  `,
  flexRowBetweenStart: css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: start;
  `,
  flexRowBetweenEnd: css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: end;
  `,
  flexRowEvenlyCenter: css`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
  `,
  flexColCenter: css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
  flexColEndCenter: css`
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: center;
  `,
  flexColBetweenCenter: css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  `,
  flexColEvenlyCenter: css`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  `,
  flexColCenterStart: css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
  `,
  flexColStart: css`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
  `,
  flexColStartCenter: css`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
  `,
  flexColBetweenStart: css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;
  `,
};

export const Shadow = {
  default: css`
    filter: drop-shadow(0px 4px 10px rgba(51, 51, 51, 0.15));
  `,
  sm: css`
    filter: drop-shadow(0px 1px 6px rgba(0, 0, 0, 0.1));
  `,
};
