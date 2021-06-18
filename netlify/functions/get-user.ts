import { Handler } from '@netlify/functions';
import { userPipe } from '../mockData';

export const handler: Handler = async (ev) => {
  if (!ev.body) return { statusCode: 404 };
  const { username, password } = JSON.parse(ev.body) as Record<string, string>;

  const id = userPipe[username][password];

  return id
    ? {
      statusCode: 200,
      body: id,
    }
    : { statusCode: 404 };
};