import { q } from './initFauna';



const loginTemp = (indexName: string) => (term: string, password: string) => q.Login(
  q.Match(q.Index(indexName), term),
  { password: password },
);
export const login = {
  email: loginTemp('user_by_email'),
  name: loginTemp('user_by_name'),
};
export const getIDByRef = (id: string) => q.Paginate(
  q.Match(q.Index('user_id_by_id'), id),
);

const idTemp = (indexName: string) => (id: string) => q.Map(
  q.Paginate(
    q.Match(q.Index(indexName), id),
  ),
  q.Lambda(ref => q.Get(ref)),
);

export const getLists = idTemp('lists_by_owner');
export const getPoints = idTemp('points_by_owner');

export const getManyPoints = (ids: string[]) => q.Map(
  ids,
  q.Lambda(x => getPoints(x)),
);

const idGetter = (index: string) => (ids: string[]) => q.Map(
  [ids],
  q.Lambda(id => q.Paginate(
    q.Match(q.Index(index), id),
  )),
);

export const getListsIDs = idGetter('list_id_by_id');
export const getPointsIDs = idGetter('point_id_by_id');


