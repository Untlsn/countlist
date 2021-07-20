import React, { useEffect } from 'react';
import * as S from './style';
import { Serpentine, ErrorPortal } from '@atoms';
import { LoginForm, SingUpForm } from '@molecules/Forms';
import { useLogin, useLogState, useSingUp } from './hooks';


const LogIn = () => {
  const {
    isLogin,
    clicker,
    beforeClicker,
    text,
    switchType,
    error,
    changeError,
  } = useLogState();

  useEffect(() => {
    if (error) setTimeout(() => changeError(''), 6000);
  }, [error]);

  const login = useLogin(changeError);
  const singUp = useSingUp(login, changeError);

  return (
    <>
      <S.Background />
      <S.Centering>
        <S.Wrapper>
          <Serpentine>{text}</Serpentine>
          {isLogin
            ? <LoginForm onSubmit={login} />
            : <SingUpForm onSubmit={singUp} />
          }
          <S.RightText>
            <S.ShadowText>{beforeClicker} </S.ShadowText>
            <S.FakeLink onClick={switchType}>{clicker}</S.FakeLink>
          </S.RightText>
        </S.Wrapper>
        <S.Logo />
      </S.Centering>
      {error && <ErrorPortal>{error}</ErrorPortal>}
    </>
  );
};

export default LogIn;