import React from 'react';
import * as S from './style';
import { DotMenuProps } from '~/components/atoms/DotMenu/types';
import useBoolState from '~/hooks/useBoolState';

const DotMenu = ({ icons, events, texts }: DotMenuProps) => {
  const [showMenu, changeShowMenu] = useBoolState();

  const createdPoints = texts.map(
    (text, i) => (
      <S.Points onClick={events[i]} key={text}>
        <S.Icon>{icons[i]}</S.Icon>
        <span>{text}</span>
      </S.Points>
    ),
  );

  return (
    <S.Wrapper onClick={changeShowMenu}>
      <S.Dots />
      {showMenu && (
        <S.ShowMenu onBlur={() => changeShowMenu.force(false)}>
          {createdPoints}
        </S.ShowMenu>
      )}
    </S.Wrapper>
  );
};

export default DotMenu;