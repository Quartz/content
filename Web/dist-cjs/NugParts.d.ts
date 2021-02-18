import type * as Types from './types';
import type { BlockPartsFragment } from './BlockParts';
import type { ArticleTeaserPartsFragment } from './ArticleTeaserParts';
import type { MediaPartsFragment } from './MediaParts';
export declare type NugPartsFragment = {
    __typename?: 'Nug';
    id: string;
    dateGmt?: Types.Maybe<string>;
    link?: Types.Maybe<string>;
    modifiedGmt?: Types.Maybe<string>;
    nugId: number;
    slug?: Types.Maybe<string>;
    title?: Types.Maybe<string>;
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
        } | {
            __typename?: 'Nug';
        } | {
            __typename?: 'Collection';
        } | {
            __typename?: 'Bulletin';
        }>>>;
    } & BlockPartsFragment)>>>;
    emailLists?: Types.Maybe<{
        __typename?: 'NugToEmailListConnection';
        nodes?: Types.Maybe<Array<Types.Maybe<{
            __typename?: 'EmailList';
            emailListId?: Types.Maybe<number>;
            slug?: Types.Maybe<string>;
            listId?: Types.Maybe<number>;
            name?: Types.Maybe<string>;
        }>>>;
    }>;
    tags?: Types.Maybe<{
        __typename?: 'NugToTagConnection';
        nodes?: Types.Maybe<Array<Types.Maybe<{
            __typename?: 'Tag';
            id: string;
            name?: Types.Maybe<string>;
            slug?: Types.Maybe<string>;
        }>>>;
    }>;
    topics?: Types.Maybe<{
        __typename?: 'NugToTopicConnection';
        nodes?: Types.Maybe<Array<Types.Maybe<{
            __typename?: 'Topic';
            id: string;
            name?: Types.Maybe<string>;
            slug?: Types.Maybe<string>;
        }>>>;
    }>;
};
export declare const NugPartsFragmentDoc: import("@apollo/client").DocumentNode;
//# sourceMappingURL=NugParts.d.ts.map