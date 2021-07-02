import React from 'react';
import * as S from './style';
import type { NavProps } from './types';
import DotMenu from '@atoms/DotMenu';
import useSwitchOptions from '@hooks/useSwitchOptions';

const Nav = ({ name, onDotClick, white = false }: NavProps) => {
  const switchOptions = useSwitchOptions();

  return (
    <S.Wrapper>
      <S.Layer>
        <S.Hamburger size={25} onClick={switchOptions} $white={white} />
      </S.Layer>
      <S.Layer>
        <S.BigText white={white}>{name}</S.BigText>
        <DotMenu onClick={onDotClick} />

      </S.Layer>
    </S.Wrapper>
  );
};

export default Nav;
export type { NavProps } from './types';