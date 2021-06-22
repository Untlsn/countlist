import React from 'react';
import * as S from './style';
import Serpentine from '@atoms/Serpentine';
import { useBoolState } from '@hooks';
import { LoginForm } from '@molecules/Forms';

const LogIn = () => {
  const [isLogin] = useBoolState();
  const text = isLogin ? 'Log in' : 'Sing Up';

  const onSubmit = () => {};

  return (
    <S.Wrapper>
      <Serpentine>{text}</Serpentine>
      <LoginForm onSubmit={onSubmit} />
    </S.Wrapper>
  );
};

export default LogIn;