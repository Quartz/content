import type * as Types from './types';
import type { ArticleTeaserPartsFragment } from './ArticleTeaserParts';
import * as Apollo from '@apollo/client';
export declare type PopularArticlesQueryVariables = Types.Exact<{
    after?: Types.Maybe<Types.Scalars['String']>;
    edition?: Types.Maybe<Types.EditionName>;
    perPage?: Types.Maybe<Types.Scalars['Int']>;
}>;
export declare type PopularArticlesQuery = {
    __typename?: 'RootQuery';
    posts?: Types.Maybe<{
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
export declare const PopularArticlesDocument: Apollo.DocumentNode;
/**
 * __usePopularArticlesQuery__
 *
 * To run a query within a React component, call `usePopularArticlesQuery` and pass it any options that fit your needs.
 * When your component renders, `usePopularArticlesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePopularArticlesQuery({
 *   variables: {
 *      after: // value for 'after'
 *      edition: // value for 'edition'
 *      perPage: // value for 'perPage'
 *   },
 * });
 */
export declare function usePopularArticlesQuery(baseOptions?: Apollo.QueryHookOptions<PopularArticlesQuery, PopularArticlesQueryVariables>): Apollo.QueryResult<PopularArticlesQuery, Types.Exact<{
    after?: Types.Maybe<string> | undefined;
    edition?: Types.Maybe<Types.EditionName> | undefined;
    perPage?: Types.Maybe<number> | undefined;
}>>;
export declare function usePopularArticlesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PopularArticlesQuery, PopularArticlesQueryVariables>): Apollo.QueryTuple<PopularArticlesQuery, Types.Exact<{
    after?: Types.Maybe<string> | undefined;
    edition?: Types.Maybe<Types.EditionName> | undefined;
    perPage?: Types.Maybe<number> | undefined;
}>>;
export declare type PopularArticlesQueryHookResult = ReturnType<typeof usePopularArticlesQuery>;
export declare type PopularArticlesLazyQueryHookResult = ReturnType<typeof usePopularArticlesLazyQuery>;
export declare type PopularArticlesQueryResult = Apollo.QueryResult<PopularArticlesQuery, PopularArticlesQueryVariables>;
//# sourceMappingURL=ArticlesByPopularity.d.ts.map