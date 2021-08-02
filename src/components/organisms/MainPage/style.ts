import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  gap: 25px;
  grid-template-rows: 75px auto 75px;
  padding: 15px;
  height: 100vh;
  width: 100%;
  ${({ theme }) => {
    const [b1, b2] = theme.colors.gradient.background;
    return css`
      background: linear-gradient(135deg, ${b1}, ${b2})
    `;
  }};
`;

export const BarRowWrapper = styled.div`
  height: 100px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const PointWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  overflow-y: scroll;
  overflow-x: hidden;
  @media (pointer: fine  ) {
    &::-webkit-scrollbar {
      width: 10px;
    }

    &::-webkit-scrollbar-track {
      background: #9E9E9E4D;
    }

    &::-webkit-scrollbar-thumb {
      background: #9e9e9e;
      border-radius: 15px;

      &:hover {
        background: #cdcdcd;
        border-left: 5px solid #cdcdcd;
      }
    }
  }
`;