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

  return { isLogin, switchType, beforeClicker, clicker, text, showError, toggleShowError };
};

export const useLogin = (onFail: () => void) => {
  const changeUserID = useCleverDispatch()(({ mini }) => mini.changeUserID);
  const history = useHistory();

  return (data: LoginTemplate) => {
    axios
      .post('/api/get-user', data)
      .then(({ data }) => {
        const id = data.replace('$', '');
        changeUserID(id);
      })
      .then(() => history.push('/home'))
      .catch(onFail);
  };
};