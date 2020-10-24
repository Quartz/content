import * as Types from './types';
import { MediaPartsFragment } from './MediaParts';
import { VideoPartsFragment } from './VideoParts';
export declare type ArticleTeaserPartsFragment = ({
    __typename?: 'Post';
} & Pick<Types.Post, 'dateGmt' | 'id' | 'kicker' | 'link' | 'postId' | 'title'> & {
    bulletin?: Types.Maybe<({
        __typename?: 'BulletinData';
    } & {
        campaign?: Types.Maybe<({
            __typename?: 'CampaignData';
        } & Pick<Types.CampaignData, 'id' | 'logo' | 'name' | 'slug'>)>;
        sponsor?: Types.Maybe<({
            __typename?: 'CampaignData';
        } & Pick<Types.CampaignData, 'attribution' | 'id' | 'slug' | 'name'>)>;
        clientTracking?: Types.Maybe<({
            __typename?: 'ClientTrackingData';
        } & Pick<Types.ClientTrackingData, 'article' | 'elsewhere' | 'logo'>)>;
    })>;
    editions?: Types.Maybe<({
        __typename?: 'PostToEditionConnection';
    } & {
        nodes?: Types.Maybe<Array<Types.Maybe<({
            __typename?: 'Edition';
        } & Pick<Types.Edition, 'name' | 'slug'>)>>>;
    })>;
    featuredImage?: Types.Maybe<({
        __typename?: 'MediaItem';
    } & MediaPartsFragment)>;
    trailerVideo?: Types.Maybe<({
        __typename?: 'VideoData';
    } & VideoPartsFragment)>;
    video?: Types.Maybe<({
        __typename?: 'VideoData';
    } & VideoPartsFragment)>;
});
export declare const ArticleTeaserPartsFragmentDoc: import("@apollo/client").DocumentNode;
