import * as Types from './types';
export declare type MediaPartsFragment = ({
    __typename?: 'MediaItem';
} & Pick<Types.MediaItem, 'altText' | 'caption' | 'credit' | 'id' | 'sourceUrl' | 'title'> & {
    mediaDetails?: Types.Maybe<({
        __typename?: 'MediaDetails';
    } & Pick<Types.MediaDetails, 'height' | 'width'>)>;
});
export declare const MediaPartsFragmentDoc: import("@apollo/client").DocumentNode;
