import React from 'react';
import * as S from './style';
import { Portal } from 'react-portal';
import { OnlyChildren } from '@types';

const ErrorPortal = ({ children }: OnlyChildren<string>) => {
  return (
    <Portal>
      <S.Wrapper>
        <S.BigText>
          Ups... Something get wrong
        </S.BigText>
        <S.SmallText>{children}</S.SmallText>
      </S.Wrapper>
    </Portal>
  );
};

export default ErrorPortal;