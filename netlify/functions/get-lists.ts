import { Handler } from '@netlify/functions';
import { client } from '../fauna/initFauna';
import { getList, getUser } from '../fauna/getters';
import { List, User } from '../fauna/types';
import * as R from 'ramda';

export const handler: Handler = async (ev) => {
  try {
    const id = String(ev.queryStringParameters?.id);

    const { name: username, lists: listsIDs } = await client.query<User>(
      getUser(id),
    ).then(({ data }) => R.pick(['name', 'lists'], data));

    const lists = await client.query<List[]>(
      listsIDs.map(getList),
    );

    const data = {
      username,
      lists: lists.map(({ data }) => data),
    };


    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (e) {
    return {
      statusCode: 404,
      body: 'User don\'t exist',
    };
  }
};