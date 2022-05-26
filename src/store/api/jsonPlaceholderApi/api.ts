import api from './index';

export const getAlbums = () => api.useGetAlbumsQuery();

export const getUserById = (id: number) =>
  api.useGetAlbumsQuery(undefined, {
    selectFromResult: ({ data }) => (data ? data.filter((user) => user.id === id) : []),
  });
