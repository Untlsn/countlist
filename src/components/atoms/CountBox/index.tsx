import React from 'react';
import * as S from './style';
import type { CountBoxProps } from './types';

const CountBox = ({ count, max }: CountBoxProps) => {
  const fill = count / max;
  const empty = 1 - fill;

  return (
    <S.Wrapper>
      <S.Empty size={empty} />
      <S.Fill size={fill} />
      {fill == 1
        ? <S.Check />
        : <S.Check as='span'>{max - count}</S.Check>
      }
    </S.Wrapper>
  );
};

export default CountBox;
export type { CountBoxProps } from './types.d';