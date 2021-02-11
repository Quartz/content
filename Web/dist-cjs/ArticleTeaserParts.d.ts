import type * as Types from './types';
import type { MediaPartsFragment } from './MediaParts';
import type { VideoPartsFragment } from './VideoParts';
export declare type ArticleTeaserPartsFragment = {
    __typename?: 'Post';
    dateGmt?: Types.Maybe<string>;
    id: string;
    kicker?: Types.Maybe<string>;
    link?: Types.Maybe<string>;
    postId: number;
    title?: Types.Maybe<string>;
    bulletin?: Types.Maybe<{
        __typename?: 'BulletinData';
        campaign?: Types.Maybe<{
            __typename?: 'CampaignData';
            id?: Types.Maybe<string>;
            logo?: Types.Maybe<string>;
            name?: Types.Maybe<string>;
            slug?: Types.Maybe<string>;
        }>;
        sponsor?: Types.Maybe<{
            __typename?: 'CampaignData';
            attribution?: Types.Maybe<string>;
            id?: Types.Maybe<string>;
            slug?: Types.Maybe<string>;
            name?: Types.Maybe<string>;
        }>;
        clientTracking?: Types.Maybe<{
            __typename?: 'ClientTrackingData';
            article?: Types.Maybe<Array<Types.Maybe<string>>>;
            elsewhere?: Types.Maybe<Array<Types.Maybe<string>>>;
            logo?: Types.Maybe<string>;
        }>;
    }>;
    editions?: Types.Maybe<{
        __typename?: 'PostToEditionConnection';
        nodes?: Types.Maybe<Array<Types.Maybe<{
            __typename?: 'Edition';
            name?: Types.Maybe<string>;
            slug?: Types.Maybe<string>;
        }>>>;
    }>;
    featuredImage?: Types.Maybe<({
        __typename?: 'MediaItem';
    } & MediaPartsFragment)>;
    guides?: Types.Maybe<{
        __typename?: 'PostToGuideConnection';
        nodes?: Types.Maybe<Array<Types.Maybe<{
            __typename?: 'Guide';
            name?: Types.Maybe<string>;
        }>>>;
    }>;
    serieses?: Types.Maybe<{
        __typename?: 'PostToSeriesConnection';
        nodes?: Types.Maybe<Array<Types.Maybe<{
            __typename?: 'Series';
            name?: Types.Maybe<string>;
        }>>>;
    }>;
    trailerVideo?: Types.Maybe<({
        __typename?: 'VideoData';
    } & VideoPartsFragment)>;
    video?: Types.Maybe<({
        __typename?: 'VideoData';
    } & VideoPartsFragment)>;
};
export declare const ArticleTeaserPartsFragmentDoc: import("@apollo/client").DocumentNode;
//# sourceMappingURL=ArticleTeaserParts.d.ts.map