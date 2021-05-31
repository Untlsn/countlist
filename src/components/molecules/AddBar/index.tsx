import React, { useState } from 'react';
import * as S from './style';
import type { AddBarProps } from './types';

const AddBar = ({ placeholder, onCommit, clear = false }: AddBarProps) => {
  const [text, changeText] = useState('');

  const submit = () => changeText(old => {
    onCommit(old);
    return '';
  });

  return (
    <S.Wrapper clear={clear}>
      <S.Plus size={20} onClick={submit} clear={clear} />
      <S.Input clear={clear}
        value={text}
        onChange={({ target }) => changeText(target.value)}
        placeholder={placeholder}
        onKeyDown={({ key }) => key == 'Enter' && submit()} />
    </S.Wrapper>
  );
};

export default AddBar;
export type { AddBarProps } from './types.d';