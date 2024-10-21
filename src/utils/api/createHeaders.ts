type tokenUser = string | null;
type RequestMethod = 'GET' | 'POST' | 'PATCH' | 'DELETE';

export const createHeaders = (
  tokenUser: tokenUser = '',
  method: RequestMethod
) => {
  const headers: HeadersInit = {
    'Content-Type': 'application/json;charset=UTF-8',
  };

  if (
    tokenUser &&
    (method === 'GET' || method === 'DELETE' || method === 'POST')
  ) {
    headers.Authorization = `Bearer ${tokenUser}`;
  }

  return headers;
};
