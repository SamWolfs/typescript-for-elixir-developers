import { Media } from '../data';

export const MediaUtils = {
    getLengthInSeconds: (media: Media): number => {
        if ('runtime' in media) {
            return media.runtime * 60;
        } else if ('pages' in media) {
            return media.pages * 120;
        } else {
            return media.duration;
        }
    }
}
