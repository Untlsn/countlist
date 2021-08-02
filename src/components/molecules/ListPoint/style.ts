import styled, { keyframes } from 'styled-components';

const fly = keyframes`
  from { 
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 30px;
  padding-left: 25px;
  &:hover {
    cursor: pointer;
  }
  animation: ${fly} 1s ease-out forwards;
`;

export const NotLine = styled.div<{ $selected: boolean }>`
  transform: translateX(${({ $selected }) => $selected ? 0 : -7}px);
  transition: transform 1s;
`;

export const Arrow = styled(NotLine)`
  position: relative;
  height: 15px;
  width: 15px;
  padding: 0 5px;
  margin: 0 5px;
  
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

export const Line = styled.div<{ $visible: boolean }>`
  width: 2px;
  height: 25px;
  background-color: ${({ theme }) => theme.colors.text};
  transform: translateX(${({ $visible }) => $visible ? 0 : -40}px);
  opacity: ${({ $visible }) => $visible ? 1 : 0};
  transition: 1s ease-in-out;
  transition-property: opacity, transform;
`;

export const Capital = styled(NotLine)`
  text-transform: capitalize;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding-right: 5px;
`;