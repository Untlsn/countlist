import React from 'react';
import * as S from './style';
import ConfirmationPortal from '~/components/molecules/ConfirmationPortal';
import RenamePortal from '~/components/atoms/RenamePortal';
import { useNavData } from '~/components/molecules/NavPortalMenu/hooks';
import { useListShell } from '~/store/shells';
import { useSelectedID } from '~/store/selectors';
import useComposedDispatch from '~/hooks/useComposedDispatch';
import { mini } from '~/store/actions';

const NavPortalMenu = () => {
  const { createdPoints, visibleMenu, clearVisibleMenu } = useNavData(); // no redux
  const clearSelectPoint = useComposedDispatch()(mini.clearSelectPoint) as () => void;

  const list = useListShell(useSelectedID('list')!);

  return (
    <>
      <S.Wrapper>
        <S.Dots />
        <S.ShowMenu tabIndex={10}>
          {createdPoints}
        </S.ShowMenu>
      </S.Wrapper>
      {visibleMenu == 'confirm' && (
        <ConfirmationPortal
          name={list.unshell.name}
          onYes={() => {
            list.remove();
            clearSelectPoint();
            clearVisibleMenu();
          }}
          onNo={clearVisibleMenu} />
      )}
      {visibleMenu == 'rename' && (
        <RenamePortal
          value={list.unshell.name}
          onChange={list.rename}
          onClose={clearVisibleMenu} />
      )}
    </>
  );
};

export default NavPortalMenu;