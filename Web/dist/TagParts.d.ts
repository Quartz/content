import type * as Types from './types';
import type { MediaPartsFragment } from './MediaParts';
export declare type TagPartsFragment = ({
    __typename?: 'Tag';
} & Pick<Types.Tag, 'count' | 'description' | 'id' | 'link' | 'name' | 'shortDescription' | 'slug' | 'tagId'> & {
    featuredImage?: Types.Maybe<({
        __typename?: 'MediaItem';
    } & MediaPartsFragment)>;
});
export declare const TagPartsFragmentDoc: import("@apollo/client").DocumentNode;
