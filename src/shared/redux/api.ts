import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URL } from '@/shared/constants';

const baseQuery = fetchBaseQuery({
  baseUrl: API_URL,
  credentials: 'include',
  prepareHeaders(headers) {
    const token = localStorage.getItem('token');
    if (!token) {
      headers.delete('Authorization');
    } else {
      headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

const api = createApi({
  reducerPath: 'api',
  baseQuery,
  endpoints: () => ({}),
  tagTypes: ['Auth'],
});

export default api;
