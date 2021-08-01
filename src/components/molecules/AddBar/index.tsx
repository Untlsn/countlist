import React, { useState } from 'react';
import * as S from './style';
import type { AddBarProps } from './types';
import { handleChange } from '~/helpers';

const AddBar = ({ placeholder, onCommit, clear = false }: AddBarProps) => {
  const [value, changeValue] = useState('');

  const submit = () => {
    onCommit(value);
    changeValue('');
  };

  return (
    <S.Wrapper clear={clear}>
      <S.Plus size={20} onClick={submit} $clear={clear} />
      <S.Input
        {...{ clear, value, placeholder }}
        onChange={handleChange(changeValue)}
        onKeyDown={({ key }) => key == 'Enter' && submit()} />
    </S.Wrapper>
  );
};

export default AddBar;
export type { AddBarProps } from './types.d';