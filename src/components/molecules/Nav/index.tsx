import React from 'react';
import * as S from './style';
import type { NavProps } from './types';
import NavPortalMenu from '~/components/molecules/NavPortalMenu';
import { useSelectedID } from '~/store/selectors';
import { useOptionShell } from '~/store/shells';

const Nav = ({ name, dotMenu = false }: NavProps) => {
  const options = useOptionShell();
  const listExist = !!useSelectedID('list');

  return (
    <S.Wrapper>
      <S.Layer>
        <S.Hamburger size={25} onClick={options.switch} $dotMenu={dotMenu} />
      </S.Layer>
      <S.Layer>
        <S.BigText dotMenu={dotMenu}>{name}</S.BigText>
        {dotMenu && listExist && <NavPortalMenu />}
      </S.Layer>
    </S.Wrapper>
  );
};

export default Nav;
export type { NavProps } from './types';