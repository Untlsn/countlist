import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  
  height: 200px;
  width: 300px;
  border-radius: 10px;
  background-color: #FCFCFC;
  border: solid #0000004C 2px;
  padding: 20px;
`;

export const TextWrapper = styled.div`
  font-size: ${({ theme }) => theme.fontSize.xl};
  text-align: center;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const Button = styled.button<{ $color: string }>`
  margin-top: 40px;
  outline: none;
  border: none;
  border-radius: 10px;
  font-size: ${({ theme }) => theme.fontSize.xl};
  width: 75px;
  height: 35px;
  background-color: ${({ $color }) => $color};
  opacity: .9;
  
  &:hover {
    cursor: pointer;
    opacity: 1;
  }
`;