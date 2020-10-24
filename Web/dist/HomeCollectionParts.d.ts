import * as Types from './types';
import { MediaPartsFragment } from './MediaParts';
import { BlockPartsFragment } from './BlockParts';
import { ArticleTeaserPartsFragment } from './ArticleTeaserParts';
import { NugPartsFragment } from './NugParts';
export declare type HomeCollectionPartsFragment = ({
    __typename?: 'Collection';
} & Pick<Types.Collection, 'id' | 'title'> & {
    featuredImage?: Types.Maybe<({
        __typename?: 'MediaItem';
    } & MediaPartsFragment)>;
    blocks?: Types.Maybe<Array<Types.Maybe<({
        __typename?: 'Block';
    } & {
        connections?: Types.Maybe<Array<Types.Maybe<({
            __typename?: 'Post';
        } & ArticleTeaserPartsFragment) | {
            __typename?: 'Page';
        } | ({
            __typename?: 'MediaItem';
        } & MediaPartsFragment) | {
            __typename?: 'Revision';
        } | {
            __typename?: 'Push';
        } | {
            __typename?: 'Email';
        } | {
            __typename?: 'Card';
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
            __typename?: 'Stack';
        } | {
            __typename?: 'Bulletin';
        }>>>;
    } & BlockPartsFragment)>>>;
});
export declare const HomeCollectionPartsFragmentDoc: import("@apollo/client").DocumentNode;
