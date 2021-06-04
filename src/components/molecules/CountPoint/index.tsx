import React, { useState } from 'react';
import * as S from './style';
import type { CountPointProps } from './types';
import CountBox from '@atoms/CountBox';

const CountPoint = ({ text, initFill, maxFill, onClick }: CountPointProps) => {
  const [fill, changeFill] = useState(initFill);
  const fillFn = (callback: (old: number) => number) => () => {
    changeFill(callback);
    onClick(fill);
  };

  const inFill = fillFn(
    (old) => old < maxFill ? old + 1 : old,
  );
  const decFill = fillFn(
    (old) => old > 0 ? old - 1 : old,
  );


  return (
    <S.Wrapper onClick={inFill} onContextMenu={(ev) => {
      decFill();
      ev.preventDefault();
    }}>
      <CountBox fill={fill / maxFill} />
      <S.BigText>{text}</S.BigText>
    </S.Wrapper>
  );
};

export default CountPoint;
export type { CountPointProps } from './types.d';