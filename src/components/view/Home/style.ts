import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100vw;
  display: grid;
  @media (min-width: 640px) {
    grid-template-columns: auto 1fr auto;
  }
`;