import React from 'react';
import * as S from './style';
import type { ListPointProps } from './types';
import useCleverDispatch from '@hooks/useCleverDispatch';
import { useSelector } from 'react-redux';

const ListPoint = ({ id }: ListPointProps) => {

  const useList = useCleverDispatch()(
    ({ mini }) => mini.useList,
  );
  const selected = useSelector(
    ({ mini }) => mini.usedList == id,
  );
  const name = useSelector(
    ({ lists }) => lists.lists[id].name,
  );

  return (
    <S.Wrapper selected={selected} onClick={() => useList(id)}>
      {selected && <S.Line />}
      <S.Arrow />
      <S.Capital>{name}</S.Capital>
    </S.Wrapper>
  );
};

export default ListPoint;
export type { ListPointProps } from './types.d';