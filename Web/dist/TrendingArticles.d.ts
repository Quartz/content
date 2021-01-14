import type * as Types from './types';
import type { ArticleTeaserPartsFragment } from './ArticleTeaserParts';
import * as Apollo from '@apollo/client';
export declare type TrendingArticlesQueryVariables = Types.Exact<{
    [key: string]: never;
}>;
export declare type TrendingArticlesQuery = {
    __typename?: 'RootQuery';
    trendingPosts?: Types.Maybe<{
        __typename?: 'RootQueryToPostConnection';
        nodes?: Types.Maybe<Array<Types.Maybe<({
            __typename?: 'Post';
        } & ArticleTeaserPartsFragment)>>>;
    }>;
};
export declare const TrendingArticlesDocument: Apollo.DocumentNode;
/**
 * __useTrendingArticlesQuery__
 *
 * To run a query within a React component, call `useTrendingArticlesQuery` and pass it any options that fit your needs.
 * When your component renders, `useTrendingArticlesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTrendingArticlesQuery({
 *   variables: {
 *   },
 * });
 */
export declare function useTrendingArticlesQuery(baseOptions?: Apollo.QueryHookOptions<TrendingArticlesQuery, TrendingArticlesQueryVariables>): Apollo.QueryResult<TrendingArticlesQuery, Types.Exact<{
    [key: string]: never;
}>>;
export declare function useTrendingArticlesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TrendingArticlesQuery, TrendingArticlesQueryVariables>): Apollo.QueryTuple<TrendingArticlesQuery, Types.Exact<{
    [key: string]: never;
}>>;
export declare type TrendingArticlesQueryHookResult = ReturnType<typeof useTrendingArticlesQuery>;
export declare type TrendingArticlesLazyQueryHookResult = ReturnType<typeof useTrendingArticlesLazyQuery>;
export declare type TrendingArticlesQueryResult = Apollo.QueryResult<TrendingArticlesQuery, TrendingArticlesQueryVariables>;
//# sourceMappingURL=TrendingArticles.d.ts.map