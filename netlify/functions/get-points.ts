import { Handler } from '@netlify/functions';
import { client } from '../fauna/initFauna';
import { List, Point } from '../fauna/types';
import { getList, getPoint } from '../fauna/getters';

export const handler: Handler = async (ev) => {
  try {
    const id = String(ev.queryStringParameters?.id);

    const pointsIDs = await client.query<List>(
      getList(id),
    ).then(({ data }) => data.points);

    const points = await client.query<Point[]>(
      pointsIDs.map(getPoint),
    );

    const data = points.map(({ data }) => data);


    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (e) {
    return {
      statusCode: 404,
      body: 'List don\'t exist',
    };
  }

};