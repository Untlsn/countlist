import styled from 'styled-components';
import PortalWrapper from '~/components/atoms/PortalWrapper';

export const Wrapper = styled(PortalWrapper)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 30px;
  gap: 20px;
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