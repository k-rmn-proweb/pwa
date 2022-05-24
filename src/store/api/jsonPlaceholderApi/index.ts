import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IUser } from './types';

const api = createApi({
  reducerPath: 'jsonPlaceholderApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  endpoints: (builder) => ({
    getUsers: builder.query<IUser, undefined>({
      query: () => `users`,
    }),
  }),
});

const { useGetUsersQuery } = api;

export default {
  useGetUsersQuery,
  api,
};
