import { q } from './initFauna';

export const getUserIDByData = (name: string, password: string) => q.Select(
  ['ref', 'id'],
  q.Get(
    q.Match(
      q.Index('user_by_name_and_password'),
      [name, password],
    ),
  ),
);

export const getUserWoPassword = (userID: string) => q.Select(
  [],
  q.Get(
    q.Ref(
      q.Collection('users'),
      userID,
    ),
  ),
);

export const getUser = (userID: string) => q.Get(
  q.Ref(
    q.Collection('users'),
    userID,
  ),
);

export const getList = (listID: string) => q.Get(
  q.Ref(
    q.Collection('lists'),
    listID,
  ),
);

export const getPoint = (pointID: string) => q.Get(
  q.Ref(
    q.Collection('points'),
    pointID,
  ),
);

export const getPoints = (pointsIDs: string[]) => pointsIDs.map(getPoint);

export const dataIsUsable = (prop: string, value: string) => q.IsEmpty(
  q.Filter(
    q.Map(
      q.Paginate(
        q.Documents(
          q.Collection('users'),
        ),
      ),
      q.Lambda(x =>  q.Select(['data', prop], q.Get(x))),
    ),
    q.Lambda(x => q.Equals(value, x)),
  ),
);

