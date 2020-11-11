import type * as Types from './types';
import type { MediaPartsFragment } from './MediaParts';
export declare type TagPartsFragment = {
    __typename?: 'Tag';
    count?: Types.Maybe<number>;
    description?: Types.Maybe<string>;
    id: string;
    link?: Types.Maybe<string>;
    name?: Types.Maybe<string>;
    shortDescription?: Types.Maybe<string>;
    slug?: Types.Maybe<string>;
    tagId?: Types.Maybe<number>;
    featuredImage?: Types.Maybe<({
        __typename?: 'MediaItem';
    } & MediaPartsFragment)>;
};
export declare const TagPartsFragmentDoc: import("@apollo/client").DocumentNode;
//# sourceMappingURL=TagParts.d.ts.map