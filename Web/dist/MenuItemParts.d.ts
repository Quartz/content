import type * as Types from './types';
import type { ArticleTeaserPartsFragment } from './ArticleTeaserParts';
import type { PromotionPartsFragment } from './PromotionParts';
export declare type MenuItemPartsFragment = {
    __typename?: 'MenuItem';
    id: string;
    connectedNode?: Types.Maybe<{
        __typename?: 'MenuItemToMenuItemLinkableConnectionEdge';
        node?: Types.Maybe<({
            __typename?: 'Post';
        } & ArticleTeaserPartsFragment) | {
            __typename?: 'Page';
        } | {
            __typename?: 'CoAuthor';
        } | {
            __typename?: 'Chapter';
        } | {
            __typename?: 'Tag';
        } | {
            __typename?: 'BlogPost';
        } | {
            __typename?: 'Collection';
        } | {
            __typename?: 'Email';
        } | {
            __typename?: 'EmailList';
        } | {
            __typename?: 'Nug';
        } | {
            __typename?: 'Topic';
        } | {
            __typename?: 'EmailSegment';
        } | ({
            __typename?: 'Promotion';
        } & PromotionPartsFragment) | {
            __typename?: 'Obsession';
        } | {
            __typename?: 'Show';
        } | {
            __typename?: 'Category';
        }>;
    }>;
};
export declare const MenuItemPartsFragmentDoc: import("@apollo/client").DocumentNode;
//# sourceMappingURL=MenuItemParts.d.ts.map