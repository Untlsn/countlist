import React from 'react';
import * as S from './style';
import useComposedDispatch from '~/hooks/useComposedDispatch';
import { useSelector } from 'react-redux';
import { OnlyID } from '~/types/only';
import { mini } from '~/store/actions';

const ListPoint = ({ id }: OnlyID) => {

  const useList = useComposedDispatch()(mini.useList);
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