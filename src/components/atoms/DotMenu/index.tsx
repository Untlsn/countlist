import React from 'react';
import * as S from './style';
import type { PureOnClick } from '@types';

const DotMenu = (props: PureOnClick) => {
  return (
    <S.Wrapper { ...props }>
      <S.DotWrapper>
        <S.Dot />
        <S.Dot />
        <S.Dot />
      </S.DotWrapper>
    </S.Wrapper>
  );
};

export default DotMenu;