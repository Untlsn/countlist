import { useBoolState, useCleverDispatch } from '@hooks';
import { formChanger } from './data';
import axios from 'axios';
import { LoginTemplate } from '@molecules/Forms/LoginForm';
import { useHistory } from 'react-router-dom';

export const useLogState = () => {
  const [isLogin, switchType] = useBoolState(true);
  const text = isLogin ? 'Log in' : 'Sing Up';
  const [beforeClicker, clicker] = formChanger[text];
  const [showError, toggleShowError] = useBoolState();
  const [remember, toggleRemember] = useBoolState();

  return {
    isLogin,
    switchType,
    beforeClicker,
    clicker,
    text,
    showError,
    toggleShowError,
    remember,
    toggleRemember,
  };
};

export const useLogin = (save: boolean, onFail: () => void) => {
  const changeUserID = useCleverDispatch()(({ mini }) => mini.changeUserID);
  const history = useHistory();

  return (data: LoginTemplate) => {
    axios
      .post('/api/get-user', data)
      .then(({ data }) => {
        const id = data.replace('$', '');
        changeUserID(id);
        if (save) localStorage.setItem('user_id', id);
      })
      .then(() => history.push('/home'))
      .catch(onFail);
  };
};