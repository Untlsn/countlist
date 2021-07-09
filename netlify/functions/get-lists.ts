import { Handler } from '@netlify/functions';
import { createCorrect, createError, mapForData, toList, totalFail } from '../helpers';
import { createClient } from '../fauna/initFauna';
import { getLists } from '../fauna/getters';
import { List, Paginate } from '../fauna/types';
import _ from 'lodash';

const errors = {
  dataCorrupted: createError('Invalid body, data are corrupted'),
  noList: createError('Owner don\'t have any list', 404),
  unauthorized: createError('Token is invalid, try login again', 401),
};

const errorCases = {
  Unauthorized: errors.unauthorized,
} as Record<string, { statusCode: number, body: string }>;

export const handler: Handler = async (ev) => {
  try {
    if (!ev.body) return errors.dataCorrupted;
    const { userID, token } = JSON.parse(ev.body) as Record<string, string>;
    if (!userID || !token) return errors.dataCorrupted;

    const client = createClient(token);
    const { data: paginateData } = await client.query<Paginate<List>>(getLists(userID));
    if (paginateData.length == 0) return errors.noList;

    const listData = mapForData(paginateData);
    const ids = _.map(listData, it => it.id);
    const names = _.map(listData, it => it.name);

    return createCorrect(_.zipWith(ids, names, toList));
  }
  catch (e) {
    return errorCases[e.name] || totalFail(e);
  }
};