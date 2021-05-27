import React from 'react';
import * as S from './style';
import type { PureOnClick } from '@types';

const Hamburger = (props: PureOnClick) => {
  return (
    <S.Wrapper { ...props }>
      <S.Bar />
      <S.Bar />
      <S.Bar />
    </S.Wrapper>
  );
};

export default Hamburger;