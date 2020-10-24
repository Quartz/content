import type * as Types from './types';
import type { MediaPartsFragment } from './MediaParts';
export declare type PromotionPartsFragment = ({
    __typename?: 'Promotion';
} & Pick<Types.Promotion, 'content' | 'dateGmt' | 'destination' | 'id' | 'link' | 'modified' | 'title'> & {
    description: Types.Promotion['excerpt'];
} & {
    featuredImage?: Types.Maybe<({
        __typename?: 'MediaItem';
    } & MediaPartsFragment)>;
});
export declare const PromotionPartsFragmentDoc: import("@apollo/client").DocumentNode;
