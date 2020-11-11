import type * as Types from './types';
import type { MediaPartsFragment } from './MediaParts';
export declare type ObsessionPartsFragment = {
    __typename?: 'Obsession';
    id: string;
    description?: Types.Maybe<string>;
    link?: Types.Maybe<string>;
    name?: Types.Maybe<string>;
    shortDescription?: Types.Maybe<string>;
    slug?: Types.Maybe<string>;
    subtitle?: Types.Maybe<string>;
    featuredImage?: Types.Maybe<({
        __typename?: 'MediaItem';
    } & MediaPartsFragment)>;
    sponsor?: Types.Maybe<{
        __typename?: 'SponsorData';
        name?: Types.Maybe<string>;
        campaign?: Types.Maybe<{
            __typename?: 'CampaignData';
            id?: Types.Maybe<string>;
            logo?: Types.Maybe<string>;
            logoLink?: Types.Maybe<string>;
        }>;
    }>;
};
export declare const ObsessionPartsFragmentDoc: import("@apollo/client").DocumentNode;
//# sourceMappingURL=ObsessionParts.d.ts.map