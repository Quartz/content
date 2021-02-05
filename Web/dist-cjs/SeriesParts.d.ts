import type * as Types from './types';
import type { MediaPartsFragment } from './MediaParts';
export declare type SeriesPartsFragment = {
    __typename?: 'Series';
    colors?: Types.Maybe<Array<Types.Maybe<string>>>;
    count?: Types.Maybe<number>;
    description?: Types.Maybe<string>;
    emailListId?: Types.Maybe<number>;
    ended?: Types.Maybe<boolean>;
    id: string;
    link?: Types.Maybe<string>;
    name?: Types.Maybe<string>;
    postOrder?: Types.Maybe<Array<Types.Maybe<number>>>;
    shortDescription?: Types.Maybe<string>;
    showToc?: Types.Maybe<boolean>;
    slug?: Types.Maybe<string>;
    socialTitle?: Types.Maybe<string>;
    featuredImage?: Types.Maybe<({
        __typename?: 'MediaItem';
    } & MediaPartsFragment)>;
    headerImages?: Types.Maybe<Array<Types.Maybe<{
        __typename?: 'HeaderImage';
        layer?: Types.Maybe<number>;
        size?: Types.Maybe<string>;
        image?: Types.Maybe<({
            __typename?: 'MediaItem';
        } & MediaPartsFragment)>;
    }>>>;
    headerVideos?: Types.Maybe<Array<Types.Maybe<{
        __typename?: 'HeaderVideo';
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
export declare const SeriesPartsFragmentDoc: import("@apollo/client").DocumentNode;
//# sourceMappingURL=SeriesParts.d.ts.map