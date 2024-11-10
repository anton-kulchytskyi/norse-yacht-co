/* eslint-disable @typescript-eslint/no-explicit-any */
import { Yacht } from '@/interfaces/yacht.interface';
import { CustomError } from '../error/CustomError';
import { createHeaders } from './createHeaders';

type RequestMethod = 'GET' | 'POST' | 'PATCH' | 'DELETE';

async function request<T>(
  url: string,
  data: any = null,
  tokenUser: string | null = '',
  method: RequestMethod = 'GET'
): Promise<T> {
  try {
    const options: RequestInit = {
      method,
      headers: createHeaders(tokenUser, method),
      next: { revalidate: 10800 },
    };

    if (data) {
      options.body = JSON.stringify(data);
    }

    const responseBody = await fetch(
      process.env.NEXT_PUBLIC_SERVER_URL + url,
      options
    );

    if (!responseBody.ok) {
      throw new CustomError(responseBody.statusText, responseBody.status);
    }

    return url === '/contact' ? responseBody : responseBody.json();
  } catch (error) {
    // eslint-disable-next-line
    console.error('Помилка під час виконання запиту:', error);
    throw error;
  }
}

export const apiClient = {
  getAllYachts: async (url: string) => {
    const data = await request<{ yachts: Yacht[] }>(url);
    return data.yachts;
  },
  getFeaturedYachts: async (url: string) => {
    const data = await request<{ yachts: Yacht[] }>(url);
    return data.yachts.filter(
      (yacht) => yacht.yacht_top || yacht.yacht_hot_price
    );
  },
  getYachtById: <T>(url: string) => request<T>(url),
  sendMessageFromContactForm: <T>(url: string, data: any) =>
    request<T>(url, data, '', 'POST'),
};
