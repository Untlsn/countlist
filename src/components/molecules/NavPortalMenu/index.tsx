import React from 'react';
import * as S from './style';
import useBoolState from '~/hooks/useBoolState';
import ConfirmationPortal from '~/components/molecules/ConfirmationPortal';
import RenamePortal from '~/components/atoms/RenamePortal';
import { useNavData } from '~/components/molecules/NavPortalMenu/hooks';
import { useListShell } from '~/store/shells';
import { useSelectedID } from '~/store/selectors';
import useOutClick from '~/hooks/useOutClick';
import useComposedDispatch from '~/hooks/useComposedDispatch';
import { mini } from '~/store/actions';

const NavPortalMenu = () => {
  const [showMenu, changeShowMenu] = useBoolState();
  const { createdPoints, portals, closePortal } = useNavData(); // no redux
  const clearSelectPoint = useComposedDispatch()(mini.clearSelectPoint) as () => void;
  const ref = useOutClick<HTMLUListElement>(() => changeShowMenu.force(false));
  const list = useListShell(useSelectedID('list')!);

  return (
    <>
      <S.Wrapper onClick={changeShowMenu}>
        <S.Dots />
        {showMenu && (
          <S.ShowMenu ref={ref}>
            {createdPoints}
          </S.ShowMenu>
        )}
      </S.Wrapper>
      {portals.showConfirmation && (
        <ConfirmationPortal
          name={list.unshell.name}
          onYes={() => {
            list.remove();
            clearSelectPoint();
            closePortal.confirmation();
          }}
          onNo={closePortal.confirmation} />
      )}
      {portals.showRename && (
        <RenamePortal
          value={list.unshell.name}
          onChange={list.rename}
          onClose={closePortal.rename} />
      )}
    </>
  );
};

export default NavPortalMenu;