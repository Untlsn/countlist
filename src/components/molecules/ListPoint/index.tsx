import React from 'react';
import * as S from './style';
import type { ListPointProps } from './types';

const ListPoint = ({ name, selected = false, onClick }: ListPointProps) => {
  return (
    <S.Wrapper selected={selected} onClick={onClick}>
      {selected && <S.Line />}
      <S.Arrow />
      <div>{name}</div>
    </S.Wrapper>
  );
};

export default ListPoint;
export { ListPointProps } from './types.d';