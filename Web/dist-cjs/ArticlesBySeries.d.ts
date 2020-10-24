import type * as Types from './types';
import type { SeriesPartsFragment } from './SeriesParts';
import type { ArticleTeaserPartsFragment } from './ArticleTeaserParts';
import * as Apollo from '@apollo/client';
export declare type ArticlesBySeriesQueryVariables = Types.Exact<{
    after?: Types.Maybe<Types.Scalars['String']>;
    perPage?: Types.Maybe<Types.Scalars['Int']>;
    slug?: Types.Maybe<Array<Types.Maybe<Types.Scalars['String']>>>;
}>;
export declare type ArticlesBySeriesQuery = ({
    __typename?: 'RootQuery';
} & {
    serieses?: Types.Maybe<({
        __typename?: 'RootQueryToSeriesConnection';
    } & {
        nodes?: Types.Maybe<Array<Types.Maybe<({
            __typename?: 'Series';
        } & {
            posts?: Types.Maybe<({
                __typename?: 'SeriesToPostConnection';
            } & {
                nodes?: Types.Maybe<Array<Types.Maybe<({
                    __typename?: 'Post';
                } & ArticleTeaserPartsFragment)>>>;
                pageInfo?: Types.Maybe<({
                    __typename?: 'WPPageInfo';
                } & Pick<Types.WpPageInfo, 'endCursor' | 'hasNextPage'>)>;
            })>;
        } & SeriesPartsFragment)>>>;
    })>;
});
export declare const ArticlesBySeriesDocument: Apollo.DocumentNode;
/**
 * __useArticlesBySeriesQuery__
 *
 * To run a query within a React component, call `useArticlesBySeriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useArticlesBySeriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useArticlesBySeriesQuery({
 *   variables: {
 *      after: // value for 'after'
 *      perPage: // value for 'perPage'
 *      slug: // value for 'slug'
 *   },
 * });
 */
export declare function useArticlesBySeriesQuery(baseOptions?: Apollo.QueryHookOptions<ArticlesBySeriesQuery, ArticlesBySeriesQueryVariables>): Apollo.QueryResult<ArticlesBySeriesQuery, Types.Exact<{
    after?: string | null | undefined;
    perPage?: number | null | undefined;
    slug?: (string | null)[] | null | undefined;
}>>;
export declare function useArticlesBySeriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ArticlesBySeriesQuery, ArticlesBySeriesQueryVariables>): Apollo.QueryTuple<ArticlesBySeriesQuery, Types.Exact<{
    after?: string | null | undefined;
    perPage?: number | null | undefined;
    slug?: (string | null)[] | null | undefined;
}>>;
export declare type ArticlesBySeriesQueryHookResult = ReturnType<typeof useArticlesBySeriesQuery>;
export declare type ArticlesBySeriesLazyQueryHookResult = ReturnType<typeof useArticlesBySeriesLazyQuery>;
export declare type ArticlesBySeriesQueryResult = Apollo.QueryResult<ArticlesBySeriesQuery, ArticlesBySeriesQueryVariables>;
//# sourceMappingURL=ArticlesBySeries.d.ts.map