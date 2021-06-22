import React from 'react';
import * as S from './style';
import { Portal } from 'react-portal';

const ErrorPortal = () => {
  return (
    <Portal>
      <S.Wrapper>
        <S.BigText>
          Ups... Something get wrong
        </S.BigText>
        <S.SmallText>
          Password or username is incorrect
        </S.SmallText>
      </S.Wrapper>
    </Portal>
  );
};

export default ErrorPortal;