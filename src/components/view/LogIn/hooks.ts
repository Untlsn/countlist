import { useBoolState } from '@hooks';
import type { LoginBody, LoginReturnBody, AddUserBody } from '~/types/api-types';
import { formChanger } from './data';
import axios, { AxiosResponse } from 'axios';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import saveStorage from '@helpers/saveStorage';


export const useLogState = () => {
  const [isLogin, switchType] = useBoolState(true);
  const text = isLogin ? 'Log in' : 'Sing Up';
  const [beforeClicker, clicker] = formChanger[text];
  const [error, changeError] = useState('');

  return {
    isLogin,
    switchType,
    beforeClicker,
    clicker,
    text,
    error,
    changeError,
  };
};



export const useLogin = (onFail: (mess: string) => void) => {
  const history = useHistory();

  return (body: LoginBody) => {
    axios.post<LoginReturnBody, AxiosResponse<LoginReturnBody>>('/api/login', body)
      .then(({ data: { id, secret } }) => {
        saveStorage.setToken(secret);
        saveStorage.setID(id);
        history.push('/home');
      })
      .catch(err => onFail(err.response?.data));
  };
};

export const useSingUp = (login: (body: LoginBody) => void, onFail: (mess: string) => void) => {
  return (body: AddUserBody) => {
    axios.post<AddUserBody, AxiosResponse<AddUserBody>>('/api/add-user', body)
      .then(() => {
        const { email, password } = body;
        login({ term: email, password });
      })
      .catch(err => onFail(err.response?.data));
  };
};