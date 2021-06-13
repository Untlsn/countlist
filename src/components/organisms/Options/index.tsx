import React from 'react';
import * as S from './style';
import { ListPoint, AddBar, Nav } from '@molecules';
import { useDataDispatch, useDataSelector } from './hooks';


const Options = () => {
  const { listsKeys, userName, optionVisible } = useDataSelector();
  const { addList, switchOptions } = useDataDispatch();

  return (
    <div>
      <S.Shadow optionVisible={optionVisible} onClick={switchOptions} />
      <S.Wrapper optionVisible={optionVisible}>
        <Nav name={userName} />
        <S.ListWrapper>
          <S.List>
            {listsKeys.map(id => <ListPoint key={id} id={id} />)}
          </S.List>
          <AddBar onCommit={addList} placeholder='new list' clear />
        </S.ListWrapper>
      </S.Wrapper>
    </div>
  );
};

export default Options;