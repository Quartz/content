import type * as Types from './types';
import type { ShowPartsFragment } from './ShowParts';
import type { ArticleTeaserPartsFragment } from './ArticleTeaserParts';
import * as Apollo from '@apollo/client';
export declare type ArticlesByShowQueryVariables = Types.Exact<{
    after?: Types.Maybe<Types.Scalars['String']>;
    perPage?: Types.Maybe<Types.Scalars['Int']>;
    slug?: Types.Maybe<Array<Types.Maybe<Types.Scalars['String']>>>;
}>;
export declare type ArticlesByShowQuery = ({
    __typename?: 'RootQuery';
} & {
    shows?: Types.Maybe<({
        __typename?: 'RootQueryToShowConnection';
    } & {
        nodes?: Types.Maybe<Array<Types.Maybe<({
            __typename?: 'Show';
        } & {
            posts?: Types.Maybe<({
                __typename?: 'ShowToPostConnection';
            } & {
                nodes?: Types.Maybe<Array<Types.Maybe<({
                    __typename?: 'Post';
                } & ArticleTeaserPartsFragment)>>>;
                pageInfo?: Types.Maybe<({
                    __typename?: 'WPPageInfo';
                } & Pick<Types.WpPageInfo, 'endCursor' | 'hasNextPage'>)>;
            })>;
        } & ShowPartsFragment)>>>;
    })>;
});
export declare const ArticlesByShowDocument: Apollo.DocumentNode;
/**
 * __useArticlesByShowQuery__
 *
 * To run a query within a React component, call `useArticlesByShowQuery` and pass it any options that fit your needs.
 * When your component renders, `useArticlesByShowQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useArticlesByShowQuery({
 *   variables: {
 *      after: // value for 'after'
 *      perPage: // value for 'perPage'
 *      slug: // value for 'slug'
 *   },
 * });
 */
export declare function useArticlesByShowQuery(baseOptions?: Apollo.QueryHookOptions<ArticlesByShowQuery, ArticlesByShowQueryVariables>): Apollo.QueryResult<ArticlesByShowQuery, Types.Exact<{
    after?: string | null | undefined;
    perPage?: number | null | undefined;
    slug?: (string | null)[] | null | undefined;
}>>;
export declare function useArticlesByShowLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ArticlesByShowQuery, ArticlesByShowQueryVariables>): Apollo.QueryTuple<ArticlesByShowQuery, Types.Exact<{
    after?: string | null | undefined;
    perPage?: number | null | undefined;
    slug?: (string | null)[] | null | undefined;
}>>;
export declare type ArticlesByShowQueryHookResult = ReturnType<typeof useArticlesByShowQuery>;
export declare type ArticlesByShowLazyQueryHookResult = ReturnType<typeof useArticlesByShowLazyQuery>;
export declare type ArticlesByShowQueryResult = Apollo.QueryResult<ArticlesByShowQuery, ArticlesByShowQueryVariables>;
