import React from 'react';
import * as S from './style';
import { NumberInput } from '~/components/atoms';
import { useNameInput, usePointData } from './hooks';
import ConfirmationPortal from '~/components/molecules/ConfirmationPortal';
import { useSelector } from 'react-redux';
import useBoolState from '~/hooks/useBoolState';

const PointOptions = () => {
  const usedPoint = useSelector(({ mini }) => mini.usedPoint)!;

  const { max, count, id, change, remove, hide, name } = usePointData(usedPoint);
  const inputProps = useNameInput(usedPoint, name);
  const [confirmation, changeConfirmation] = useBoolState();
  
  return (
    <>
      <S.Shadow onClick={hide} />
      <S.Wrapper>
        <S.Frame>
          <S.Input {...inputProps} />
        </S.Frame>
        <S.MFrame>
          <NumberInput label='Max' value={max} onChange={max => change({ id, max })} />
          <NumberInput label='Current' value={count} onChange={count => change({ id, count })} />
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