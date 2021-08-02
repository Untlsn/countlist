import styled, { keyframes } from 'styled-components';
import { BsFillTrashFill } from 'react-icons/bs';
import { RiArrowLeftSFill } from 'react-icons/all';

const showing = keyframes`
  from { opacity: 0 }
  to { opacity: 1 }
`;

const move = keyframes`
  from { transform: translateX(100%) }
  to { transform: translateX(0) }
`;

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.secondBackground};
  position: relative;
  top: 0;
  display: grid;
  width: 270px;  
  grid-template-rows: 75px 1fr 50px;
  gap: 20px;
  
  @media (max-width: 860px) {
    position: absolute;
    z-index: 10;
    top: 0;
    right: 0;
    height: 100vh;
    animation: ${move} 1s forwards;
  }
`;

export const Frame = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  border: solid 1px #0000004C;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px
`;

export const MFrame = styled(Frame)`
  padding-right: 100px;
  height: 200px;
  gap: 10px;
`;

export const RFrame = styled(Frame)`
  justify-content: space-between;
  flex-direction: row;
`;

export const Input = styled.input.attrs({ placeholder: 'Point Name' })`
  background-color: transparent;
  outline: none;
  border: none;
  text-align: center;
  width: 100%;
  font-size: ${({ theme }) => theme.fontSize.huge};
`;

export const Trash = styled(BsFillTrashFill)`
  font-size: 35px;
  color: #0000007F;
  &:hover { cursor: pointer }
`;

export const Arrow = styled(RiArrowLeftSFill)`
  font-size: 40px;
  color: #0000007F;
  &:hover { cursor: pointer }
`;

export const Shadow = styled.div`
  background-color: #000000CC;
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;
  
  @media (max-width: 860px) {
    visibility: visible;
    animation: ${showing} 1s forwards;
  }
  @media (min-width: 861px) {
    visibility: hidden;
  }
`;