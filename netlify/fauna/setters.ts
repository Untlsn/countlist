import { q } from './initFauna';
import { ListData, PointData } from './types';

export const createUser = (email: string, name: string, password: string ) => q.Create(
  q.Collection('users'),
  {
    data: { email, name },
    credentials: { password },
  },
);
export const createLists = (lists: ListData[]) => q.Map(
  lists,
  q.Lambda(data => q.Create(q.Collection('lists'), { data })),
);


export const createPoints = (points: PointData[]) => q.Map(
  points,
  q.Lambda(data => q.Create(q.Collection('points'), { data })),
);

export const deleteManyTemp = (collection: string) => (ids: string[]) => q.Map(
  ids,
  q.Lambda(id => q.Delete(
    q.Ref(q.Collection(collection), id),
  )),
);

export const deleteLists = deleteManyTemp('lists');
export const deletePoints = deleteManyTemp('points');