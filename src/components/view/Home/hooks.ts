import axios from 'axios';
import { List, Point } from '@store/ducks/lists/state.types';
import * as R from 'ramda';
import { useHistory } from 'react-router-dom';
import { useCleverDispatch } from '@hooks';
import { useSelector } from 'react-redux';

export const useConnect = (onOk: () => void) => {
  const cleverDispatch = useCleverDispatch();
  const initLists = cleverDispatch(({ lists }) => lists.initLists);
  const initPoints = cleverDispatch(({ lists }) => lists.initPoints);
  const changeUserName = cleverDispatch(({ mini }) => mini.changeUserName);
  const userID = useSelector(({ mini }) => mini.userID);
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
        R.forEachObjIndexed(({ composition }) => allPoints.push(...composition), lists);
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