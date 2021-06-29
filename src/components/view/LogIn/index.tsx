import React, { useEffect } from 'react';
import * as S from './style';
import { Serpentine, ErrorPortal } from '@atoms';
import { LoginForm, SingUpForm } from '@molecules/Forms';
import { useLogin, useLogState } from './hooks';


const LogIn = () => {
  const {
    isLogin,
    clicker,
    beforeClicker,
    text,
    switchType,
    showError,
    toggleShowError,
    remember,
    toggleRemember,
  } = useLogState();

  useEffect(() => {
    if (showError) setTimeout(() => toggleShowError.force(false), 6000);
  }, [showError]);

  const login = useLogin(remember, () => toggleShowError.force(true));

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
          <S.RightTextHovered onClick={toggleRemember} >
            <S.SquareButton selected={remember} /> Remember me
          </S.RightTextHovered>
          <S.RightText>
            <S.ShadowText>{beforeClicker} </S.ShadowText>
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