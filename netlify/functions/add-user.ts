import { Handler } from '@netlify/functions';
import { client } from '../fauna/initFauna';
import { getUserIDByData } from '../fauna/getters';
import { User } from '../fauna/types';


export const handler: Handler = async (ev) => {
  if (!ev.body) return { statusCode: 400 };
  const { username, password } = JSON.parse(ev.body) as Record<string, string>;

  const id = await client.query<User>(
    getUserIDByData(username, password),
  ).then(({ ref }) => ref.id);

  return { statusCode: 200, body: id };
};