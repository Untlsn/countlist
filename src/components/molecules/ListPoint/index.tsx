import React from 'react';
import * as S from './style';
import { OnlyID } from '~/types/only';
import { useListShell } from '~/store/shells';

const ListPoint = ({ id }: OnlyID) => {
  const { isSelected, select, unshell: { name } } = useListShell(id);

  return (
    <S.Wrapper onClick={select}>
      <S.Line $visible={isSelected} />
      <S.Arrow $selected={isSelected} />
      <S.Capital $selected={isSelected}>{name}</S.Capital>
    </S.Wrapper>
  );
};

export default ListPoint;