/* eslint-disable @typescript-eslint/no-explicit-any */

import { createHeaders } from './createHeaders';
import { handleError } from './handleError';
import { handleResponse } from './handleResponse';

type RequestMethod = 'GET' | 'POST' | 'PATCH' | 'DELETE';

async function request<T>(
  url: string,
  data: any = null,
  tokenUser: string | null = '',
  method: RequestMethod = 'GET'
): Promise<T> {
  const options: RequestInit = {
    method,
    headers: createHeaders(tokenUser, method),
  };

  if (data) {
    options.body = JSON.stringify(data);
  }

  return fetch(process.env.NEXT_PUBLIC_SERVER_URL + url, options)
    .then(async (response) => {
      if (!response.ok) {
        handleResponse(response);
      }

      return url === '/contact' ? response : response.json();
    })
    .catch(handleError);
}

export const apiClient = {
  getAllYachts: <T>(url: string) => request<T>(url),
};
