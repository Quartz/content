import type * as Types from './types';
import type { MediaPartsFragment } from './MediaParts';
export declare type TopicPartsFragment = ({
    __typename?: 'Topic';
} & Pick<Types.Topic, 'description' | 'id' | 'link' | 'name' | 'shortDescription' | 'slug' | 'topicId'> & {
    featuredImage?: Types.Maybe<({
        __typename?: 'MediaItem';
    } & MediaPartsFragment)>;
});
export declare const TopicPartsFragmentDoc: import("@apollo/client").DocumentNode;
