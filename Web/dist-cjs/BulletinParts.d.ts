import type * as Types from './types';
import type { MediaPartsFragment } from './MediaParts';
export declare type BulletinPartsFragment = {
    __typename?: 'Bulletin';
    link?: Types.Maybe<string>;
    title?: Types.Maybe<string>;
    dateGmt?: Types.Maybe<string>;
    featuredImage?: Types.Maybe<({
        __typename?: 'MediaItem';
    } & MediaPartsFragment)>;
    bulletin?: Types.Maybe<{
        __typename?: 'BulletinData';
        sponsor?: Types.Maybe<{
            __typename?: 'CampaignData';
            name?: Types.Maybe<string>;
        }>;
        campaign?: Types.Maybe<{
            __typename?: 'CampaignData';
            id?: Types.Maybe<string>;
        }>;
        clientTracking?: Types.Maybe<{
            __typename?: 'ClientTrackingData';
            article?: Types.Maybe<Array<Types.Maybe<string>>>;
            elsewhere?: Types.Maybe<Array<Types.Maybe<string>>>;
        }>;
    }>;
};
export declare const BulletinPartsFragmentDoc: import("@apollo/client").DocumentNode;
//# sourceMappingURL=BulletinParts.d.ts.map