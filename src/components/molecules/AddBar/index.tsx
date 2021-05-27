import React, { useState } from 'react';
import * as S from './style';
import type { AddBarProps } from './types';

const AddBar = ({ placeholder, onCommit, clear = false }: AddBarProps) => {
  const [text, changeText] = useState('');

  const onClick = () => changeText(old => {
    onCommit(old);
    return '';
  });

  return (
    <S.Wrapper clear={clear}>
      <S.Plus onClick={onClick} clear={clear}>+</S.Plus>
      <S.Input clear={clear}
        value={text}
        onChange={({ target }) => changeText(target.value)}
        placeholder={placeholder} />
    </S.Wrapper>
  );
};

export default AddBar;
export type { AddBarProps } from './types.d';