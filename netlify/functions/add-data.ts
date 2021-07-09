import { Handler } from '@netlify/functions';
import { createError, totalFail } from '../helpers';
import { createLists, createPoints, deleteLists, deletePoints } from '../fauna/setters';
import { AddDataBody, Paginate } from '../fauna/types';
import { createClient } from '../fauna/initFauna';
import { getListsIDs, getPointsIDs } from '../fauna/getters';

const errors = {
  dataCorrupted: createError('Invalid body, data are corrupted'),
  invalidData: createError('Invalid data, check login data'),
};
const errorCases = {
  SyntaxError: errors.dataCorrupted,
  NotFound: errors.invalidData,
} as Record<string, { statusCode: number, body: string }>;

export const handler: Handler = async (ev) => {
  try {
    if (!ev.body) return errors.dataCorrupted;
    const { token, created_points, deleted_points, created_lists, deleted_lists } = JSON.parse(ev.body) as AddDataBody;
    if (
      !token || !created_points || !deleted_points || !created_lists || !deleted_lists
    ) return errors.dataCorrupted;

    const client = createClient(token);

    if (deleted_lists.length) client.query<Paginate<string>[]>(getListsIDs(deleted_lists))
      .then(([{ data: ids }]) => client.query(deleteLists(ids)))
      .catch(() => console.log('Error: Lists deleted fail'));
    if (deleted_points.length) client.query<Paginate<string>[]>(getPointsIDs(deleted_points))
      .then(([{ data: ids }]) => client.query(deletePoints(ids)))
      .catch(() => console.log('Error: Points deleted fail'));
    if (created_lists.length) client.query(createLists(created_lists))
      .catch(() => console.log('Error: Lists create fail'));
    if (created_points.length) client.query(createPoints(created_points))
      .catch(() => console.log('Error: Lists create fail'));

    return { statusCode: 201 };
  } catch (e) {
    return errorCases[e.name] || totalFail(e);
  }
};