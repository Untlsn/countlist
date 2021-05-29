import React from 'react';
import * as S from './style';
import type { OptionsProps } from './types';
import { ListPoint, AddBar } from '@molecules';
import Nav from '@organisms/Nav';
import { useAddListFn, useDataSelector } from '@view/Options/hooks';


const Options = ({ selected, changeSelected }: OptionsProps) => {
  const { listsNames, userName } = useDataSelector();
  const addList = useAddListFn();

  const listPoints = listsNames.map((name, i) => (
    <ListPoint
      key={name}
      name={name}
      onClick={() => changeSelected(i)}
      selected={selected == i} />
  ));

  return (
    <S.Wrapper>
      <Nav name={userName} />
      <div>
        <S.List>
          {listPoints}
        </S.List>
        <AddBar onCommit={addList} placeholder='new list' clear />
      </div>
    </S.Wrapper>
  );
};

export default Options;
export type { OptionsProps } from './types.d';