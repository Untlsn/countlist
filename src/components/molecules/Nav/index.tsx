import React from 'react';
import * as S from './style';
import type { NavProps } from './types';
import DotMenu from '@atoms/DotMenu';
import useSwitchOptions from '@hooks/useSwitchOptions';
import { useBoolState } from '@hooks';

const Nav = ({ menu, name, white = false }: NavProps) => {
  const switchOptions = useSwitchOptions();
  const [showMenu, toggleMenuShow] = useBoolState();

  return (
    <S.Wrapper>
      <S.Layer>
        <S.Hamburger size={25} onClick={switchOptions} $white={white} />
      </S.Layer>
      <S.Layer>
        <S.BigText white={white}>{name}</S.BigText>
        <S.Relative>
          <DotMenu onClick={() => toggleMenuShow.force(true)} />
          {showMenu && <S.FloatingMenu {...menu} hideMe={() => toggleMenuShow.force(false)}  />}
        </S.Relative>
      </S.Layer>
    </S.Wrapper>
  );
};

export default Nav;
export type { NavProps } from './types';