import type { NextPage } from 'next';
import styled, { css } from 'styled-components';

const Main = styled.main`
  width: 640px;
  margin: auto;
  & > :nth-child(1) {
    display: flex;
    flex-direction: row;
    justify-content: start;
    overflow-x: scroll;
    & > * {
      white-space: nowrap;
      padding: 0 24px;
    }
  }
  & > :nth-child(2) {
    display: flex;
    flex-direction: row;
    justify-content: start;
    overflow-x: scroll;
    & > * {
      white-space: nowrap;
      padding: 0 24px;
    }
  }
`;
const AppleBold1 = styled.h1`
  ${({ theme }) => css`
    ${theme.Text.setTextStyle(26, 'AppleSDGothicNeoB00', 700)}
  `}
`;
const AppleBold2 = styled.h2`
  ${({ theme }) => css`
    ${theme.Text.setTextStyle(22, 'AppleSDGothicNeoB00', 700)}
  `}
`;
const AppleBold3 = styled.h3`
  ${({ theme }) => css`
    ${theme.Text.setTextStyle(20, 'AppleSDGothicNeoB00', 600)}
  `}
`;
const AppleBold4 = styled.h4`
  ${({ theme }) => css`
    ${theme.Text.setTextStyle(17, 'AppleSDGothicNeoB00', 600)}
  `}
`;
const AppleBold5 = styled.h5`
  ${({ theme }) => css`
    ${theme.Text.setTextStyle(15, 'AppleSDGothicNeoB00', 600)}
  `}
`;
const AppleBold6 = styled.h6`
  ${({ theme }) => css`
    ${theme.Text.setTextStyle(14, 'AppleSDGothicNeoB00', 600)}
  `}
`;
const AppleMedium1 = styled.h1`
  ${({ theme }) => css`
    ${theme.Text.setTextStyle(18, 'AppleSDGothicNeoM00', 400)}
  `}
`;
const AppleMedium2 = styled.h2`
  ${({ theme }) => css`
    ${theme.Text.setTextStyle(16, 'AppleSDGothicNeoM00', 400)}
  `}
`;
const AppleMedium3 = styled.h3`
  ${({ theme }) => css`
    ${theme.Text.setTextStyle(15, 'AppleSDGothicNeoM00', 400)}
  `}
`;
const AppleMedium4 = styled.h4`
  ${({ theme }) => css`
    ${theme.Text.setTextStyle(14, 'AppleSDGothicNeoM00', 400)}
  `}
`;
const AppleMedium5 = styled.h5`
  ${({ theme }) => css`
    ${theme.Text.setTextStyle(13, 'AppleSDGothicNeoM00', 400)}
  `}
`;
const AppleMedium6 = styled.h6`
  ${({ theme }) => css`
    ${theme.Text.setTextStyle(12, 'AppleSDGothicNeoM00', 400)}
  `}
`;
const SansBold1 = styled.h1`
  ${({ theme }) => css`
    ${theme.Text.setTextStyle(26, "'Noto Sans', sans-serif", 700)}
  `}
`;
const SansBold2 = styled.h2`
  ${({ theme }) => css`
    ${theme.Text.setTextStyle(22, "'Noto Sans', sans-serif", 700)}
  `}
`;
const SansBold3 = styled.h3`
  ${({ theme }) => css`
    ${theme.Text.setTextStyle(20, "'Noto Sans', sans-serif", 600)}
  `}
`;
const SansBold4 = styled.h4`
  ${({ theme }) => css`
    ${theme.Text.setTextStyle(17, "'Noto Sans', sans-serif", 600)}
  `}
`;
const SansBold5 = styled.h5`
  ${({ theme }) => css`
    ${theme.Text.setTextStyle(15, "'Noto Sans', sans-serif", 600)}
  `}
`;
const SansBold6 = styled.h6`
  ${({ theme }) => css`
    ${theme.Text.setTextStyle(14, "'Noto Sans', sans-serif", 600)}
  `}
`;
const SansMedium1 = styled.h1`
  ${({ theme }) => css`
    ${theme.Text.setTextStyle(18, "'Noto Sans', sans-serif", 400)}
  `}
`;
const SansMedium2 = styled.h2`
  ${({ theme }) => css`
    ${theme.Text.setTextStyle(16, "'Noto Sans', sans-serif", 400)}
  `}
`;
const SansMedium3 = styled.h3`
  ${({ theme }) => css`
    ${theme.Text.setTextStyle(15, "'Noto Sans', sans-serif", 400)}
  `}
`;
const SansMedium4 = styled.h4`
  ${({ theme }) => css`
    ${theme.Text.setTextStyle(14, "'Noto Sans', sans-serif", 400)}
  `}
`;
const SansMedium5 = styled.h5`
  ${({ theme }) => css`
    ${theme.Text.setTextStyle(13, "'Noto Sans', sans-serif", 400)}
  `}
`;
const SansMedium6 = styled.h6`
  ${({ theme }) => css`
    ${theme.Text.setTextStyle(12, "'Noto Sans', sans-serif", 400)}
  `}
`;

const Home: NextPage = () => {
  return (
    <Main>
      <div>
        <AppleBold1 style={{ letterSpacing: '0px' }}>Apple Heading space 0</AppleBold1>
        <AppleBold1 style={{ letterSpacing: '0px' }}>Bold1 Bold1 Bold1 space 0</AppleBold1>
        <AppleBold2 style={{ letterSpacing: '0px' }}>Bold2 Bold2 Bold2 space 0</AppleBold2>
        <AppleBold3 style={{ letterSpacing: '0px' }}>Bold3 Bold3 Bold3 space 0</AppleBold3>
        <AppleBold4 style={{ letterSpacing: '0px' }}>Bold4 Bold4 Bold4 space 0</AppleBold4>
        <AppleBold5 style={{ letterSpacing: '0px' }}>Bold5 Bold5 Bold5 space 0</AppleBold5>
        <AppleBold6 style={{ letterSpacing: '0px' }}>Bold6 Bold6 Bold6 space 0</AppleBold6>
        <AppleMedium1 style={{ letterSpacing: '0px' }}>Medium1 Medium1 Medium1 space 0</AppleMedium1>
        <AppleMedium2 style={{ letterSpacing: '0px' }}>Medium2 Medium2 Medium2 space 0</AppleMedium2>
        <AppleMedium3 style={{ letterSpacing: '0px' }}>Medium3 Medium3 Medium3 space 0</AppleMedium3>
        <AppleMedium4 style={{ letterSpacing: '0px' }}>Medium4 Medium4 Medium4 space 0</AppleMedium4>
        <AppleMedium5 style={{ letterSpacing: '0px' }}>Medium5 Medium5 Medium5 space 0</AppleMedium5>
        <AppleMedium6 style={{ letterSpacing: '0px' }}>Medium6 Medium6 Medium6 space 0</AppleMedium6>
        <AppleBold1 style={{ letterSpacing: '-0.2px' }}>Apple Heading space -0.2</AppleBold1>
        <AppleBold1 style={{ letterSpacing: '-0.2px' }}>Bold1 Bold1 Bold1 space -0.2</AppleBold1>
        <AppleBold2 style={{ letterSpacing: '-0.2px' }}>Bold2 Bold2 Bold2 space -0.2</AppleBold2>
        <AppleBold3 style={{ letterSpacing: '-0.2px' }}>Bold3 Bold3 Bold3 space -0.2</AppleBold3>
        <AppleBold4 style={{ letterSpacing: '-0.2px' }}>Bold4 Bold4 Bold4 space -0.2</AppleBold4>
        <AppleBold5 style={{ letterSpacing: '-0.2px' }}>Bold5 Bold5 Bold5 space -0.2</AppleBold5>
        <AppleBold6 style={{ letterSpacing: '-0.2px' }}>Bold6 Bold6 Bold6 space -0.2</AppleBold6>
        <AppleMedium1 style={{ letterSpacing: '-0.2px' }}>Medium1 Medium1 Medium1 space -0.2</AppleMedium1>
        <AppleMedium2 style={{ letterSpacing: '-0.2px' }}>Medium2 Medium2 Medium2 space -0.2</AppleMedium2>
        <AppleMedium3 style={{ letterSpacing: '-0.2px' }}>Medium3 Medium3 Medium3 space -0.2</AppleMedium3>
        <AppleMedium4 style={{ letterSpacing: '-0.2px' }}>Medium4 Medium4 Medium4 space -0.2</AppleMedium4>
        <AppleMedium5 style={{ letterSpacing: '-0.2px' }}>Medium5 Medium5 Medium5 space -0.2</AppleMedium5>
        <AppleMedium6 style={{ letterSpacing: '-0.2px' }}>Medium6 Medium6 Medium6 space -0.2</AppleMedium6>-{' '}
        <AppleBold1 style={{ letterSpacing: '-0.4px' }}>Apple Heading space -0.4</AppleBold1>
        <AppleBold1 style={{ letterSpacing: '-0.4px' }}>Bold1 Bold1 Bold1 space -0.4</AppleBold1>
        <AppleBold2 style={{ letterSpacing: '-0.4px' }}>Bold2 Bold2 Bold2 space -0.4</AppleBold2>
        <AppleBold3 style={{ letterSpacing: '-0.4px' }}>Bold3 Bold3 Bold3 space -0.4</AppleBold3>
        <AppleBold4 style={{ letterSpacing: '-0.4px' }}>Bold4 Bold4 Bold4 space -0.4</AppleBold4>
        <AppleBold5 style={{ letterSpacing: '-0.4px' }}>Bold5 Bold5 Bold5 space -0.4</AppleBold5>
        <AppleBold6 style={{ letterSpacing: '-0.4px' }}>Bold6 Bold6 Bold6 space -0.4</AppleBold6>
        <AppleMedium1 style={{ letterSpacing: '-0.4px' }}>Medium1 Medium1 Medium1 space -0.4</AppleMedium1>
        <AppleMedium2 style={{ letterSpacing: '-0.4px' }}>Medium2 Medium2 Medium2 space -0.4</AppleMedium2>
        <AppleMedium3 style={{ letterSpacing: '-0.4px' }}>Medium3 Medium3 Medium3 space -0.4</AppleMedium3>
        <AppleMedium4 style={{ letterSpacing: '-0.4px' }}>Medium4 Medium4 Medium4 space -0.4</AppleMedium4>
        <AppleMedium5 style={{ letterSpacing: '-0.4px' }}>Medium5 Medium5 Medium5 space -0.4</AppleMedium5>
        <AppleMedium6 style={{ letterSpacing: '-0.4px' }}>Medium6 Medium6 Medium6 space -0.4</AppleMedium6>
        <AppleBold1 style={{ letterSpacing: '-1px' }}>Apple Heading space -1</AppleBold1>
        <AppleBold1 style={{ letterSpacing: '-1px' }}>Bold1 Bold1 Bold1 space -1</AppleBold1>
        <AppleBold2 style={{ letterSpacing: '-1px' }}>Bold2 Bold2 Bold2 space -1</AppleBold2>
        <AppleBold3 style={{ letterSpacing: '-1px' }}>Bold3 Bold3 Bold3 space -1</AppleBold3>
        <AppleBold4 style={{ letterSpacing: '-1px' }}>Bold4 Bold4 Bold4 space -1</AppleBold4>
        <AppleBold5 style={{ letterSpacing: '-1px' }}>Bold5 Bold5 Bold5 space -1</AppleBold5>
        <AppleBold6 style={{ letterSpacing: '-1px' }}>Bold6 Bold6 Bold6 space -1</AppleBold6>
        <AppleMedium1 style={{ letterSpacing: '-1px' }}>Medium1 Medium1 Medium1 space -1</AppleMedium1>
        <AppleMedium2 style={{ letterSpacing: '-1px' }}>Medium2 Medium2 Medium2 space -1</AppleMedium2>
        <AppleMedium3 style={{ letterSpacing: '-1px' }}>Medium3 Medium3 Medium3 space -1</AppleMedium3>
        <AppleMedium4 style={{ letterSpacing: '-1px' }}>Medium4 Medium4 Medium4 space -1</AppleMedium4>
        <AppleMedium5 style={{ letterSpacing: '-1px' }}>Medium5 Medium5 Medium5 space -1</AppleMedium5>
        <AppleMedium6 style={{ letterSpacing: '-1px' }}>Medium6 Medium6 Medium6 space -1</AppleMedium6>
      </div>
      <div>
        <SansBold1 style={{ letterSpacing: '0px' }}>Noto Sans Bold space 0</SansBold1>
        <SansBold1 style={{ letterSpacing: '0px' }}>Bold1 Bold1 Bold1 space 0</SansBold1>
        <SansBold2 style={{ letterSpacing: '0px' }}>Bold2 Bold2 Bold2 space 0</SansBold2>
        <SansBold3 style={{ letterSpacing: '0px' }}>Bold3 Bold3 Bold3 space 0</SansBold3>
        <SansBold4 style={{ letterSpacing: '0px' }}>Bold4 Bold4 Bold4 space 0</SansBold4>
        <SansBold5 style={{ letterSpacing: '0px' }}>Bold5 Bold5 Bold5 space 0</SansBold5>
        <SansBold6 style={{ letterSpacing: '0px' }}>Bold6 Bold6 Bold6 space 0</SansBold6>
        <SansMedium1 style={{ letterSpacing: '0px' }}>Noto Sans Medium space 0</SansMedium1>
        <SansMedium1 style={{ letterSpacing: '0px' }}>Medium1 Medium1 Medium1 space 0</SansMedium1>
        <SansMedium2 style={{ letterSpacing: '0px' }}>Medium2 Medium2 Medium2 space 0</SansMedium2>
        <SansMedium3 style={{ letterSpacing: '0px' }}>Medium3 Medium3 Medium3 space 0</SansMedium3>
        <SansMedium4 style={{ letterSpacing: '0px' }}>Medium4 Medium4 Medium4 space 0</SansMedium4>
        <SansMedium5 style={{ letterSpacing: '0px' }}>Medium5 Medium5 Medium5 space 0</SansMedium5>
        <SansMedium6 style={{ letterSpacing: '0px' }}>Medium6 Medium6 Medium6 space 0</SansMedium6>
        <SansBold1 style={{ letterSpacing: '-0.1px' }}>Noto Sans Bold space -0.1</SansBold1>
        <SansBold1 style={{ letterSpacing: '-0.1px' }}>Bold1 Bold1 Bold1 space -0.1</SansBold1>
        <SansBold2 style={{ letterSpacing: '-0.1px' }}>Bold2 Bold2 Bold2 space -0.1</SansBold2>
        <SansBold3 style={{ letterSpacing: '-0.1px' }}>Bold3 Bold3 Bold3 space -0.1</SansBold3>
        <SansBold4 style={{ letterSpacing: '-0.1px' }}>Bold4 Bold4 Bold4 space -0.1</SansBold4>
        <SansBold5 style={{ letterSpacing: '-0.1px' }}>Bold5 Bold5 Bold5 space -0.1</SansBold5>
        <SansBold6 style={{ letterSpacing: '-0.1px' }}>Bold6 Bold6 Bold6 space -0.1</SansBold6>
        <SansMedium1 style={{ letterSpacing: '-0.1px' }}>Noto Sans Medium space -0.1</SansMedium1>
        <SansMedium1 style={{ letterSpacing: '-0.1px' }}>Medium1 Medium1 Medium1 space -0.1</SansMedium1>
        <SansMedium2 style={{ letterSpacing: '-0.1px' }}>Medium2 Medium2 Medium2 space -0.1</SansMedium2>
        <SansMedium3 style={{ letterSpacing: '-0.1px' }}>Medium3 Medium3 Medium3 space -0.1</SansMedium3>
        <SansMedium4 style={{ letterSpacing: '-0.1px' }}>Medium4 Medium4 Medium4 space -0.1</SansMedium4>
        <SansMedium5 style={{ letterSpacing: '-0.1px' }}>Medium5 Medium5 Medium5 space -0.1</SansMedium5>
        <SansMedium6 style={{ letterSpacing: '-0.1px' }}>Medium6 Medium6 Medium6 space -0.1</SansMedium6>
        <SansBold1 style={{ letterSpacing: '-0.2px' }}>Noto Sans Bold space -0.2</SansBold1>
        <SansBold1 style={{ letterSpacing: '-0.2px' }}>Bold1 Bold1 Bold1 space -0.2</SansBold1>
        <SansBold2 style={{ letterSpacing: '-0.2px' }}>Bold2 Bold2 Bold2 space -0.2</SansBold2>
        <SansBold3 style={{ letterSpacing: '-0.2px' }}>Bold3 Bold3 Bold3 space -0.2</SansBold3>
        <SansBold4 style={{ letterSpacing: '-0.2px' }}>Bold4 Bold4 Bold4 space -0.2</SansBold4>
        <SansBold5 style={{ letterSpacing: '-0.2px' }}>Bold5 Bold5 Bold5 space -0.2</SansBold5>
        <SansBold6 style={{ letterSpacing: '-0.2px' }}>Bold6 Bold6 Bold6 space -0.2</SansBold6>
        <SansMedium1 style={{ letterSpacing: '-0.2px' }}>Noto Sans Medium space -0.2</SansMedium1>
        <SansMedium1 style={{ letterSpacing: '-0.2px' }}>Medium1 Medium1 Medium1 space -0.2</SansMedium1>
        <SansMedium2 style={{ letterSpacing: '-0.2px' }}>Medium2 Medium2 Medium2 space -0.2</SansMedium2>
        <SansMedium3 style={{ letterSpacing: '-0.2px' }}>Medium3 Medium3 Medium3 space -0.2</SansMedium3>
        <SansMedium4 style={{ letterSpacing: '-0.2px' }}>Medium4 Medium4 Medium4 space -0.2</SansMedium4>
        <SansMedium5 style={{ letterSpacing: '-0.2px' }}>Medium5 Medium5 Medium5 space -0.2</SansMedium5>
        <SansMedium6 style={{ letterSpacing: '-0.2px' }}>Medium6 Medium6 Medium6 space -0.2</SansMedium6>
        <SansBold1 style={{ letterSpacing: '-0.3px' }}>Noto Sans Bold space -0.3</SansBold1>
        <SansBold1 style={{ letterSpacing: '-0.3px' }}>Bold1 Bold1 Bold1 space -0.3</SansBold1>
        <SansBold2 style={{ letterSpacing: '-0.3px' }}>Bold2 Bold2 Bold2 space -0.3</SansBold2>
        <SansBold3 style={{ letterSpacing: '-0.3px' }}>Bold3 Bold3 Bold3 space -0.3</SansBold3>
        <SansBold4 style={{ letterSpacing: '-0.3px' }}>Bold4 Bold4 Bold4 space -0.3</SansBold4>
        <SansBold5 style={{ letterSpacing: '-0.3px' }}>Bold5 Bold5 Bold5 space -0.3</SansBold5>
        <SansBold6 style={{ letterSpacing: '-0.3px' }}>Bold6 Bold6 Bold6 space -0.3</SansBold6>
        <SansMedium1 style={{ letterSpacing: '-0.3px' }}>Noto Sans Medium space -0.3</SansMedium1>
        <SansMedium1 style={{ letterSpacing: '-0.3px' }}>Medium1 Medium1 Medium1 space -0.3</SansMedium1>
        <SansMedium2 style={{ letterSpacing: '-0.3px' }}>Medium2 Medium2 Medium2 space -0.3</SansMedium2>
        <SansMedium3 style={{ letterSpacing: '-0.3px' }}>Medium3 Medium3 Medium3 space -0.3</SansMedium3>
        <SansMedium4 style={{ letterSpacing: '-0.3px' }}>Medium4 Medium4 Medium4 space -0.3</SansMedium4>
        <SansMedium5 style={{ letterSpacing: '-0.3px' }}>Medium5 Medium5 Medium5 space -0.3</SansMedium5>
        <SansMedium6 style={{ letterSpacing: '-0.3px' }}>Medium6 Medium6 Medium6 space -0.3</SansMedium6>
        <SansBold1 style={{ letterSpacing: '-0.4px' }}>Noto Sans Bold space -0.4</SansBold1>
        <SansBold1 style={{ letterSpacing: '-0.4px' }}>Bold1 Bold1 Bold1 space -0.4</SansBold1>
        <SansBold2 style={{ letterSpacing: '-0.4px' }}>Bold2 Bold2 Bold2 space -0.4</SansBold2>
        <SansBold3 style={{ letterSpacing: '-0.4px' }}>Bold3 Bold3 Bold3 space -0.4</SansBold3>
        <SansBold4 style={{ letterSpacing: '-0.4px' }}>Bold4 Bold4 Bold4 space -0.4</SansBold4>
        <SansBold5 style={{ letterSpacing: '-0.4px' }}>Bold5 Bold5 Bold5 space -0.4</SansBold5>
        <SansBold6 style={{ letterSpacing: '-0.4px' }}>Bold6 Bold6 Bold6 space -0.4</SansBold6>
        <SansMedium1 style={{ letterSpacing: '-0.4px' }}>Noto Sans Medium space -0.4</SansMedium1>
        <SansMedium1 style={{ letterSpacing: '-0.4px' }}>Medium1 Medium1 Medium1 space -0.4</SansMedium1>
        <SansMedium2 style={{ letterSpacing: '-0.4px' }}>Medium2 Medium2 Medium2 space -0.4</SansMedium2>
        <SansMedium3 style={{ letterSpacing: '-0.4px' }}>Medium3 Medium3 Medium3 space -0.4</SansMedium3>
        <SansMedium4 style={{ letterSpacing: '-0.4px' }}>Medium4 Medium4 Medium4 space -0.4</SansMedium4>
        <SansMedium5 style={{ letterSpacing: '-0.4px' }}>Medium5 Medium5 Medium5 space -0.4</SansMedium5>
        <SansMedium6 style={{ letterSpacing: '-0.4px' }}>Medium6 Medium6 Medium6 space -0.4</SansMedium6>
        <SansBold1 style={{ letterSpacing: '-0.5px' }}>Noto Sans Bold space -0.5</SansBold1>
        <SansBold1 style={{ letterSpacing: '-0.5px' }}>Bold1 Bold1 Bold1 space -0.5</SansBold1>
        <SansBold2 style={{ letterSpacing: '-0.5px' }}>Bold2 Bold2 Bold2 space -0.5</SansBold2>
        <SansBold3 style={{ letterSpacing: '-0.5px' }}>Bold3 Bold3 Bold3 space -0.5</SansBold3>
        <SansBold4 style={{ letterSpacing: '-0.5px' }}>Bold4 Bold4 Bold4 space -0.5</SansBold4>
        <SansBold5 style={{ letterSpacing: '-0.5px' }}>Bold5 Bold5 Bold5 space -0.5</SansBold5>
        <SansBold6 style={{ letterSpacing: '-0.5px' }}>Bold6 Bold6 Bold6 space -0.5</SansBold6>
        <SansMedium1 style={{ letterSpacing: '-0.5px' }}>Noto Sans Medium space -0.5</SansMedium1>
        <SansMedium1 style={{ letterSpacing: '-0.5px' }}>Medium1 Medium1 Medium1 space -0.5</SansMedium1>
        <SansMedium2 style={{ letterSpacing: '-0.5px' }}>Medium2 Medium2 Medium2 space -0.5</SansMedium2>
        <SansMedium3 style={{ letterSpacing: '-0.5px' }}>Medium3 Medium3 Medium3 space -0.5</SansMedium3>
        <SansMedium4 style={{ letterSpacing: '-0.5px' }}>Medium4 Medium4 Medium4 space -0.5</SansMedium4>
        <SansMedium5 style={{ letterSpacing: '-0.5px' }}>Medium5 Medium5 Medium5 space -0.5</SansMedium5>
        <SansMedium6 style={{ letterSpacing: '-0.5px' }}>Medium6 Medium6 Medium6 space -0.5</SansMedium6>
        <SansBold1 style={{ letterSpacing: '-0.6px' }}>Noto Sans Bold space -0.6</SansBold1>
        <SansBold1 style={{ letterSpacing: '-0.6px' }}>Bold1 Bold1 Bold1 space -0.6</SansBold1>
        <SansBold2 style={{ letterSpacing: '-0.6px' }}>Bold2 Bold2 Bold2 space -0.6</SansBold2>
        <SansBold3 style={{ letterSpacing: '-0.6px' }}>Bold3 Bold3 Bold3 space -0.6</SansBold3>
        <SansBold4 style={{ letterSpacing: '-0.6px' }}>Bold4 Bold4 Bold4 space -0.6</SansBold4>
        <SansBold5 style={{ letterSpacing: '-0.6px' }}>Bold5 Bold5 Bold5 space -0.6</SansBold5>
        <SansBold6 style={{ letterSpacing: '-0.6px' }}>Bold6 Bold6 Bold6 space -0.6</SansBold6>
        <SansMedium1 style={{ letterSpacing: '-0.6px' }}>Noto Sans Medium space -0.6</SansMedium1>
        <SansMedium1 style={{ letterSpacing: '-0.6px' }}>Medium1 Medium1 Medium1 space -0.6</SansMedium1>
        <SansMedium2 style={{ letterSpacing: '-0.6px' }}>Medium2 Medium2 Medium2 space -0.6</SansMedium2>
        <SansMedium3 style={{ letterSpacing: '-0.6px' }}>Medium3 Medium3 Medium3 space -0.6</SansMedium3>
        <SansMedium4 style={{ letterSpacing: '-0.6px' }}>Medium4 Medium4 Medium4 space -0.6</SansMedium4>
        <SansMedium5 style={{ letterSpacing: '-0.6px' }}>Medium5 Medium5 Medium5 space -0.6</SansMedium5>
        <SansMedium6 style={{ letterSpacing: '-0.6px' }}>Medium6 Medium6 Medium6 space -0.6</SansMedium6>
        <SansBold1 style={{ letterSpacing: '-0.7px' }}>Noto Sans Bold space -0.7</SansBold1>
        <SansBold1 style={{ letterSpacing: '-0.7px' }}>Bold1 Bold1 Bold1 space -0.7</SansBold1>
        <SansBold2 style={{ letterSpacing: '-0.7px' }}>Bold2 Bold2 Bold2 space -0.7</SansBold2>
        <SansBold3 style={{ letterSpacing: '-0.7px' }}>Bold3 Bold3 Bold3 space -0.7</SansBold3>
        <SansBold4 style={{ letterSpacing: '-0.7px' }}>Bold4 Bold4 Bold4 space -0.7</SansBold4>
        <SansBold5 style={{ letterSpacing: '-0.7px' }}>Bold5 Bold5 Bold5 space -0.7</SansBold5>
        <SansBold6 style={{ letterSpacing: '-0.7px' }}>Bold6 Bold6 Bold6 space -0.7</SansBold6>
        <SansMedium1 style={{ letterSpacing: '-0.7px' }}>Noto Sans Medium space -0.7</SansMedium1>
        <SansMedium1 style={{ letterSpacing: '-0.7px' }}>Medium1 Medium1 Medium1 space -0.7</SansMedium1>
        <SansMedium2 style={{ letterSpacing: '-0.7px' }}>Medium2 Medium2 Medium2 space -0.7</SansMedium2>
        <SansMedium3 style={{ letterSpacing: '-0.7px' }}>Medium3 Medium3 Medium3 space -0.7</SansMedium3>
        <SansMedium4 style={{ letterSpacing: '-0.7px' }}>Medium4 Medium4 Medium4 space -0.7</SansMedium4>
        <SansMedium5 style={{ letterSpacing: '-0.7px' }}>Medium5 Medium5 Medium5 space -0.7</SansMedium5>
        <SansMedium6 style={{ letterSpacing: '-0.7px' }}>Medium6 Medium6 Medium6 space -0.7</SansMedium6>
        <SansBold1 style={{ letterSpacing: '-0.8px' }}>Noto Sans Bold space -0.8</SansBold1>
        <SansBold1 style={{ letterSpacing: '-0.8px' }}>Bold1 Bold1 Bold1 space -0.8</SansBold1>
        <SansBold2 style={{ letterSpacing: '-0.8px' }}>Bold2 Bold2 Bold2 space -0.8</SansBold2>
        <SansBold3 style={{ letterSpacing: '-0.8px' }}>Bold3 Bold3 Bold3 space -0.8</SansBold3>
        <SansBold4 style={{ letterSpacing: '-0.8px' }}>Bold4 Bold4 Bold4 space -0.8</SansBold4>
        <SansBold5 style={{ letterSpacing: '-0.8px' }}>Bold5 Bold5 Bold5 space -0.8</SansBold5>
        <SansBold6 style={{ letterSpacing: '-0.8px' }}>Bold6 Bold6 Bold6 space -0.8</SansBold6>
        <SansMedium1 style={{ letterSpacing: '-0.8px' }}>Noto Sans Medium space -0.8</SansMedium1>
        <SansMedium1 style={{ letterSpacing: '-0.8px' }}>Medium1 Medium1 Medium1 space -0.8</SansMedium1>
        <SansMedium2 style={{ letterSpacing: '-0.8px' }}>Medium2 Medium2 Medium2 space -0.8</SansMedium2>
        <SansMedium3 style={{ letterSpacing: '-0.8px' }}>Medium3 Medium3 Medium3 space -0.8</SansMedium3>
        <SansMedium4 style={{ letterSpacing: '-0.8px' }}>Medium4 Medium4 Medium4 space -0.8</SansMedium4>
        <SansMedium5 style={{ letterSpacing: '-0.8px' }}>Medium5 Medium5 Medium5 space -0.8</SansMedium5>
        <SansMedium6 style={{ letterSpacing: '-0.8px' }}>Medium6 Medium6 Medium6 space -0.8</SansMedium6>
        <SansBold1 style={{ letterSpacing: '-0.9px' }}>Noto Sans Bold space -0.9</SansBold1>
        <SansBold1 style={{ letterSpacing: '-0.9px' }}>Bold1 Bold1 Bold1 space -0.9</SansBold1>
        <SansBold2 style={{ letterSpacing: '-0.9px' }}>Bold2 Bold2 Bold2 space -0.9</SansBold2>
        <SansBold3 style={{ letterSpacing: '-0.9px' }}>Bold3 Bold3 Bold3 space -0.9</SansBold3>
        <SansBold4 style={{ letterSpacing: '-0.9px' }}>Bold4 Bold4 Bold4 space -0.9</SansBold4>
        <SansBold5 style={{ letterSpacing: '-0.9px' }}>Bold5 Bold5 Bold5 space -0.9</SansBold5>
        <SansBold6 style={{ letterSpacing: '-0.9px' }}>Bold6 Bold6 Bold6 space -0.9</SansBold6>
        <SansMedium1 style={{ letterSpacing: '-0.9px' }}>Noto Sans Medium space -0.9</SansMedium1>
        <SansMedium1 style={{ letterSpacing: '-0.9px' }}>Medium1 Medium1 Medium1 space -0.9</SansMedium1>
        <SansMedium2 style={{ letterSpacing: '-0.9px' }}>Medium2 Medium2 Medium2 space -0.9</SansMedium2>
        <SansMedium3 style={{ letterSpacing: '-0.9px' }}>Medium3 Medium3 Medium3 space -0.9</SansMedium3>
        <SansMedium4 style={{ letterSpacing: '-0.9px' }}>Medium4 Medium4 Medium4 space -0.9</SansMedium4>
        <SansMedium5 style={{ letterSpacing: '-0.9px' }}>Medium5 Medium5 Medium5 space -0.9</SansMedium5>
        <SansMedium6 style={{ letterSpacing: '-0.9px' }}>Medium6 Medium6 Medium6 space -0.9</SansMedium6>
        <SansBold1 style={{ letterSpacing: '-1' }}>Noto Sans Bold space -1</SansBold1>
        <SansBold1 style={{ letterSpacing: '-1' }}>Bold1 Bold1 Bold1 space -1</SansBold1>
        <SansBold2 style={{ letterSpacing: '-1' }}>Bold2 Bold2 Bold2 space -1</SansBold2>
        <SansBold3 style={{ letterSpacing: '-1' }}>Bold3 Bold3 Bold3 space -1</SansBold3>
        <SansBold4 style={{ letterSpacing: '-1' }}>Bold4 Bold4 Bold4 space -1</SansBold4>
        <SansBold5 style={{ letterSpacing: '-1' }}>Bold5 Bold5 Bold5 space -1</SansBold5>
        <SansBold6 style={{ letterSpacing: '-1' }}>Bold6 Bold6 Bold6 space -1</SansBold6>
        <SansMedium1 style={{ letterSpacing: '-1' }}>Noto Sans Medium space -1</SansMedium1>
        <SansMedium1 style={{ letterSpacing: '-1' }}>Medium1 Medium1 Medium1 space -1</SansMedium1>
        <SansMedium2 style={{ letterSpacing: '-1' }}>Medium2 Medium2 Medium2 space -1</SansMedium2>
        <SansMedium3 style={{ letterSpacing: '-1' }}>Medium3 Medium3 Medium3 space -1</SansMedium3>
        <SansMedium4 style={{ letterSpacing: '-1' }}>Medium4 Medium4 Medium4 space -1</SansMedium4>
        <SansMedium5 style={{ letterSpacing: '-1' }}>Medium5 Medium5 Medium5 space -1</SansMedium5>
        <SansMedium6 style={{ letterSpacing: '-1' }}>Medium6 Medium6 Medium6 space -1</SansMedium6>
      </div>
    </Main>
  );
};

export default Home;
