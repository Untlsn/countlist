import { q } from './initFauna';

export const setUser = (name: string, password: string, email: string) => q.Select(
  ['ref', 'id'],
  q.Create(
    q.Collection('users'),
    { data: { email, name, password, lists: [] } },
  ),
);
