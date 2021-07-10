import { Handler } from '@netlify/functions';
import { client } from '../fauna/initFauna';
import { getIDByRef, login } from '../fauna/getters';
import { Login, Paginate } from '../fauna/types';
import { createCorrect, createError, totalFail } from '../helpers';
import * as _ from 'lodash';

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
    const { term, password } = JSON.parse(ev.body);
    if (!_.isString(term) || !_.isString(password)) return errors.dataCorrupted;

    const isEmail = /(.*)@(.*)\.(.*)/.test(term);

    const { secret, instance } = await client.query<Login>(
      isEmail ? login.email(term, password) : login.name(term, password),
    );
    const { data: [ id ] } = await client.query<Paginate<string>>(
      getIDByRef(instance.id),
    );

    return createCorrect({ secret, id });
  } catch (e) {
    return errorCases[e.name] || totalFail(e);
  }
};