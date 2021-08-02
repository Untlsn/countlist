import React from 'react';
import * as S from './style';
import type { PointProps } from './types';
import PointCircle from '~/components/atoms/PointCircle';
import { OnlyID } from '~/types/only';
import CountBox from '~/components/atoms/CountBox';
import prevDef from '~/helpers/prevDef';
import { usePointShell } from '~/store/shells';

const Point = ({ id }: OnlyID) => {
  const point = usePointShell(id);
  const { max, count, name } = point.unshell;

  const clicker = {
    onClick: max == 1
      ? () => point.change({ count: count == 0 ? 1 : 0 })
      : () =>  point.change({ count: count + 1 }),
    onContextMenu: prevDef(
      max == 1
        ? () => point.change({ count: count == 0 ? 1 : 0 })
        : () => point.change({ count: count - 1 }),
    ),
  };


  return (
    <S.Wrapper>
      <S.Flex {...clicker}>
        {max == 1
          ? <PointCircle checked={!!count}/>
          : <CountBox count={count} max={max}/>
        }
        <S.BigText>{name.length >= 50
          ? <>{name.slice(0, 50)}&hellip;</>
          : name
        }</S.BigText>
      </S.Flex>
      <S.EventWrapper
        onClick={point.isSelected ? point.unselect : point.select}>
        <S.Ellipsis />
      </S.EventWrapper>
    </S.Wrapper>
  );
};

export default Point;
export type { PointProps } from './types.d';