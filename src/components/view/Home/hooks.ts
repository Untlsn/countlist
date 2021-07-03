import axios from 'axios';
import { List, Point } from '@store/ducks/lists/state.types';
import * as _ from 'lodash';
import { useHistory } from 'react-router-dom';
import { useCleverDispatch } from '@hooks';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

export const useLocalData = () => {
  const changeUserID = useCleverDispatch()(({ mini }) => mini.changeUserID);
  useEffect(() => {
    const token = localStorage.getItem('user_id');
    if (token) changeUserID(token);
  }, []);
};

export const useConnect = (onOk: () => void) => {
  const cleverDispatch = useCleverDispatch();
  const initLists = cleverDispatch(({ lists }) => lists.initLists);
  const initPoints = cleverDispatch(({ lists }) => lists.initPoints);
  const changeUserName = cleverDispatch(({ mini }) => mini.changeUserName);
  const userID = useSelector(({ mini }) => mini.userID) || localStorage.getItem('user_id');
  const history = useHistory();

  return () => {
    axios
      .post('/api/get-lists', userID)
      .then(({ data }) => {
        changeUserName(data.username);
        return JSON.parse(data.lists) as Record<string, List>;
      })
      .then((lists) => {
        initLists(lists);
        const allPoints: string[] = [];
        _.forOwn(lists, ({ composition }) => allPoints.push(...composition));
        return allPoints;
      })
      .then((points) => {
        axios
          .post('/api/get-points', points)
          .then(({ data }) => data as Record<string, Point>)
          .then(initPoints)
          .then(onOk)
          .catch(console.log);
      })
      .catch(() => history.push('/login'));
  };
};