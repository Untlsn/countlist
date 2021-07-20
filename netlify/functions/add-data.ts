import { Handler } from '@netlify/functions';
import { createError, is, totalFail } from '../helpers';
import { createLists, createPoints, deleteLists, deletePoints } from '../fauna/setters';
import { Paginate } from '../fauna/types';
import { createClient } from '../fauna/initFauna';
import { getListsIDs, getPointsIDs } from '../fauna/getters';
import { AddDataBody } from '../body-template';

const errors = {
  dataCorrupted: createError('Invalid body, data are corrupted'),
  invalidData: createError('Invalid data, check login data'),
  unauthorized: createError('Token is invalid, try login again', 401),
};
const errorCases = {
  SyntaxError: errors.dataCorrupted,
  NotFound: errors.invalidData,
} as Record<string, { statusCode: number, body: string }>;

export const handler: Handler = async (ev) => {
  try {
    if (!ev.body) return errors.dataCorrupted;
    const { created_points, deleted_points, created_lists, deleted_lists } = JSON.parse(ev.body) as Partial<AddDataBody>;
    if (
      !is.arrayOf.strings(deleted_points) || !is.arrayOf.strings(deleted_lists) ||
      !is.arrayOf.listData(created_lists) || !is.arrayOf.pointData(created_points)
    ) return errors.dataCorrupted;


    const token = ev.headers.bearer;
    if (!token) return errors.unauthorized;
    const client = createClient(token);

    const asyncErrors: string[] = [];

    if (deleted_lists.length) client.query<Paginate<string>[]>(getListsIDs(deleted_lists))
      .then(([{ data: ids }]) => client.query(deleteLists(ids)))
      .catch(() => asyncErrors.push('Error: Lists deleted fail'));
    if (deleted_points.length) client.query<Paginate<string>[]>(getPointsIDs(deleted_points))
      .then(([{ data: ids }]) => client.query(deletePoints(ids)))
      .catch(() => asyncErrors.push('Error: Points deleted fail'));
    if (created_lists.length) client.query(createLists(created_lists))
      .catch(() => asyncErrors.push('Error: Lists create fail'));
    if (created_points.length) client.query(createPoints(created_points))
      .catch(() => asyncErrors.push('Error: Lists create fail'));

    return asyncErrors.length ? createError(asyncErrors.join('\n')) : { statusCode: 201 };
  } catch (e) {
    return errorCases[e.name] || totalFail(e);
  }
};