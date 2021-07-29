import React from 'react';
import * as S from './style';
import type { NavProps } from './types';
import DotMenu from '~/components/atoms/DotMenu';
import useComposedDispatch from '~/hooks/useComposedDispatch';
import { mini } from '~/store/actions';

const Nav = ({ name, dotMenu = false }: NavProps) => {
  const switchOptions = useComposedDispatch()(mini.switchOptions);

  return (
    <S.Wrapper>
      <S.Layer>
        <S.Hamburger size={25} onClick={switchOptions} $dotMenu={dotMenu} />
      </S.Layer>
      <S.Layer>
        <S.BigText dotMenu={dotMenu}>{name}</S.BigText>
        {dotMenu && <DotMenu onClick={() => {}} />}
      </S.Layer>
    </S.Wrapper>
  );
};

export default Nav;
export type { NavProps } from './types';