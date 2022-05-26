const MAIN = 'pwa';
const ALBUMS = `${MAIN}/albums`;

export const paths = {
  MAIN,
  ALBUMS,
  ALBUM: `${ALBUMS}/:albumId`,
  NOTFOUND: `*`,
};
