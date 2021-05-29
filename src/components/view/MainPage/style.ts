import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 75px 1fr 75px;
  padding: 15px;
`;

export const BarRowWrapper = styled.div`
  height: 100px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;