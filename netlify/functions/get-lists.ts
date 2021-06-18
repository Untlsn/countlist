import { Handler } from '@netlify/functions';
import { states } from '../mockData';

export const handler: Handler = async (ev) => {
  const id = String(ev.queryStringParameters?.id);
  const data = states[id];

  return data
    ? {
      statusCode: 200,
      body: JSON.stringify(data),
    }
    : { statusCode: 404 };
};