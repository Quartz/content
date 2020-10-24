import type * as Types from './types';
export declare type VideoPartsFragment = ({
    __typename?: 'VideoData';
} & Pick<Types.VideoData, 'id' | 'duration' | 'episode' | 'playlistId' | 'season' | 'type'>);
export declare const VideoPartsFragmentDoc: import("@apollo/client").DocumentNode;
