import styled from 'styled-components';
import PortalWrapper from '~/components/atoms/PortalWrapper';

export const Wrapper = styled(PortalWrapper)`
  padding: 20px 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.huge};
`;

export const TextWrap = styled.div`
  overflow-wrap: break-word;
  overflow: hidden;
  width: 300px;
  max-height: 2.5em;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 300px;
`;

export const Button = styled.button`
  outline: none;
  border: solid #00000025 2px;
  color: white;
  font-size: ${({ theme }) => theme.fontSize.huge};
  width: 75px;
  height: 35px;
  opacity: .9;
  background-color: #000000C4;
  border-radius: 5px;

  &:hover {
    cursor: pointer;
    opacity: 1;
  }
`;