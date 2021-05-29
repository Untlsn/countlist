import React from 'react';
import * as S from './style';
import type { NavProps } from './types';
import { Hamburger, DotMenu } from '@atoms';

const Nav = ({ name, dotMenu = false }: NavProps) => {
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

export default Nav;
export type { NavProps } from './types.d';