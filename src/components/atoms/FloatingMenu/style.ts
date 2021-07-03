import styled from 'styled-components';

export const Wrapper = styled.div`
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.transparently.menu};
  width: 260px;
`;

export const Bar = styled.div`
  height: 45px;
  width: 100%;
  display: flex;
  &:hover { cursor: pointer }
`;

export const Centring = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  color: white;
  user-select: none;
`;

export const Icon = styled(Centring)`
  font-size: ${({ theme }) => theme.fontSize.xl};
  padding: 0 20px 0 10px;
`;

