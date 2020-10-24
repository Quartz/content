import * as Types from './types';
import { BlockPartsFragment } from './BlockParts';
import { ArticleTeaserPartsFragment } from './ArticleTeaserParts';
import { MediaPartsFragment } from './MediaParts';
export declare type NugPartsFragment = ({
    __typename?: 'Nug';
} & Pick<Types.Nug, 'id' | 'dateGmt' | 'link' | 'modifiedGmt' | 'nugId' | 'slug' | 'title'> & {
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
        } | {
            __typename?: 'Nug';
        } | {
            __typename?: 'Collection';
        } | {
            __typename?: 'Stack';
        } | {
            __typename?: 'Bulletin';
        }>>>;
    } & BlockPartsFragment)>>>;
    emailLists?: Types.Maybe<({
        __typename?: 'NugToEmailListConnection';
    } & {
        nodes?: Types.Maybe<Array<Types.Maybe<({
            __typename?: 'EmailList';
        } & Pick<Types.EmailList, 'emailListId' | 'listId' | 'name'>)>>>;
    })>;
});
export declare const NugPartsFragmentDoc: import("@apollo/client").DocumentNode;
