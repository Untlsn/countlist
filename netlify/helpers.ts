import { ListData, PointData } from './fauna/types';
import _ from 'lodash';
import mapPick from '../src/helpers/mapPick';

export const createError = (message: string, statusCode = 400) => ({
  statusCode,
  body: `Error: ${message}`,
});

export const createCorrect = <T>(body: T, statusCode = 200) => ({
  statusCode,
  body: JSON.stringify(body),
});

export const totalFail = (body: any, statusCode = 500) => ({ statusCode, body: JSON.stringify(body) });

export const toList = (id: string, name: string) => ({ id, name });

export const mapForData = <T>(obj: { data: T }[]) => mapPick(obj, 'data');

export const is = {
  listData: (obj: any): obj is ListData => [obj.id, obj.owner, obj.name].every(_.isString),
  pointData: (obj: any): obj is PointData => {
    return (
      [obj.id, obj.owner, obj.name, obj.type].every(_.isString)
      &&
      [obj.count, obj.max].every(_.isNumber)
    );
  },
  arrayOf: {
    strings: (arr: any): arr is string[] => arr?.every(_.isString),
    listData: (arr: any): arr is ListData[] => arr?.every(is.listData),
    pointData: (arr: any): arr is PointData[] => arr?.every(is.pointData),
  },
};



