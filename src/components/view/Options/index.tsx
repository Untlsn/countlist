import React from 'react';
import * as S from './style';
import type { OptionsProps } from './types';
import { useArrayState } from './hooks';
import { ListPoint, AddBar } from '@molecules';
import Nav from '@organisms/Nav';


const Options = ({ userName, listNames: initListNames, selected, changeSelected }: OptionsProps) => {
  const [listNames, listNamesCommands] = useArrayState(initListNames);

  const listPoints = listNames.map((name, i) => (
    <ListPoint
      key={name}
      name={name}
      onClick={() => changeSelected(i)}
      selected={selected == i} />
  ));



  return (
    <S.Wrapper>
      <Nav name={userName} />
      <S.List>
        {listPoints}
      </S.List>
      <AddBar onCommit={(name) => listNamesCommands.push(name)} />
    </S.Wrapper>
  );
};

export default Options;
export type { OptionsProps } from './types.d';