import React from 'react';
import * as S from './style';
import type { MainPageNavProps } from './types';
import { Hamburger, DotMenu } from '@atoms';

const MainPageNav = ({ name, dotMenu = false }: MainPageNavProps) => {
  return (
    <>
      <S.Wrapper>
        <S.Layer>
          <Hamburger onClick={() => {}} />
        </S.Layer>
        <S.Layer>
          <S.BigText>{name}</S.BigText>
          {dotMenu && <DotMenu onClick={() => {}} />}
        </S.Layer>
      </S.Wrapper>
      <S.Shadow />
    </>
  );
};

export default MainPageNav;
export type { MainPageNavProps } from './types.d';