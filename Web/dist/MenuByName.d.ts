import type * as Types from './types';
import type { MenuItemPartsFragment } from './MenuItemParts';
import * as Apollo from '@apollo/client';
export declare type MenuByNameQueryVariables = Types.Exact<{
    id: Types.Scalars['ID'];
    first?: Types.Maybe<Types.Scalars['Int']>;
}>;
export declare type MenuByNameQuery = {
    __typename?: 'RootQuery';
    menu?: Types.Maybe<{
        __typename?: 'Menu';
        id: string;
        menuItems?: Types.Maybe<{
            __typename?: 'MenuToMenuItemConnection';
            nodes?: Types.Maybe<Array<Types.Maybe<({
                __typename?: 'MenuItem';
            } & MenuItemPartsFragment)>>>;
        }>;
    }>;
};
export declare const MenuByNameDocument: Apollo.DocumentNode;
/**
 * __useMenuByNameQuery__
 *
 * To run a query within a React component, call `useMenuByNameQuery` and pass it any options that fit your needs.
 * When your component renders, `useMenuByNameQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMenuByNameQuery({
 *   variables: {
 *      id: // value for 'id'
 *      first: // value for 'first'
 *   },
 * });
 */
export declare function useMenuByNameQuery(baseOptions: Apollo.QueryHookOptions<MenuByNameQuery, MenuByNameQueryVariables>): Apollo.QueryResult<MenuByNameQuery, Types.Exact<{
    id: string;
    first?: Types.Maybe<number> | undefined;
}>>;
export declare function useMenuByNameLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MenuByNameQuery, MenuByNameQueryVariables>): Apollo.QueryTuple<MenuByNameQuery, Types.Exact<{
    id: string;
    first?: Types.Maybe<number> | undefined;
}>>;
export declare type MenuByNameQueryHookResult = ReturnType<typeof useMenuByNameQuery>;
export declare type MenuByNameLazyQueryHookResult = ReturnType<typeof useMenuByNameLazyQuery>;
export declare type MenuByNameQueryResult = Apollo.QueryResult<MenuByNameQuery, MenuByNameQueryVariables>;
//# sourceMappingURL=MenuByName.d.ts.map