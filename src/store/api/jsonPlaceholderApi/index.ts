import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IUser, IAlbum } from './types';

const api = createApi({
  reducerPath: 'jsonPlaceholderApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  endpoints: (builder) => ({
    getUsers: builder.query<IUser[], void>({
      query: () => `users`,
    }),
    getAlbums: builder.query<IAlbum[], void>({
      query: () => `albums`,
    }),
  }),
});

export default api;
