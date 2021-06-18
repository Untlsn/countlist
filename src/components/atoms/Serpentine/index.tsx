import React from 'react';
import * as S from './style';
import { OnlyChildren } from '@types';
import serpentineImg from '@assets/images/seprentine.svg';

const Serpentine = ({ children }: OnlyChildren<string>) => {
  return (
    <S.Wrapper>
      <S.Text>{children}</S.Text>
      <img src={serpentineImg} alt='' />
    </S.Wrapper>
  );
};

export default Serpentine;