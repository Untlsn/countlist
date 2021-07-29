import React from 'react';
import * as S from './style';
import type { PointProps } from './types';
import PointCircle from '~/components/atoms/PointCircle';
import { useDataDispatch, usePointData } from '~/components/molecules/Point/hooks';
import { OnlyID } from '~/types/only';
import CountBox from '~/components/atoms/CountBox';
import prevDef from '~/helpers/prevDef';
import { useSelector } from 'react-redux';

const Point = ({ id }: OnlyID) => {
  const usedPoint = useSelector(({ mini }) => mini.usedPoint);
  const { count, name, max } = usePointData(id);
  const { changeCount, usePoint } = useDataDispatch(id);

  const clicker = {
    onClick: max == 1
      ? () => changeCount(count == 0 ? 1 : 0)
      : () => changeCount(count+1),
    onContextMenu: max == 1 ? undefined : prevDef(() => changeCount(count-1)),
  };


  return (
    <S.Wrapper>
      <S.Flex {...clicker}>
        {max == 1
          ? <PointCircle checked={!!count}/>
          : <CountBox fill={count / max}/>
        }
        <S.BigText>{name}</S.BigText>
      </S.Flex>
      <S.Ellipsis onClick={() => usedPoint == id ? usePoint(undefined) : usePoint(id)} />
    </S.Wrapper>
  );
};

export default Point;
export type { PointProps } from './types.d';