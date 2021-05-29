import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 20px;
  width: 25px;
  display: flex;
  gap: 7px;
  flex-direction: column;
  
  &:hover {
    cursor: pointer;
  }
  visibility: visible;
  @media (min-width: 640px) {
    visibility: hidden;
  }
`;

export const Bar = styled.div`
  width: 100%;
  height: 2px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.text};
`;