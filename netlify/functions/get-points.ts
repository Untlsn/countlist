import { Handler } from '@netlify/functions';
import { createCorrect, createError, mapForData, totalFail } from '../helpers';
import { createClient } from '../fauna/initFauna';
import { getManyPoints } from '../fauna/getters';
import { Paginate, Point } from '../fauna/types';
import * as _ from 'lodash';

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
    const { listsIDs, token } = JSON.parse(ev.body) as { listsIDs: string[], token: string };
    if (!listsIDs || !token) return errors.dataCorrupted;

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