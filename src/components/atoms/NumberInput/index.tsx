import React, { useState } from 'react';
import * as S from './style';
import { NumberInputProps } from './types';
import { handleChange, uuid } from './helpers';

const NumberInput = ({ label, value, onChange }: NumberInputProps) => {
  const [myVal, setMyVal] = useState(value);
  if (myVal != value) setMyVal(value);
  const id = uuid();

  return (
    <S.Wrapper>
      <S.Label htmlFor={id}>{label}</S.Label>
      <S.Input value={myVal} id={id} onInput={handleChange((val) => {
        onChange(val);
        setMyVal(val);
      }, 'number')} />
    </S.Wrapper>
  );
};

export default NumberInput;
export type { NumberInputProps } from './types';