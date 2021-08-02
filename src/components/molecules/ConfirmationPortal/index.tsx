import React from 'react';
import * as S from './style';
import { Portal } from 'react-portal';
import { ConfirmationPortalProps } from './types';

const ConfirmationPortal = ({ name, onYes, onNo }: ConfirmationPortalProps) => {
  return (
    <Portal>
      <S.Wrapper>
        <div>Want to delete</div>
        <S.TextWrap>{name}</S.TextWrap>
        <S.ButtonWrapper>
          <S.Button onClick={onYes}>Yes</S.Button>
          <S.Button onClick={onNo}>No</S.Button>
        </S.ButtonWrapper>
      </S.Wrapper>
    </Portal>
  );
};

export default ConfirmationPortal;