import { Handler } from '@netlify/functions';
import { createCorrect, createError, mapForData, totalFail } from '../helpers';
import { createClient } from '../fauna/initFauna';
import { getManyPoints } from '../fauna/getters';
import { Paginate, Point } from '../fauna/types';
import * as _ from 'lodash';
import { is } from '../helpers';

const errors = {
  dataCorrupted: createError('Invalid body, data are corrupted'),
  noList: createError('Owner don\'t have any list', 404),
  unauthorized: createError('Token is invalid, try login again', 401),
  badMethod: createError('Unsupported Request Method', 405),
  bodyEmpty: createError('Body is empty, nothing was made'),
};

const errorCases = {
  Unauthorized: errors.unauthorized,
} as Record<string, { statusCode: number, body: string }>;

export const handler: Handler = async (ev) => {
  try {
    if (ev.httpMethod !== 'POST') return errors.badMethod;
    if (!ev.body) return errors.dataCorrupted;
    const listsIDs = JSON.parse(ev.body);
    if (!is.arrayOf.strings(listsIDs)) return errors.dataCorrupted;
    if (!listsIDs.length) return errors.bodyEmpty;

    const token = ev.headers.bearer;
    if (!token) return errors.unauthorized;

    const client = createClient(token);
    const pointsPaginates = await client.query<Paginate<Point>[]>(getManyPoints(listsIDs));
    const points = mapForData(
      _.flatten(
        mapForData(pointsPaginates),
      ),
    );

    return createCorrect(points);
  }
  catch (e) {
    return errorCases[e.name] || totalFail(e);
  }
};