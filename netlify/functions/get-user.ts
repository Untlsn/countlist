import { Handler } from '@netlify/functions';
import { client } from '../fauna/initFauna';
import { User } from '../fauna/types';
import { getUserIDByData } from '../fauna/getters';

export const handler: Handler = async (ev) => {
  try {
    if (!ev.body) return { statusCode: 400 };
    const { username, password } = JSON.parse(ev.body) as Record<string, string>;
    if (!username || !password) return { statusCode: 400 };

    const id = await client.query<User>(
      getUserIDByData(username, password),
    ).then(({ ref }) => ref.id);

    return { statusCode: 200, body: id };
  } catch (e) {
    switch (e.name) {
      case 'SyntaxError': return {
        statusCode: 400,
        body: 'Error: Invalid body, username or password are corrupted',
      };
      case 'NotFound': return {
        statusCode: 404,
        body: 'Error: username don\'t exist or password is wrong',
      };
    }
  }
  return { statusCode: 500 };
};