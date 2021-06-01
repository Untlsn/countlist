import React, { useEffect } from 'react';
import * as S from './style';
import type { OptionsProps } from './types';
import { ListPoint, AddBar } from '@molecules';
import Nav from '@organisms/Nav';
import { useAddListFn, useDataSelector } from '@view/Options/hooks';
import { useSelector } from 'react-redux';
import useSwitchOptions from '@hooks/useSwitchOptions';


const Options = ({ selected, changeSelected }: OptionsProps) => {
  const { listsKeys, userName } = useDataSelector();
  const addList = useAddListFn();
  let lastID = '';
  const listPoints = listsKeys.map((id) => {
    lastID = id;
    return (
      <ListPoint
        key={id}
        name={id.split('@')[0]}
        onClick={() => changeSelected(id)}
        selected={selected == id} />
    );
  });


  useEffect(() => {
    changeSelected(lastID);
  }, [listsKeys.length]);

  const optionVisible = useSelector(({ mini }) => mini.optionVisible);
  const switchOptions = useSwitchOptions();
  return (
    <div>
      <S.Shadow optionVisible={optionVisible} onClick={switchOptions} />
      <S.Wrapper optionVisible={optionVisible}>
        <Nav name={userName} />
        <S.ListWrapper>
          <S.List>
            {listPoints}
          </S.List>
          <AddBar onCommit={addList} placeholder='new list' clear />
        </S.ListWrapper>
      </S.Wrapper>
    </div>
  );
};

export default Options;
export type { OptionsProps } from './types.d';