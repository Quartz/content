import type * as Types from './types';
import type { MediaPartsFragment } from './MediaParts';
export declare type GuidePartsFragment = {
    __typename?: 'Guide';
    id: string;
    guideId?: Types.Maybe<number>;
    hasEssentials?: Types.Maybe<boolean>;
    link?: Types.Maybe<string>;
    count?: Types.Maybe<number>;
    description?: Types.Maybe<string>;
    shortDescription?: Types.Maybe<string>;
    name?: Types.Maybe<string>;
    slug?: Types.Maybe<string>;
    socialTitle?: Types.Maybe<string>;
    colors?: Types.Maybe<Array<Types.Maybe<string>>>;
    featuredImage?: Types.Maybe<({
        __typename?: 'MediaItem';
    } & MediaPartsFragment)>;
    socialImage?: Types.Maybe<({
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
};
export declare const GuidePartsFragmentDoc: import("@apollo/client").DocumentNode;
//# sourceMappingURL=GuideParts.d.ts.map