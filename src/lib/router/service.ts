import { paths } from './paths';

export default {
  goToAlbum(id: number): string {
    return paths.ALBUM.replace(':albumId', `${id}`);
  },
};
