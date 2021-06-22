import React from 'react';
import * as S from './style';
import Serpentine from '@atoms/Serpentine';
import { LoginForm, SingUpForm } from '@molecules/Forms';
import { useLogState } from '@view/LogIn/hooks';

const LogIn = () => {
  const { isLogin, clicker, beforeClicker, text, switchType } = useLogState();
  const onSubmit = (data: any) => console.log(data);

  return (
    <>
      <S.Background />
      <S.Centering>
        <S.Wrapper>
          <Serpentine>{text}</Serpentine>
          {isLogin
            ? <LoginForm onSubmit={onSubmit} />
            : <SingUpForm onSubmit={onSubmit} />
          }
          <S.RightText>
            <S.ShadowText>{beforeClicker} </S.ShadowText>
            <S.FakeLink onClick={switchType}>{clicker}</S.FakeLink>
          </S.RightText>
        </S.Wrapper>
        <S.Logo />
      </S.Centering>
    </>
  );
};

export default LogIn;