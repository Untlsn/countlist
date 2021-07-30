import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 400px;
  height: 200px;
  background-color: #0000004C;
  padding: 30px;
  gap: 20px;
  border-radius: 10px;
`;

export const Input = styled.input`
  width: 100%;
  border: none;
  outline: none;
  text-align: center;
  font-size: 32px;
  background-color: transparent;
  color: white;
`;

export const CloseButton = styled.button.attrs({ children: 'Close' })`
  width: 50%;
  font-size: 24px;
  border: none;
  background-color: #000000C4;
  border-radius: 5px;
  color: white;
`;