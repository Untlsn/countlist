import React from 'react';
import * as S from './style';
import { ListPoint, AddBar } from '~/components/molecules';
import { useListEffect } from './hooks';
import { useOptionShell } from '~/store/shells';
import useComposedDispatch from '~/hooks/useComposedDispatch';
import { lists } from '~/store/actions';


const Options = () => {
  const addList = useComposedDispatch()(lists.addList);
  const option = useOptionShell();
  const listsIDs = useListEffect();

  return (
    <div>
      <S.Shadow optionVisible={option.visible} onClick={option.switch} />
      <S.Wrapper optionVisible={option.visible}>
        <S.List>
          {listsIDs.map(id => <ListPoint key={id} id={id} />)}
        </S.List>
        <AddBar onCommit={addList} placeholder='new list' clear />
      </S.Wrapper>
    </div>
  );
};

export default Options;