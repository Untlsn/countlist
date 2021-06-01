import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  gap: 25px;
  grid-template-rows: 75px auto 75px;
  padding: 15px;
  height: 100vh;
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
`;