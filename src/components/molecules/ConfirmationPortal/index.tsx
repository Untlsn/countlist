import React from 'react';
import * as S from './style';
import { Portal } from 'react-portal';
import { ConfirmationPortalProps } from './types';

const ConfirmationPortal = ({ pointName, onYes, onNo }: ConfirmationPortalProps) => {
  return (
    <Portal>
      <S.Wrapper>
        <S.TextWrapper>
          Want to delete<br/>
          {pointName}
        </S.TextWrapper>
        <S.ButtonWrapper>
          <S.Button $color='#5bb85b' onClick={onYes} >Yes</S.Button>
          <S.Button $color='#d9524f' onClick={onNo} >No</S.Button>
        </S.ButtonWrapper>
      </S.Wrapper>
    </Portal>
  );
};

export default ConfirmationPortal;