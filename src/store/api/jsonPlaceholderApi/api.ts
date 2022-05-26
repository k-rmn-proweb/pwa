import api from './index';

export const getAlbums = () => api.useGetAlbumsQuery();

export const getPhotos = (albumId: number) => api.useGetPhotosQuery(albumId);

export const getUserById = (id: number) => {
  const result = api.useGetUsersQuery(undefined, {
    selectFromResult: ({ data }) => (data ? data.filter((user) => user.id === id) : []),
  });
  const data = result[0] ?? undefined;

  return { ...result, data };
};
