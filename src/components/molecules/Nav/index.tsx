import React from 'react';
import * as S from './style';
import type { NavProps } from './types';
import useComposedDispatch from '~/hooks/useComposedDispatch';
import { mini } from '~/store/actions';
import NavPortalMenu from '~/components/molecules/NavPortalMenu';
import { useSelectedListCheck } from '~/components/molecules/Nav/hooks';

const Nav = ({ name, dotMenu = false }: NavProps) => {
  const dispatch = useComposedDispatch();
  const switchOptions = dispatch(mini.switchOptions);
  const listExist = useSelectedListCheck();

  return (
    <>
      <S.Wrapper>
        <S.Layer>
          <S.Hamburger size={25} onClick={switchOptions} $dotMenu={dotMenu} />
        </S.Layer>
        <S.Layer>
          <S.BigText dotMenu={dotMenu}>{name}</S.BigText>
          {dotMenu && listExist && <NavPortalMenu />}
        </S.Layer>
      </S.Wrapper>

    </>
  );
};

export default Nav;
export type { NavProps } from './types';