import React from 'react';
import * as S from './style';
import { CheckBox, NumberInput } from '@atoms';
import { BsFillTrashFill } from 'react-icons/bs';
import { useNameInput, usePointData } from './hooks';

const PointOptions = () => {
  const inputProps = useNameInput();
  const { type, max, count, changeType, changeMax, changeCount } = usePointData();
  
  const checkBox = (ownType: 'check'|'count') => (
    <CheckBox checked={type == ownType} changeChecked={changeType[ownType]} value={ownType} />
  );
  
  return (
    <S.Wrapper>
      <S.Frame>
        <S.Input {...inputProps} />
      </S.Frame>
      <S.MFrame>
        {checkBox('check')}
        {checkBox('count')}
        <NumberInput label='Max' value={max} onChange={changeMax} />
        <NumberInput label='Current' value={count} onChange={changeCount} />
      </S.MFrame>
      <S.RFrame>
        <BsFillTrashFill size={35} color='#0000007F' />
      </S.RFrame>
    </S.Wrapper>
  );
};

export default PointOptions;