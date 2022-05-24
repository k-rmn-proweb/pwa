const ALBUMS = 'albums';

export const paths = {
  MAIN: '/',
  ALBUMS: `/${ALBUMS}/`,
  ALBUM: `/${ALBUMS}/:albumId/`,
  NOTFOUND: `*`,
};
