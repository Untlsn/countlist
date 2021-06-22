import React from 'react';
import * as S from './style';
import Serpentine from '@atoms/Serpentine';
import { useBoolState } from '@hooks';
import { LoginForm, SingUpForm } from '@molecules/Forms';
import { formChanger } from '@view/LogIn/data';

const LogIn = () => {
  const [isLogin, switchType] = useBoolState();
  const text = isLogin ? 'Log in' : 'Sing Up';

  const onSubmit = (data: any) => console.log(data);

  const [beforeClicker, clicker] = formChanger[text];

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