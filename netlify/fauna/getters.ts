import { Q } from './initFauna';

export const getUserIDByData = (name: string, password: string) => Q.Get(
  Q.Match(
    Q.Index(
      'user_by_name_and_password',
    ),
    [name, password],
  ),
);

export const getUser = (userID: string) => Q.Get(
  Q.Ref(
    Q.Collection('users'),
    userID,
  ),
);

export const getList = (listID: string) => Q.Get(
  Q.Ref(
    Q.Collection('lists'),
    listID,
  ),
);

export const getPoint = (pointID: string) => Q.Get(
  Q.Ref(
    Q.Collection('points'),
    pointID,
  ),
);

export const getPoints = (pointsIDs: string[]) => pointsIDs.map(getPoint);