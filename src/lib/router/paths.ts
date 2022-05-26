const PWA = '/pwa';
const ALBUMS = '/albums';

export const paths = {
  MAIN: PWA,
  ALBUMS: `${PWA}${ALBUMS}`,
  ALBUM: `${PWA}${ALBUMS}/:albumId`,
  NOTFOUND: `*`,
};
