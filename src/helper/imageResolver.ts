import { IVolumeInfo } from "../types/IBooksRespons"

export const getImage = (volumeInfo: IVolumeInfo) => {
    if (volumeInfo?.imageLinks?.smallThumbnail) {
        // console.log(volumeInfo.imageLinks.smallThumbnail);
        return volumeInfo.imageLinks.smallThumbnail
    }
    if (volumeInfo?.imageLinks?.thumbnail) {
        return volumeInfo.imageLinks.thumbnail
    }
    return ''
}