import { Handler } from '@netlify/functions';
import { client } from '../fauna/initFauna';
import { User } from '../fauna/types';
import { getUserIDByData } from '../fauna/getters';

const invalidBody = {
  statusCode: 400,
  body: 'Error: Invalid body, username or password are corrupted',
};

export const handler: Handler = async (ev) => {
  try {
    if (!ev.body) return invalidBody;
    const { username, password } = JSON.parse(ev.body) as Record<string, string>;
    if (!username || !password) return invalidBody;

    const id = await client.query<User>(
      getUserIDByData(username, password),
    ).then(({ ref }) => ref.id);

    return { statusCode: 200, body: `$${id}` }; // $ gives me confidence to id won't be convert to number
  } catch (e) {
    switch (e.name) {
      case 'SyntaxError': return invalidBody;
      case 'NotFound': return {
        statusCode: 404,
        body: 'Error: username don\'t exist or password is wrong',
      };
    }
  }
  return { statusCode: 500 };
};