import styled, { keyframes } from 'styled-components';

export const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const opacityWave = keyframes`
  from { opacity: 1 }
  to { opacity: .5 }
`;

export const Image = styled.img.attrs({ alt: '' })`
  width:  200px;
  height: 200px;
  
  animation: ${opacityWave} 1s ease-in infinite alternate;
`;