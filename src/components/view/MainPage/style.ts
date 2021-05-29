import styled, { css } from 'styled-components';

export const Wrapper = styled.div<{ isDark: boolean }>`
  display: grid;
  grid-template-rows: 75px auto 75px;
  padding: 15px;
  height: 100vh;
  ${({ isDark, theme }) => {
    const [b1, b2] = theme.colors.gradient.background;
    return !isDark && css`
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