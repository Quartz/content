import type * as Types from './types';
import type { MediaPartsFragment } from './MediaParts';
export declare type BulletinPartsFragment = ({
    __typename?: 'Bulletin';
} & Pick<Types.Bulletin, 'link' | 'title' | 'dateGmt'> & {
    featuredImage?: Types.Maybe<({
        __typename?: 'MediaItem';
    } & MediaPartsFragment)>;
    bulletin?: Types.Maybe<({
        __typename?: 'BulletinData';
    } & {
        sponsor?: Types.Maybe<({
            __typename?: 'CampaignData';
        } & Pick<Types.CampaignData, 'name'>)>;
        campaign?: Types.Maybe<({
            __typename?: 'CampaignData';
        } & Pick<Types.CampaignData, 'id'>)>;
        clientTracking?: Types.Maybe<({
            __typename?: 'ClientTrackingData';
        } & Pick<Types.ClientTrackingData, 'article' | 'elsewhere'>)>;
    })>;
});
export declare const BulletinPartsFragmentDoc: import("@apollo/client").DocumentNode;
//# sourceMappingURL=BulletinParts.d.ts.map