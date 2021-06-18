import { Handler } from '@netlify/functions';
import { initState } from '../mockData';

const handler: Handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify(initState),
  };
};

export { handler };