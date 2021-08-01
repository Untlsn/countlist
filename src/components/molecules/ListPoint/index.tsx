import React from 'react';
import * as S from './style';
import { OnlyID } from '~/types/only';
import { useListShell } from '~/store/shells';

const ListPoint = ({ id }: OnlyID) => {
  const list = useListShell(id);

  return (
    <S.Wrapper $selected={list.isSelected} onClick={list.select}>
      {list.isSelected && <S.Line />}
      <S.Arrow />
      <S.Capital>{list.unshell.name}</S.Capital>
    </S.Wrapper>
  );
};

export default ListPoint;