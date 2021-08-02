import React from 'react';
import * as S from './style';
import { NumberInput } from '~/components/atoms';
import ConfirmationPortal from '~/components/molecules/ConfirmationPortal';
import useBoolState from '~/hooks/useBoolState';
import { useSelectedID } from '~/store/selectors';
import { usePointShell } from '~/store/shells';
import { handleChange } from '~/helpers';

const PointOptions = () => {
  const point = usePointShell(useSelectedID('point')!);
  const [confirmation, changeConfirmation] = useBoolState();

  return (
    <>
      <S.Shadow onClick={point.unselect} />
      <S.Wrapper>
        <S.Frame>
          <S.Input value={point.unshell.name} onChange={handleChange(point.rename)}/>
        </S.Frame>
        <S.MFrame>
          <NumberInput label='Max' value={point.unshell.max} onChange={max => point.change({ max })} />
          <NumberInput label='Current' value={point.unshell.count} onChange={count => point.change({ count })} />
        </S.MFrame>
        <S.RFrame>
          <S.Arrow onClick={point.unselect} />
          <S.Trash onClick={changeConfirmation} />
        </S.RFrame>
      </S.Wrapper>
      {confirmation && <ConfirmationPortal
        name={point.unshell.name}
        onYes={() => {
          point.unselect();
          point.remove();
          changeConfirmation();
        }}
        onNo={changeConfirmation} />
      }
    </>
  );
};

export default PointOptions;