import React from 'react';
import * as S from './style';
import type { CountPointProps } from './types';
import { useFill } from './hooks';
import CountBox from '@atoms/CountBox';
import { prevDef } from './helpers';

const CountPoint = ({ text, initFill, maxFill, onClick }: CountPointProps) => {
  const { fill, inFill, decFill } = useFill({ maxFill, onClick, initFill });

  return (
    <S.Wrapper>
      <S.Flex onClick={inFill} onContextMenu={prevDef(decFill)}>
        <CountBox fill={fill / maxFill} />
        <S.BigText>{text}</S.BigText>
      </S.Flex>
      <S.Ellipsis />
    </S.Wrapper>
  );
};

export default CountPoint;
export type { CountPointProps } from './types.d';