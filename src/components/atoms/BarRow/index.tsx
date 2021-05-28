import React from 'react';
import * as S from './style';
import { BarRowProps } from './types';
import { repeat } from './helpers';

const BarRow = ({ rows }: BarRowProps) => {
  const repeatBars = repeat(i => <S.Bar key={i} />);

  return (
    <S.Wrapper>
      {repeatBars(rows)}
    </S.Wrapper>
  );
};

export default BarRow;
export type { BarRowProps } from './types.d';