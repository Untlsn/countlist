import { Handler } from '@netlify/functions';
import { createCorrect, createError, totalFail } from '../helpers';
import { createClient } from '../fauna/initFauna';
import { getName } from '../fauna/getters';
import { Paginate } from '../fauna/types';
import { GetListsBody } from '../body-template';

const errors = {
  dataCorrupted: createError('Invalid body, data are corrupted'),
  unauthorized: createError('Token is invalid, try login again', 401),
  badMethod: createError('Unsupported Request Method', 405),
};

const errorCases = {
  Unauthorized: errors.unauthorized,
} as Record<string, { statusCode: number, body: string }>;

export const handler: Handler = async (ev) => {
  try {
    if (ev.httpMethod !== 'POST') return errors.badMethod;

    const userID = ev.body as GetListsBody | undefined;
    if (!userID) return errors.dataCorrupted;

    const token = ev.headers.bearer;
    if (!token) return errors.unauthorized;

    const client = createClient(token);
    const { data: [name] } = await client.query<Paginate<string>>(getName(userID));
    if (!name) return errors.dataCorrupted;

    return createCorrect(name);
  }
  catch (e) {
    console.log(e);
    return errorCases[e.name] || totalFail(e);
  }
};