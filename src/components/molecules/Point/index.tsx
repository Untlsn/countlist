import React from 'react';
import * as S from './style';
import type { PointProps } from './types';
import PointCircle from '@atoms/PointCircle';
import { useDataDispatch, usePointData } from '@molecules/Point/hooks';
import { OnlyID } from '@types';
import CountBox from '@atoms/CountBox';
import prevDef from '@helpers/prevDef';

const Point = ({ id }: OnlyID) => {
  const { count, name, max, type } = usePointData(id);
  const { changeCount, usePoint } = useDataDispatch(id);

  const clicker = {
    onClick: type == 'check'
      ? () => changeCount()
      : () => changeCount(count+1),
    onContextMenu: type == 'check' ? undefined : prevDef(() => changeCount(count-1)),
  };


  return (
    <S.Wrapper>
      <S.Flex {...clicker}>
        {type == 'check'
          ? <PointCircle checked={!!count}/>
          : <CountBox fill={count / max}/>
        }
        <S.BigText>{name}</S.BigText>
      </S.Flex>
      <S.Ellipsis onClick={usePoint} />
    </S.Wrapper>
  );
};

export default Point;
export type { PointProps } from './types.d';