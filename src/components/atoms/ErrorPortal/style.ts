import styled, { keyframes } from 'styled-components';

const bigScreen = '640px';

const slideIn = keyframes`
  from { transform: translateY(200%) }
  to { transform: translateY(0) }
`;

const slideOut = keyframes`
  from { transform: translateY(0) }
  to { transform: translateY(200%) }
`;

export const Wrapper = styled.div`
  width: 300px;
  height: 160px;
  border-radius: 10px;
  border: 2px solid ${({ theme }) => theme.colors.error};
  background-color: ${({ theme }) => theme.colors.secondBackground};
  position: absolute;
  bottom: 25px;
  left: 0;
  right: 0;
  margin: auto;

  transform: translateY(200%);
  animation: ${slideIn} 1s forwards, ${slideOut} 1s 5s forwards;

  @media (min-width: ${bigScreen}) {
    width: 500px;
    height: 260px;
  }
`;

export const BigText = styled.div`
  padding: 20px 10px 10px;
  border-bottom: solid 1px ${({ theme }) => theme.colors.error};;
  color: ${({ theme }) => theme.colors.error};
  font-size: ${({ theme }) => theme.fontSize.l};
  
  @media (min-width: ${bigScreen}) {
    font-size: ${({ theme }) => theme.fontSize.xxl};
    padding: 40px 20px 20px;
  }
`;

export const SmallText = styled.div`
  text-transform: capitalize;
  margin: 20px 80px 0 50px;
  color: ${({ theme }) => theme.colors.error};
  font-size: ${({ theme }) => theme.fontSize.m};

  @media (min-width: ${bigScreen}) {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }
`;