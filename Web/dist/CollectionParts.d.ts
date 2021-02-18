import type * as Types from './types';
import type { MediaPartsFragment } from './MediaParts';
import type { BlockPartsFragment } from './BlockParts';
import type { ArticleTeaserPartsFragment } from './ArticleTeaserParts';
import type { NugPartsFragment } from './NugParts';
export declare type CollectionPartsFragment = {
    __typename?: 'Collection';
    id: string;
    collectionId: number;
    title?: Types.Maybe<string>;
    dateGmt?: Types.Maybe<string>;
    modifiedGmt?: Types.Maybe<string>;
    slug?: Types.Maybe<string>;
    featuredImage?: Types.Maybe<({
        __typename?: 'MediaItem';
    } & MediaPartsFragment)>;
    blocks?: Types.Maybe<Array<Types.Maybe<({
        __typename?: 'Block';
        connections?: Types.Maybe<Array<Types.Maybe<({
            __typename?: 'Post';
        } & ArticleTeaserPartsFragment) | {
            __typename?: 'Page';
        } | ({
            __typename?: 'MediaItem';
        } & MediaPartsFragment) | {
            __typename?: 'Email';
        } | {
            __typename?: 'Chapter';
        } | {
            __typename?: 'Promotion';
        } | {
            __typename?: 'BlogPost';
        } | ({
            __typename?: 'Nug';
        } & NugPartsFragment) | {
            __typename?: 'Collection';
        } | {
            __typename?: 'Bulletin';
        }>>>;
    } & BlockPartsFragment)>>>;
};
export declare const CollectionPartsFragmentDoc: import("@apollo/client").DocumentNode;
//# sourceMappingURL=CollectionParts.d.ts.map