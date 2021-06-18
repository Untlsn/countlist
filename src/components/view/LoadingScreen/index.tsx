import React from 'react';
import * as S from './style';
import Logo from '@assets/images/favicon.svg';

const LoadingScreen = () => {
  return (
    <S.Wrapper>
      <S.Image src={Logo} />
    </S.Wrapper>
  );
};

export default LoadingScreen;