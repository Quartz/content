import type * as Types from './types';
import type { PromotionPartsFragment } from './PromotionParts';
import * as Apollo from '@apollo/client';
export declare type PromotionsByMenuQueryVariables = Types.Exact<{
    menuLocation: Types.MenuLocationEnum;
}>;
export declare type PromotionsByMenuQuery = {
    __typename?: 'RootQuery';
    menuItems?: Types.Maybe<{
        __typename?: 'RootQueryToMenuItemConnection';
        edges?: Types.Maybe<Array<Types.Maybe<{
            __typename?: 'RootQueryToMenuItemConnectionEdge';
            node?: Types.Maybe<{
                __typename?: 'MenuItem';
                connectedObject?: Types.Maybe<{
                    __typename?: 'Post';
                } | {
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
            }>;
        }>>>;
    }>;
};
export declare const PromotionsByMenuDocument: Apollo.DocumentNode;
/**
 * __usePromotionsByMenuQuery__
 *
 * To run a query within a React component, call `usePromotionsByMenuQuery` and pass it any options that fit your needs.
 * When your component renders, `usePromotionsByMenuQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePromotionsByMenuQuery({
 *   variables: {
 *      menuLocation: // value for 'menuLocation'
 *   },
 * });
 */
export declare function usePromotionsByMenuQuery(baseOptions: Apollo.QueryHookOptions<PromotionsByMenuQuery, PromotionsByMenuQueryVariables>): Apollo.QueryResult<PromotionsByMenuQuery, Types.Exact<{
    menuLocation: Types.MenuLocationEnum;
}>>;
export declare function usePromotionsByMenuLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PromotionsByMenuQuery, PromotionsByMenuQueryVariables>): Apollo.QueryTuple<PromotionsByMenuQuery, Types.Exact<{
    menuLocation: Types.MenuLocationEnum;
}>>;
export declare type PromotionsByMenuQueryHookResult = ReturnType<typeof usePromotionsByMenuQuery>;
export declare type PromotionsByMenuLazyQueryHookResult = ReturnType<typeof usePromotionsByMenuLazyQuery>;
export declare type PromotionsByMenuQueryResult = Apollo.QueryResult<PromotionsByMenuQuery, PromotionsByMenuQueryVariables>;
//# sourceMappingURL=PromotionsByMenu.d.ts.map