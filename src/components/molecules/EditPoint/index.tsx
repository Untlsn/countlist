import React from 'react';
import * as S from './style';
import type { EditPointProps } from './types';
import PointCircle from '@atoms/PointCircle';
import handleChange from '@helpers/handleChange';

const EditPoint = ({ changeCheck, changeValue, value, checked }: EditPointProps) => {
  return (
    <S.Wrapper>
      <PointCircle checked={checked} onClick={() => changeCheck(!checked)} />
      <S.Input value={value} onChange={handleChange(changeValue)} />
    </S.Wrapper>
  );
};

export default EditPoint;
export type { EditPointProps } from './types';