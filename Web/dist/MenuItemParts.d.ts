import type * as Types from './types';
import type { ArticleTeaserPartsFragment } from './ArticleTeaserParts';
import type { PromotionPartsFragment } from './PromotionParts';
export declare type MenuItemPartsFragment = {
    __typename?: 'MenuItem';
    id: string;
    connectedObject?: Types.Maybe<({
        __typename?: 'Post';
    } & ArticleTeaserPartsFragment) | {
        __typename?: 'Page';
    } | {
        __typename?: 'Email';
    } | {
        __typename?: 'Chapter';
    } | ({
        __typename?: 'Promotion';
    } & PromotionPartsFragment) | {
        __typename?: 'BlogPost';
    } | {
        __typename?: 'Nug';
    } | {
        __typename?: 'Collection';
    } | {
        __typename?: 'Category';
    } | {
        __typename?: 'Tag';
    } | {
        __typename?: 'EmailList';
    } | {
        __typename?: 'Obsession';
    } | {
        __typename?: 'Topic';
    } | {
        __typename?: 'Show';
    } | {
        __typename?: 'EmailSegments';
    } | {
        __typename?: 'CoAuthor';
    } | {
        __typename?: 'MenuItem';
    }>;
};
export declare const MenuItemPartsFragmentDoc: import("@apollo/client").DocumentNode;
//# sourceMappingURL=MenuItemParts.d.ts.map