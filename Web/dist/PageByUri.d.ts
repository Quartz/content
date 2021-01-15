import type * as Types from './types';
import * as Apollo from '@apollo/client';
export declare type PageByUriQueryVariables = Types.Exact<{
    slug: Types.Scalars['String'];
}>;
export declare type PageByUriQuery = {
    __typename?: 'RootQuery';
    pageBy?: Types.Maybe<{
        __typename?: 'Page';
        id: string;
        content?: Types.Maybe<string>;
        title?: Types.Maybe<string>;
    }>;
};
export declare const PageByUriDocument: Apollo.DocumentNode;
/**
 * __usePageByUriQuery__
 *
 * To run a query within a React component, call `usePageByUriQuery` and pass it any options that fit your needs.
 * When your component renders, `usePageByUriQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePageByUriQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export declare function usePageByUriQuery(baseOptions: Apollo.QueryHookOptions<PageByUriQuery, PageByUriQueryVariables>): Apollo.QueryResult<PageByUriQuery, Types.Exact<{
    slug: string;
}>>;
export declare function usePageByUriLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PageByUriQuery, PageByUriQueryVariables>): Apollo.QueryTuple<PageByUriQuery, Types.Exact<{
    slug: string;
}>>;
export declare type PageByUriQueryHookResult = ReturnType<typeof usePageByUriQuery>;
export declare type PageByUriLazyQueryHookResult = ReturnType<typeof usePageByUriLazyQuery>;
export declare type PageByUriQueryResult = Apollo.QueryResult<PageByUriQuery, PageByUriQueryVariables>;
//# sourceMappingURL=PageByUri.d.ts.map