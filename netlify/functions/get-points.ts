import { Handler } from '@netlify/functions';
import { client } from '../fauna/initFauna';
import { Point } from '../fauna/types';
import { getPoints } from '../fauna/getters';
import * as R from 'ramda';

const notExist = {
  statusCode: 404,
  body: 'List don\'t exist',
};

export const handler: Handler = async (ev) => {
  try {
    if (!ev.body) return notExist;
    const ids = JSON.parse(ev.body) as string[];

    const points = await client.query<Point[]>(getPoints(ids));

    const orderedIDs = points.map(({ ref }) => ref.id);
    const data = points.map(({ data }) => data);

    return {
      statusCode: 200,
      body: JSON.stringify(R.zipObj(orderedIDs, data)),
    };
  } catch (e) {
    return notExist;
  }

};