import { paths } from './paths';

export default {
  goToMain(): string {
    return paths.MAIN;
  },
  goToAlbum(id: number): string {
    return paths.ALBUM.replace(':albumId', `${id}`);
  },
};
