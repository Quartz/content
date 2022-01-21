import type * as Types from './types';
import type { ArticleTeaserPartsFragment } from './ArticleTeaserParts';
import * as Apollo from '@apollo/client';
export declare type FirstPopularArticlesQueryVariables = Types.Exact<{
    edition?: Types.Maybe<Types.EditionName>;
    first?: Types.Maybe<Types.Scalars['Int']>;
}>;
export declare type FirstPopularArticlesQuery = {
    __typename?: 'RootQuery';
    firstPopularArticles?: Types.Maybe<{
        __typename?: 'RootQueryToPostConnection';
        nodes?: Types.Maybe<Array<Types.Maybe<({
            __typename?: 'Post';
        } & ArticleTeaserPartsFragment)>>>;
        pageInfo?: Types.Maybe<{
            __typename?: 'WPPageInfo';
            endCursor?: Types.Maybe<string>;
            hasNextPage: boolean;
        }>;
    }>;
};
export declare const FirstPopularArticlesDocument: Apollo.DocumentNode;
/**
 * __useFirstPopularArticlesQuery__
 *
 * To run a query within a React component, call `useFirstPopularArticlesQuery` and pass it any options that fit your needs.
 * When your component renders, `useFirstPopularArticlesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFirstPopularArticlesQuery({
 *   variables: {
 *      edition: // value for 'edition'
 *      first: // value for 'first'
 *   },
 * });
 */
export declare function useFirstPopularArticlesQuery(baseOptions?: Apollo.QueryHookOptions<FirstPopularArticlesQuery, FirstPopularArticlesQueryVariables>): Apollo.QueryResult<FirstPopularArticlesQuery, Types.Exact<{
    edition?: Types.Maybe<Types.EditionName> | undefined;
    first?: Types.Maybe<number> | undefined;
}>>;
export declare function useFirstPopularArticlesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FirstPopularArticlesQuery, FirstPopularArticlesQueryVariables>): Apollo.QueryTuple<FirstPopularArticlesQuery, Types.Exact<{
    edition?: Types.Maybe<Types.EditionName> | undefined;
    first?: Types.Maybe<number> | undefined;
}>>;
export declare type FirstPopularArticlesQueryHookResult = ReturnType<typeof useFirstPopularArticlesQuery>;
export declare type FirstPopularArticlesLazyQueryHookResult = ReturnType<typeof useFirstPopularArticlesLazyQuery>;
export declare type FirstPopularArticlesQueryResult = Apollo.QueryResult<FirstPopularArticlesQuery, FirstPopularArticlesQueryVariables>;
//# sourceMappingURL=FirstPopularArticles.d.ts.map