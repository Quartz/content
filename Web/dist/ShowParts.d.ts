import * as Types from './types';
import { MediaPartsFragment } from './MediaParts';
export declare type ShowPartsFragment = ({
    __typename?: 'Show';
} & Pick<Types.Show, 'colors' | 'count' | 'description' | 'id' | 'link' | 'name' | 'postOrder' | 'shortDescription' | 'slug'> & {
    featuredImage?: Types.Maybe<({
        __typename?: 'MediaItem';
    } & MediaPartsFragment)>;
    headerImages?: Types.Maybe<Array<Types.Maybe<({
        __typename?: 'ShowHeaderImages';
    } & Pick<Types.ShowHeaderImages, 'layer' | 'size'> & {
        image?: Types.Maybe<({
            __typename?: 'MediaItem';
        } & MediaPartsFragment)>;
    })>>>;
    headerVideos?: Types.Maybe<Array<Types.Maybe<({
        __typename?: 'ShowHeaderVideos';
    } & Pick<Types.ShowHeaderVideos, 'size'> & {
        mp4?: Types.Maybe<({
            __typename?: 'MediaItem';
        } & MediaPartsFragment)>;
        webm?: Types.Maybe<({
            __typename?: 'MediaItem';
        } & MediaPartsFragment)>;
        poster?: Types.Maybe<({
            __typename?: 'MediaItem';
        } & MediaPartsFragment)>;
    })>>>;
    socialImage?: Types.Maybe<({
        __typename?: 'MediaItem';
    } & MediaPartsFragment)>;
});
export declare const ShowPartsFragmentDoc: import("@apollo/client").DocumentNode;
