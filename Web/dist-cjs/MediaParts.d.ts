import type * as Types from './types';
export declare type MediaPartsFragment = {
    __typename?: 'MediaItem';
    altText?: Types.Maybe<string>;
    caption?: Types.Maybe<string>;
    credit?: Types.Maybe<string>;
    id: string;
    sourceUrl?: Types.Maybe<string>;
    title?: Types.Maybe<string>;
    mediaDetails?: Types.Maybe<{
        __typename?: 'MediaDetails';
        height?: Types.Maybe<number>;
        width?: Types.Maybe<number>;
    }>;
};
export declare const MediaPartsFragmentDoc: import("@apollo/client").DocumentNode;
//# sourceMappingURL=MediaParts.d.ts.map