import { Handler } from '@netlify/functions';
import { createError, totalFail } from '../helpers';
import { createUser } from '../fauna/setters';
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
    const { email, name, password } = JSON.parse(ev.body);
    if (
      !_.isString(name) || !_.isString(email) || !_.isString(password)
    ) return errors.dataCorrupted;

    createUser(email, name, password);

    return { statusCode: 201 };
  } catch (e) {
    return errorCases[e.name] || totalFail(e);
  }
};