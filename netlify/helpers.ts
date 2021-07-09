export const createError = (message: string, statusCode = 400) => ({
  statusCode,
  body: `Error: ${message}`,
});

export const createCorrect = (body: any, statusCode = 200) => ({
  statusCode,
  body: JSON.stringify(body),
});

export const totalFail = (body: any, statusCode = 500) => ({ statusCode, body: JSON.stringify(body) });

export const toList = (id: string, name: string) => ({ id, name });

export const mapForData = <T>(obj: { data: T }[]) => obj.map(it => it.data);