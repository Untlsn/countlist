import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.secondBackground};
  display: grid;
  width: 270px;  
  grid-template-rows: 75px 1fr 50px;
  gap: 20px;
`;

export const Frame = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  border: solid 1px #0000004C;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px
`;

export const MFrame = styled(Frame)`
  padding-right: 100px;
  height: 200px;
  justify-content: center;
  gap: 10px;
`;

export const RFrame = styled(Frame)`
  align-items: flex-end;
`;