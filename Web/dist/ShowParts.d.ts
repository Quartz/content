import type * as Types from './types';
import type { MediaPartsFragment } from './MediaParts';
export declare type ShowPartsFragment = {
    __typename?: 'Show';
    colors?: Types.Maybe<Array<Types.Maybe<string>>>;
    count?: Types.Maybe<number>;
    description?: Types.Maybe<string>;
    id: string;
    link?: Types.Maybe<string>;
    name?: Types.Maybe<string>;
    postOrder?: Types.Maybe<Array<Types.Maybe<number>>>;
    shortDescription?: Types.Maybe<string>;
    slug?: Types.Maybe<string>;
    featuredImage?: Types.Maybe<({
        __typename?: 'MediaItem';
    } & MediaPartsFragment)>;
    headerImages?: Types.Maybe<Array<Types.Maybe<{
        __typename?: 'ShowHeaderImages';
        layer?: Types.Maybe<number>;
        size?: Types.Maybe<string>;
        image?: Types.Maybe<({
            __typename?: 'MediaItem';
        } & MediaPartsFragment)>;
    }>>>;
    headerVideos?: Types.Maybe<Array<Types.Maybe<{
        __typename?: 'ShowHeaderVideos';
        size?: Types.Maybe<string>;
        mp4?: Types.Maybe<({
            __typename?: 'MediaItem';
        } & MediaPartsFragment)>;
        webm?: Types.Maybe<({
            __typename?: 'MediaItem';
        } & MediaPartsFragment)>;
        poster?: Types.Maybe<({
            __typename?: 'MediaItem';
        } & MediaPartsFragment)>;
    }>>>;
    socialImage?: Types.Maybe<({
        __typename?: 'MediaItem';
    } & MediaPartsFragment)>;
};
export declare const ShowPartsFragmentDoc: import("@apollo/client").DocumentNode;
//# sourceMappingURL=ShowParts.d.ts.map