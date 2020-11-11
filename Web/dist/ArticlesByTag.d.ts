import type * as Types from './types';
import type { TagPartsFragment } from './TagParts';
import type { ArticleTeaserPartsFragment } from './ArticleTeaserParts';
import * as Apollo from '@apollo/client';
export declare type ArticlesByTagQueryVariables = Types.Exact<{
    after?: Types.Maybe<Types.Scalars['String']>;
    perPage?: Types.Maybe<Types.Scalars['Int']>;
    slug?: Types.Maybe<Array<Types.Maybe<Types.Scalars['String']>>>;
}>;
export declare type ArticlesByTagQuery = {
    __typename?: 'RootQuery';
    tags?: Types.Maybe<{
        __typename?: 'RootQueryToTagConnection';
        nodes?: Types.Maybe<Array<Types.Maybe<({
            __typename?: 'Tag';
            posts?: Types.Maybe<{
                __typename?: 'TagToPostConnection';
                nodes?: Types.Maybe<Array<Types.Maybe<({
                    __typename?: 'Post';
                } & ArticleTeaserPartsFragment)>>>;
                pageInfo?: Types.Maybe<{
                    __typename?: 'WPPageInfo';
                    endCursor?: Types.Maybe<string>;
                    hasNextPage: boolean;
                }>;
            }>;
        } & TagPartsFragment)>>>;
    }>;
};
export declare const ArticlesByTagDocument: Apollo.DocumentNode;
/**
 * __useArticlesByTagQuery__
 *
 * To run a query within a React component, call `useArticlesByTagQuery` and pass it any options that fit your needs.
 * When your component renders, `useArticlesByTagQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useArticlesByTagQuery({
 *   variables: {
 *      after: // value for 'after'
 *      perPage: // value for 'perPage'
 *      slug: // value for 'slug'
 *   },
 * });
 */
export declare function useArticlesByTagQuery(baseOptions?: Apollo.QueryHookOptions<ArticlesByTagQuery, ArticlesByTagQueryVariables>): Apollo.QueryResult<ArticlesByTagQuery, Types.Exact<{
    after?: string | null | undefined;
    perPage?: number | null | undefined;
    slug?: (string | null)[] | null | undefined;
}>>;
export declare function useArticlesByTagLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ArticlesByTagQuery, ArticlesByTagQueryVariables>): Apollo.QueryTuple<ArticlesByTagQuery, Types.Exact<{
    after?: string | null | undefined;
    perPage?: number | null | undefined;
    slug?: (string | null)[] | null | undefined;
}>>;
export declare type ArticlesByTagQueryHookResult = ReturnType<typeof useArticlesByTagQuery>;
export declare type ArticlesByTagLazyQueryHookResult = ReturnType<typeof useArticlesByTagLazyQuery>;
export declare type ArticlesByTagQueryResult = Apollo.QueryResult<ArticlesByTagQuery, ArticlesByTagQueryVariables>;
//# sourceMappingURL=ArticlesByTag.d.ts.map