import type * as Types from './types';
import type { MediaPartsFragment } from './MediaParts';
export declare type TopicPartsFragment = {
    __typename?: 'Topic';
    description?: Types.Maybe<string>;
    id: string;
    link?: Types.Maybe<string>;
    name?: Types.Maybe<string>;
    shortDescription?: Types.Maybe<string>;
    slug?: Types.Maybe<string>;
    topicId?: Types.Maybe<number>;
    featuredImage?: Types.Maybe<({
        __typename?: 'MediaItem';
    } & MediaPartsFragment)>;
};
export declare const TopicPartsFragmentDoc: import("@apollo/client").DocumentNode;
//# sourceMappingURL=TopicParts.d.ts.map