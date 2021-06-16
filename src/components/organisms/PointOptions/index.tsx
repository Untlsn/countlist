import React from 'react';
import * as S from './style';
import { CheckBox, NumberInput } from '@atoms';
import { useNameInput, usePointData } from './hooks';
import ConfirmationPortal from '@molecules/ConfirmationPortal';
import { useBoolState } from '@hooks';
import { useSelector } from 'react-redux';

const PointOptions = () => {
  const usedPoint = useSelector(({ mini }) => mini.usedPoint)!;

  const inputProps = useNameInput(usedPoint);
  const { type, max, count, changeType, changeMax, changeCount, remove, hide } = usePointData(usedPoint);
  const [confirmation, changeConfirmation] = useBoolState();
  
  const checkBox = (ownType: 'check'|'count') => (
    <CheckBox checked={type == ownType} changeChecked={changeType[ownType]} value={ownType} />
  );
  
  return (
    <>
      <S.Shadow onClick={hide} />
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
          <S.Arrow onClick={hide} />
          <S.Trash onClick={changeConfirmation} />
          {confirmation &&
          <ConfirmationPortal pointName={inputProps.value} onYes={remove} onNo={changeConfirmation} />
          }
        </S.RFrame>
      </S.Wrapper>
    </>
  );
};

export default PointOptions;