import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { SerializedError } from '@reduxjs/toolkit';
import api from './index';

export const parseError = (error: FetchBaseQueryError | SerializedError | undefined) => {
  if (!error) {
    return '';
  }

  if ('status' in error) {
    return 'error' in error ? error.error : JSON.stringify(error.data);
  }

  return error?.message?.toString() || '';
};

export const getAlbums = () => api.useGetAlbumsQuery();

export const getPhotos = (albumId: number) => api.useGetPhotosQuery(albumId);

export const getAlbumById = (id: number) => {
  const result = api.useGetAlbumsQuery(undefined, {
    selectFromResult: ({ data }) => (data ? data.filter((album) => album.id === id) : []),
  });
  const data = result[0] ?? undefined;

  return { ...result, data };
};

export const getUserById = (id: number) => {
  const result = api.useGetUsersQuery(undefined, {
    selectFromResult: ({ data }) => (data ? data.filter((user) => user.id === id) : []),
  });
  const data = result[0] ?? undefined;

  return { ...result, data };
};
