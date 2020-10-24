import * as Types from './types';
import { MediaPartsFragment } from './MediaParts';
export declare type GuidePartsFragment = ({
    __typename?: 'Guide';
} & Pick<Types.Guide, 'id' | 'guideId' | 'link' | 'count' | 'description' | 'shortDescription' | 'name' | 'slug' | 'socialTitle' | 'colors'> & {
    featuredImage?: Types.Maybe<({
        __typename?: 'MediaItem';
    } & MediaPartsFragment)>;
    socialImage?: Types.Maybe<({
        __typename?: 'MediaItem';
    } & MediaPartsFragment)>;
    headerImages?: Types.Maybe<Array<Types.Maybe<({
        __typename?: 'HeaderImages';
    } & Pick<Types.HeaderImages, 'layer' | 'size'> & {
        image?: Types.Maybe<({
            __typename?: 'MediaItem';
        } & MediaPartsFragment)>;
    })>>>;
});
export declare const GuidePartsFragmentDoc: import("@apollo/client").DocumentNode;
