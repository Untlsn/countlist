import React from 'react';
import * as S from './style';
import { FloatingMenuProps } from './types';
import * as _ from 'lodash';
import { IconType } from 'react-icons';
import useOutClick from '@hooks/useOutClick';

const FloatingMenu = ({ icons, text, actions, hideMe, ...props }: FloatingMenuProps) => {
  const wrapperRef = useOutClick<HTMLDivElement>(hideMe);

  return (
    <S.Wrapper {...props} ref={wrapperRef}>{
      _.zipWith(
        icons, text, actions,
        (Icon: IconType, text: string, actions: () => void) => (
          <S.Bar key={text} onClick={actions}>
            <S.Icon><Icon /></S.Icon>
            <S.Centring>{text}</S.Centring>
          </S.Bar>
        ),
      )
    }</S.Wrapper>
  );
};

export default FloatingMenu;
export type { FloatingMenuProps } from './types.d';