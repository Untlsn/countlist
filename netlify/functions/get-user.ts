import { Handler } from '@netlify/functions';
import { userPipe } from '../mockData';
import * as R from 'ramda';

export const handler: Handler = async (ev) => {
  if (!ev.body) return { statusCode: 404 };
  const { username, password } = JSON.parse(ev.body) as Record<string, string>;

  let id = userPipe[R.toLower(username)]?.[password];

  return id
    ? {
      statusCode: 200,
      body: id,
    }
    : { statusCode: 404 };
};