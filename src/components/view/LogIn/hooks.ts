import { useBoolState, useCleverDispatch } from '@hooks';
import { formChanger } from './data';
import axios from 'axios';
import { LoginTemplate } from '@molecules/Forms/LoginForm';
import { useHistory } from 'react-router-dom';
import { SingUpTemplate } from './types';
import { useState } from 'react';

export const useLogState = () => {
  const [isLogin, switchType] = useBoolState(true);
  const text = isLogin ? 'Log in' : 'Sing Up';
  const [beforeClicker, clicker] = formChanger[text];
  const [error, changeError] = useState('');
  const [remember, toggleRemember] = useBoolState();

  return {
    isLogin,
    switchType,
    beforeClicker,
    clicker,
    text,
    error,
    changeError,
    remember,
    toggleRemember,
  };
};

const useUserBase = <DataType>(url: string) => (save: boolean, onFail: (errorMess: string) => void) => {
  const changeUserID = useCleverDispatch()(({ mini }) => mini.changeUserID);
  const history = useHistory();

  return (data: DataType) => {
    axios
      .post(url, data)
      .then(({ data }) => {
        console.log(data);
        const id = data.replace('$', '');
        changeUserID(id);
        if (save) localStorage.setItem('user_id', id);
        history.push('/home');
      })
      .catch((err) => {
        console.log(err);
        onFail(err.response?.data);
      });
  };
};

export const useLogin = useUserBase<LoginTemplate>('/api/get-user');
export const useSingUp = useUserBase<SingUpTemplate>('/api/add-user');