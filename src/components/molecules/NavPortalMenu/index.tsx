import React from 'react';
import * as S from './style';
import useBoolState from '~/hooks/useBoolState';
import ConfirmationPortal from '~/components/molecules/ConfirmationPortal';
import RenamePortal from '~/components/atoms/RenamePortal';
import { useNavData, useSelectedList } from '~/components/molecules/NavPortalMenu/hooks';

const NavPortalMenu = () => {
  const [showMenu, changeShowMenu] = useBoolState();
  const { texts, events, icons, portals, closePortal } = useNavData();
  const list = useSelectedList();
  const createdPoints = texts.map(
    (text, i) => (
      <S.Points onClick={events[i]} key={text}>
        <S.Icon>{icons[i]}</S.Icon>
        <span>{text}</span>
      </S.Points>
    ),
  );

  return (
    <>
      <S.Wrapper onClick={changeShowMenu}>
        <S.Dots />
        {showMenu && (
          <S.ShowMenu onBlur={() => changeShowMenu.force(false)}>
            {createdPoints}
          </S.ShowMenu>
        )}
      </S.Wrapper>
      {portals.showConfirmation && (
        <ConfirmationPortal
          name={list.name}
          onYes={() => {
            list.remove();
            closePortal.confirmation();
          }}
          onNo={closePortal.confirmation} />
      )}
      {portals.showRename && (
        <RenamePortal
          value={list.name}
          onChange={list.rename}
          onClose={closePortal.rename} />
      )}
    </>
  );
};

export default NavPortalMenu;