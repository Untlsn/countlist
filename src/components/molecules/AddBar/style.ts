import styled from 'styled-components';
import { BsPlusCircle } from 'react-icons/bs';

export const Wrapper = styled.div<{ clear: boolean }>`
  display: flex;
  align-items: center;
  gap: 5px;
  height: 60px;
  width: 100%;
  padding: 20px;
  border-radius: 10px;
  background-color: rgba(0,0,0,
  ${({ clear }) => clear ? 0 : .2}
  );
`;

export const Plus = styled(BsPlusCircle)<{ clear: boolean }>`
  color: ${({ clear, theme }) => clear ? theme.colors.text : '#fff'};
  
  &:hover {
    cursor: pointer;
  }
`;

export const Input = styled.input<{ clear: boolean }>`
  width: 80%;
  border: none;
  outline: none;
  &::placeholder {
    color: ${({ clear, theme }) => clear ? theme.colors.text : '#fff'};
    letter-spacing: 1px;
  }
  color: ${({ clear, theme }) => clear ? theme.colors.text : '#fff'};
  font-size: ${({ theme }) => theme.fontSize.big};
  background-color: transparent;
`;