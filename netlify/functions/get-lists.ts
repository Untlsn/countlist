import { Handler } from '@netlify/functions';
import { createCorrect, createError, mapForData, toList, totalFail } from '../helpers';
import { createClient } from '../fauna/initFauna';
import { getLists } from '../fauna/getters';
import { List, Paginate } from '../fauna/types';
import _ from 'lodash';
import { GetListsBody, GetListsReturnBody } from '../body-template';

const errors = {
  dataCorrupted: createError('Invalid body, data are corrupted'),
  noList: createError('Owner don\'t have any list', 404),
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
    const { data: paginateData } = await client.query<Paginate<List>>(getLists(userID));
    if (paginateData.length == 0) return errors.noList;

    const listData = mapForData(paginateData);
    const ids = _.map(listData, it => it.id);
    const names = _.map(listData, it => it.name);

    return createCorrect<GetListsReturnBody>(_.zipWith(ids, names, toList));
  }
  catch (e) {
    return errorCases[e.name] || totalFail(e);
  }
};