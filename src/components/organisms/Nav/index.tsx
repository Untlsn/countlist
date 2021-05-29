import React from 'react';
import * as S from './style';
import type { NavProps } from './types';
import { Hamburger, DotMenu } from '@atoms';
import useSwitchOptions from '@hooks/useSwitchOptions';

const Nav = ({ name, dotMenu = false }: NavProps) => {
  const switchOptions = useSwitchOptions();
  return (
    <S.Wrapper>
      <S.Layer>
        <Hamburger onClick={switchOptions} />
      </S.Layer>
      <S.Layer>
        <S.BigText>{name}</S.BigText>
        {dotMenu && <DotMenu onClick={() => {}} />}
      </S.Layer>
    </S.Wrapper>
  );
};

export default Nav;
export type { NavProps } from './types.d';