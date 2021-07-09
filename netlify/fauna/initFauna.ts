import FaunaDB from 'faunadb';

export const createClient = (secret: string) => new FaunaDB.Client({ secret });
export const client = createClient(process.env.FAUNDA_KEY!);

export { default, query as q } from 'faunadb';