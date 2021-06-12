import React from 'react';
import * as S from './style';
import type { EditPointProps } from './types';
import handleChange from '@helpers/handleChange';

const EditPoint = ({ changeValue, value }: EditPointProps) => {
  return (
    <S.Wrapper>
      <S.Input value={value} onChange={handleChange(changeValue)} />
    </S.Wrapper>
  );
};

export default EditPoint;
export type { EditPointProps } from './types';