import React, { useEffect } from 'react';
import * as S from './style';
import Serpentine from '@atoms/Serpentine';
import { LoginForm, SingUpForm } from '@molecules/Forms';
import { useLogState } from '@view/LogIn/hooks';
import axios from 'axios';
import { useCleverDispatch } from '@hooks';
import ErrorPortal from '@atoms/ErrorPortal';
import { useHistory } from 'react-router-dom';

const LogIn = () => {
  const { isLogin, clicker, beforeClicker, text, switchType, showError, toggleShowError } = useLogState();
  const changeUserID = useCleverDispatch()(({ mini }) => mini.changeUserID);
  const history = useHistory();

  useEffect(() => {
    if (showError) setTimeout(() => toggleShowError.force(false), 6000);
  }, [showError]);

  return (
    <>
      <S.Background />
      <S.Centering>
        <S.Wrapper>
          <Serpentine>{text}</Serpentine>
          {isLogin
            ? <LoginForm onSubmit={(data) => axios
              .post('/api/get-user', data)
              .then(({ data }) => changeUserID(data))
              .then(() => history.push('/home'))
              .catch(() => toggleShowError.force(true))
            } />
            : <SingUpForm onSubmit={() => {}} />
          }
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