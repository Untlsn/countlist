import React, { useEffect } from 'react';
import * as S from './style';
import Serpentine from '@atoms/Serpentine';
import { LoginForm, SingUpForm } from '@molecules/Forms';
import { useLogin, useLogState } from '@view/LogIn/hooks';
import ErrorPortal from '@atoms/ErrorPortal';
const LogIn = () => {
  const { isLogin, clicker, beforeClicker, text, switchType, showError, toggleShowError } = useLogState();

  useEffect(() => {
    if (showError) setTimeout(() => toggleShowError.force(false), 6000);
  }, [showError]);

  const login = useLogin(() => toggleShowError.force(true));

  return (
    <>
      <S.Background />
      <S.Centering>
        <S.Wrapper>
          <Serpentine>{text}</Serpentine>
          {isLogin
            ? <LoginForm onSubmit={login} />
            : <SingUpForm onSubmit={() => {}} />
          }
          <S.RightText>
            <S.ShadowText>{beforeClicker}</S.ShadowText>
            <S.FakeLink onClick={switchType}>{clicker}</S.FakeLink>
          </S.RightText>
        </S.Wrapper>
        <S.Logo />
      </S.Centering>
      {showError && <ErrorPortal />}
    </>
  );
};

export default LogIn;