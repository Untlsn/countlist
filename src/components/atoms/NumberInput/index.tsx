import React from 'react';
import * as S from './style';
import { NumberInputProps } from './types';
import { removeTrash, handleChange, uuid } from './helpers';

const NumberInput = ({ label, value, onChange }: NumberInputProps) => {
  const id = uuid();

  return (
    <S.Wrapper>
      <S.Label htmlFor={id}>{label}</S.Label>
      <S.Input id={id} value={removeTrash(value)} onChange={handleChange(onChange, 'number')} />
    </S.Wrapper>
  );
};

export default NumberInput;
export type { NumberInputProps } from './types';