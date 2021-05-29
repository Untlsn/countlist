import styled, { css, keyframes } from 'styled-components';

const show = keyframes`
  from { transform: translateX(-100%) }
  to { transform: translateX(0) }
`;
const hidden = keyframes`
  from { transform: translateX(0) }
  to { transform: translateX(-100%) }
`;

export const Wrapper = styled.div<{ optionVisible: boolean }>`
  width: 270px;
  height: 100vh;
  display: grid;
  grid-template-rows: 1fr 1fr;
  background-color: ${({ theme }) => theme.colors.secondBackground};
  padding: 15px;
  
  @media (max-width: 640px) {
    position: absolute;
    z-index: 10;
    top: 0;
    left: 0;
    transform: translateX(-100%);
    ${({ optionVisible }) => optionVisible
      ? css`animation: ${show} .5s forwards;`
      : css`animation: ${hidden} .5s`
    };
  }
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
`;

export const Shadow = styled.div<{ optionVisible: boolean }>`
  background-color: #000000CC;
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;
  transition: opacity 1s;
  
  ${({ optionVisible }) => optionVisible
    ? css`
      visibility: visible;
      opacity: 1;
    `
    : css`
      visibility: hidden;
      opacity: 0;      
    `
  };
`;