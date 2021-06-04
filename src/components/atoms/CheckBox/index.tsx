import React from 'react';
import * as S from './style';
import type { CheckBoxProps } from './types';

const CheckBox = ({ changeChecked, checked, value }: CheckBoxProps) => {
  return (
    <S.Wrapper>
      <S.Ring onClick={() => changeChecked(!checked)}>
        {checked && <S.Circle />}
      </S.Ring>
      <S.Label>{value}</S.Label>
    </S.Wrapper>
  );
};

export default CheckBox;
export type { CheckBoxProps } from './types';