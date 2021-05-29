import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 270px;
  height: 100vh;
  display: grid;
  grid-template-rows: 1fr 1fr;
  background-color: ${({ theme }) => theme.colors.secondBackground};
  padding: 15px;
  
  @media (max-width: 640px) {
    position: absolute;
    top: 0;
    left: 0;
    transform: translateX(-100%);
  }
`;


export const List = styled.ul`
  list-style: none;
  padding: 0;
`;