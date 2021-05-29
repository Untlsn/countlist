import styled from 'styled-components';
import SwitchThemeBase from '@atoms/SwitchTheme';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 15px;
`;

export const Layer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const BigText = styled.div`
  font-size: ${({ theme }) => theme.fontSize.big};
`;

export const SwitchTheme = styled(SwitchThemeBase)`
  position: absolute;
  top: 20px;
  right: 20px;
`;