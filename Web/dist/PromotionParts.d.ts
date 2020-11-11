import type * as Types from './types';
import type { MediaPartsFragment } from './MediaParts';
export declare type PromotionPartsFragment = {
    __typename?: 'Promotion';
    content?: Types.Maybe<string>;
    dateGmt?: Types.Maybe<string>;
    destination?: Types.Maybe<string>;
    id: string;
    link?: Types.Maybe<string>;
    modified?: Types.Maybe<string>;
    title?: Types.Maybe<string>;
    description?: Types.Maybe<string>;
    featuredImage?: Types.Maybe<({
        __typename?: 'MediaItem';
    } & MediaPartsFragment)>;
};
export declare const PromotionPartsFragmentDoc: import("@apollo/client").DocumentNode;
//# sourceMappingURL=PromotionParts.d.ts.map