import React from 'react';
import * as S from './style';
import type { NavProps } from './types';
import DotMenu from '~/components/atoms/DotMenu';
import useComposedDispatch from '~/hooks/useComposedDispatch';
import { lists, mini } from '~/store/actions';
import { BsFillTrashFill } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import ConfirmationPortal from '~/components/molecules/ConfirmationPortal';
import useBoolState from '~/hooks/useBoolState';

const Nav = ({ name, dotMenu = false }: NavProps) => {
  const dispatch = useComposedDispatch();
  const switchOptions = dispatch(mini.switchOptions);
  const usedList = useSelector(({ mini }) => mini.usedList);
  const listName = useSelector(({ lists }) => lists.lists[usedList!]?.name ?? '');
  const removeList = dispatch(lists.remove);
  const [showConfirmation, changeShowConfirmation] = useBoolState();

  const dotMenuProps = {
    icons: [
      <BsFillTrashFill key='trash' />,
    ],
    events: [
      () => changeShowConfirmation.force(true),
    ],
    texts: [
      'remove',
    ],
  };

  return (
    <>
      <S.Wrapper>
        <S.Layer>
          <S.Hamburger size={25} onClick={switchOptions} $dotMenu={dotMenu} />
        </S.Layer>
        <S.Layer>
          <S.BigText dotMenu={dotMenu}>{name}</S.BigText>
          {dotMenu && <DotMenu {...dotMenuProps} />}
        </S.Layer>
      </S.Wrapper>
      {showConfirmation && (
        <ConfirmationPortal
          name={listName}
          onYes={usedList
            ? () => {
              removeList(usedList);
              changeShowConfirmation.force(false);
            } : () => {}
          }
          onNo={() => changeShowConfirmation.force(false)} />
      )}
    </>
  );
};

export default Nav;
export type { NavProps } from './types';