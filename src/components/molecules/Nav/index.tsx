import React from 'react';
import * as S from './style';
import type { NavProps } from './types';
import DotMenu from '@atoms/DotMenu';
import useSwitchOptions from '@hooks/useSwitchOptions';

const Nav = ({ id, dotMenu = false }: NavProps) => {
  const switchOptions = useSwitchOptions();

  const [name, code] = id.split('@');

  return (
    <S.Wrapper>
      <S.Layer>
        <S.Hamburger size={25} onClick={switchOptions} $dotMenu={dotMenu} />
      </S.Layer>
      <S.Layer>
        <S.BigText dotMenu={dotMenu} code={code} >{name}</S.BigText>
        {dotMenu && <DotMenu onClick={() => {}} />}
      </S.Layer>
    </S.Wrapper>
  );
};

export default Nav;
export type { NavProps } from './types';