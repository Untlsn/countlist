import { Handler } from '@netlify/functions';
import { client } from '../fauna/initFauna';
import { getList, getUser } from '../fauna/getters';
import { List, User } from '../fauna/types';
import * as _ from 'lodash';

const notExist = {
  statusCode: 404,
  body: 'User don\'t exist',
};

export const handler: Handler = async (ev) => {
  try {
    const id = ev.body;
    if (!id) return notExist;

    const { name: username, lists: listsIDs } = await client.query<User>(
      getUser(id),
    ).then(({ data }) => _.pick(data, ['name', 'lists']));

    const lists = await client.query<List[]>(
      listsIDs.map(getList),
    );

    const orderedListsIDs = lists.map(({ ref }) => ref.id);
    const listsData = lists.map(({ data: { name, points } }) => ({ name, composition: points }));

    const data = {
      username,
      lists: JSON.stringify(_.zipObject(orderedListsIDs, listsData)),
    };

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (e) {
    return notExist;
  }
};