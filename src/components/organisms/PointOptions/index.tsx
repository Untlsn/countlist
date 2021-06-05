import React from 'react';
import * as S from './style';
import { CheckBox, NumberInput } from '@atoms';
import { BsFillTrashFill } from 'react-icons/bs';
import EditPoint from '@molecules/EditPoint';

const PointOptions = () => {
  return (
    <S.Wrapper>
      <S.Frame>
        <EditPoint checked={false} changeCheck={() => {}} value={'point'} changeValue={() => {}} />
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