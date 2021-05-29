import styled from 'styled-components';

export const Wrapper = styled.div<{ clear: boolean }>`
  display: flex;
  align-items: center;
  gap: 5px;
  height: 60px;
  width: 100%;
  padding: 20px;
  border-radius: 10px;
  background-color: ${({ clear, theme }) => clear ? 'transparent' : theme.colors.secondBackground};
`;

export const Plus = styled.div<{ clear: boolean }>`
  height: 20px;
  width: 20px;
  font-size: 20px;
  color: ${({ clear, theme }) => clear ? theme.colors.text : '#fff'};
  
  &:hover {
    cursor: pointer;
  }
`;

export const Input = styled.input<{ clear: boolean }>`
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