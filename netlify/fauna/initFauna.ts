import FaunaDB from 'faunadb';

export const client = new FaunaDB.Client({ secret: process.env.FAUNDA_KEY! });

export { default, query as Q } from 'faunadb';