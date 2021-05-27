import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 25px;
  width: 25px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.secondBackground};
  display: flex;
  align-items: center;
  justify-content: center;
  
  &::after {
    content: '';
    position: absolute;
    display: block;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    background-color: #fff;
    opacity: 0;
  }

  &:hover {
    cursor: pointer;
    &::after {
      opacity: .3;
    }
  }
`;

export const DotWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3px;
`;

export const Dot = styled.div`
  height: 3px;
  width: 3px;
  border-radius: 3px;
  background-color: ${({ theme }) => theme.colors.background};
`;