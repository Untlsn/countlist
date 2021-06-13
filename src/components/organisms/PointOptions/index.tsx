import React from 'react';
import * as S from './style';
import { CheckBox, NumberInput } from '@atoms';
import { BsFillTrashFill } from 'react-icons/bs';
import { useNameInput } from './hooks';

const PointOptions = () => {
  const inputProps = useNameInput();

  return (
    <S.Wrapper>
      <S.Frame>
        <S.Input {...inputProps} />
      </S.Frame>
      <S.MFrame>
        <CheckBox checked={false} changeChecked={() => {}} value='Check' />
        <CheckBox checked={false} changeChecked={() => {}} value='Count' />
        <NumberInput label='Max' value={0} onChange={() => {}} />
        <NumberInput label='Current' value={0} onChange={() => {}} />
      </S.MFrame>
      <S.RFrame>
        <BsFillTrashFill size={35} color='#0000007F' />
      </S.RFrame>
    </S.Wrapper>
  );
};

export default PointOptions;