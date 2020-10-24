import type * as Types from './types';
import type { MediaPartsFragment } from './MediaParts';
export declare type ObsessionPartsFragment = ({
    __typename?: 'Obsession';
} & Pick<Types.Obsession, 'id' | 'description' | 'link' | 'name' | 'shortDescription' | 'slug' | 'subtitle'> & {
    featuredImage?: Types.Maybe<({
        __typename?: 'MediaItem';
    } & MediaPartsFragment)>;
    sponsor?: Types.Maybe<({
        __typename?: 'SponsorData';
    } & Pick<Types.SponsorData, 'name'> & {
        campaign?: Types.Maybe<({
            __typename?: 'CampaignData';
        } & Pick<Types.CampaignData, 'id' | 'logo' | 'logoLink'>)>;
    })>;
});
export declare const ObsessionPartsFragmentDoc: import("@apollo/client").DocumentNode;
//# sourceMappingURL=ObsessionParts.d.ts.map