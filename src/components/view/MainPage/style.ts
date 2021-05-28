import styled from 'styled-components';

export const Wrapper = styled.div`
  
`;

export const BarRowWrapper = styled.div`
  height: 100px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const BottomFixed = styled.div`
  position: fixed;
  width: 100%;
  bottom: 15px;
  left: 0;
  display: flex;
  justify-content: center;
`;

export const Shadow = styled.div`
  height: 60px;
`;