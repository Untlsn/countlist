import styled from 'styled-components';

export const Wrapper = styled.div<{ $selected: boolean }>`
  display: flex;
  align-items: center;
  gap: 5px;
  height: 30px;
  padding-left: 25px;
  background-color: ${({ $selected, theme }) => $selected ? theme.colors.secondBackground : 'transparent'};
  &:hover {
    cursor: pointer;
  }
`;

export const Arrow = styled.div`
  position: relative;
  height: 15px;
  width: 15px;
  
  &::before, &::after {
    content: '';
    display: block;
    left: 0;
    position: absolute;
    width: 10px;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.text};
  }
  
  &::before {
    top: 4px;
    transform: rotate(45deg);
  }
  &::after {
    bottom: 4px;
    transform: rotate(-45deg);
  }
`;

export const Line = styled.div`
  width: 2px;
  height: 25px;
  background-color: ${({ theme }) => theme.colors.text};
`;

export const Capital = styled.div`
  text-transform: capitalize;
`;