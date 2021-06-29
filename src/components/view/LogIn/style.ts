import styled from 'styled-components';
import LogoImg from '@assets/images/favicon.svg';
import BackgroundImg from '@assets/images/LogBG.png';


export const  Centering = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
`;

export const Wrapper = styled.div`  
  width: 350px;
`;

export const RightText = styled.div`
  margin-top: 10px;
  text-align: right;
  margin-right: 60px;
`;
export const RightTextHovered = styled(RightText)`
  user-select: none;
  &:hover { cursor: pointer }
`;

export const ShadowText = styled.span`
  color: ${({ theme }) => theme.colors.transparently.shadow};
`;

export const FakeLink = styled.span`
  color: ${({ theme }) => theme.colors.linkBlue};
  &:hover { cursor: pointer }
`;

export const Logo = styled.img.attrs({ src: LogoImg, alt: '' })`
  height: 100px;
  width: 100px;
`;

export const Background = styled.img.attrs({ src: BackgroundImg, alt: '' })`
  position: absolute;
  z-index: -1;
  bottom: 0;
  width: 100vw;
  height: 40vh;
`;

export const SquareButton = styled.button<{ selected: boolean }>`
  height: 15px;
  width: 15px;
  border: 1px solid black;
  border-radius: 5px;
  
  background-color: ${({ selected, theme }) => selected && theme.colors.transparently.shadow};
`;