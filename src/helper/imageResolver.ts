import { IVolumeInfo } from '../types/IBooksResponse';

export const imageResolver = (volumeInfo: IVolumeInfo) => {
  if (volumeInfo.imageLinks?.small) {
    return volumeInfo.imageLinks.small;
  }

  if (volumeInfo?.imageLinks?.smallThumbnail) {
    return volumeInfo.imageLinks.smallThumbnail;
  }
  if (volumeInfo?.imageLinks?.thumbnail) {
    return volumeInfo.imageLinks.thumbnail;
  }
  return '';
};
