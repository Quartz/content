import * as Types from './types';
import { ArticleTeaserPartsFragment } from './ArticleTeaserParts';
import * as Apollo from '@apollo/client';
export declare type LatestArticlesQueryVariables = Types.Exact<{
    after?: Types.Maybe<Types.Scalars['String']>;
    edition?: Types.Maybe<Types.EditionName>;
    postsPerPage?: Types.Maybe<Types.Scalars['Int']>;
}>;
export declare type LatestArticlesQuery = ({
    __typename?: 'RootQuery';
} & {
    posts?: Types.Maybe<({
        __typename?: 'RootQueryToPostConnection';
    } & {
        nodes?: Types.Maybe<Array<Types.Maybe<({
            __typename?: 'Post';
        } & ArticleTeaserPartsFragment)>>>;
        pageInfo?: Types.Maybe<({
            __typename?: 'WPPageInfo';
        } & Pick<Types.WpPageInfo, 'endCursor' | 'hasNextPage'>)>;
    })>;
});
export declare const LatestArticlesDocument: Apollo.DocumentNode;
/**
 * __useLatestArticlesQuery__
 *
 * To run a query within a React component, call `useLatestArticlesQuery` and pass it any options that fit your needs.
 * When your component renders, `useLatestArticlesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLatestArticlesQuery({
 *   variables: {
 *      after: // value for 'after'
 *      edition: // value for 'edition'
 *      postsPerPage: // value for 'postsPerPage'
 *   },
 * });
 */
export declare function useLatestArticlesQuery(baseOptions?: Apollo.QueryHookOptions<LatestArticlesQuery, LatestArticlesQueryVariables>): Apollo.QueryResult<LatestArticlesQuery, Types.Exact<{
    after?: string | null | undefined;
    edition?: Types.EditionName | null | undefined;
    postsPerPage?: number | null | undefined;
}>>;
export declare function useLatestArticlesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LatestArticlesQuery, LatestArticlesQueryVariables>): Apollo.QueryTuple<LatestArticlesQuery, Types.Exact<{
    after?: string | null | undefined;
    edition?: Types.EditionName | null | undefined;
    postsPerPage?: number | null | undefined;
}>>;
export declare type LatestArticlesQueryHookResult = ReturnType<typeof useLatestArticlesQuery>;
export declare type LatestArticlesLazyQueryHookResult = ReturnType<typeof useLatestArticlesLazyQuery>;
export declare type LatestArticlesQueryResult = Apollo.QueryResult<LatestArticlesQuery, LatestArticlesQueryVariables>;
