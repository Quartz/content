import type * as Types from './types';
import type { MenuItemPartsFragment } from './MenuItemParts';
import * as Apollo from '@apollo/client';
export declare type MenuItemsQueryVariables = Types.Exact<{
    perPage: Types.Scalars['Int'];
    slug: Types.MenuLocationEnum;
}>;
export declare type MenuItemsQuery = {
    __typename?: 'RootQuery';
    menuItems?: Types.Maybe<{
        __typename?: 'RootQueryToMenuItemConnection';
        nodes?: Types.Maybe<Array<Types.Maybe<({
            __typename?: 'MenuItem';
        } & MenuItemPartsFragment)>>>;
    }>;
};
export declare const MenuItemsDocument: Apollo.DocumentNode;
/**
 * __useMenuItemsQuery__
 *
 * To run a query within a React component, call `useMenuItemsQuery` and pass it any options that fit your needs.
 * When your component renders, `useMenuItemsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMenuItemsQuery({
 *   variables: {
 *      perPage: // value for 'perPage'
 *      slug: // value for 'slug'
 *   },
 * });
 */
export declare function useMenuItemsQuery(baseOptions: Apollo.QueryHookOptions<MenuItemsQuery, MenuItemsQueryVariables>): Apollo.QueryResult<MenuItemsQuery, Types.Exact<{
    perPage: number;
    slug: Types.MenuLocationEnum;
}>>;
export declare function useMenuItemsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MenuItemsQuery, MenuItemsQueryVariables>): Apollo.QueryTuple<MenuItemsQuery, Types.Exact<{
    perPage: number;
    slug: Types.MenuLocationEnum;
}>>;
export declare type MenuItemsQueryHookResult = ReturnType<typeof useMenuItemsQuery>;
export declare type MenuItemsLazyQueryHookResult = ReturnType<typeof useMenuItemsLazyQuery>;
export declare type MenuItemsQueryResult = Apollo.QueryResult<MenuItemsQuery, MenuItemsQueryVariables>;
//# sourceMappingURL=MenuItems.d.ts.map