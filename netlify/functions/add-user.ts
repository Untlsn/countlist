import { Handler } from '@netlify/functions';
import { client } from '../fauna/initFauna';
import { dataIsUsable } from '../fauna/getters';
import { setUser } from '../fauna/setters';


export const handler: Handler = async (ev) => {
  try {
    if (!ev.body) return { statusCode: 400, body: 'body dont exist' };
    const { email, username, password } = JSON.parse(ev.body) as Record<string, string>;

    const [emailTest, usernameTest] = await client.query<boolean[]>([
      dataIsUsable('email', email),
      dataIsUsable('name', username),
    ]);

    if (!emailTest || !usernameTest ) return {
      statusCode: 409,
      body: !emailTest ? 'email already exist' : 'username already exist',
    };

    const id = await client.query<string>(
      setUser(username, password, email),
    );

    return {
      statusCode: 201,
      body: `$${id}`,
    };

  } catch (e) {
    return { statusCode: 400 };
  }
};