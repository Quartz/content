import type * as Types from './types';
import type { TopicPartsFragment } from './TopicParts';
import type { ArticleTeaserPartsFragment } from './ArticleTeaserParts';
import * as Apollo from '@apollo/client';
export declare type ArticlesByTopicQueryVariables = Types.Exact<{
    after?: Types.Maybe<Types.Scalars['String']>;
    perPage?: Types.Maybe<Types.Scalars['Int']>;
    slug?: Types.Maybe<Array<Types.Maybe<Types.Scalars['String']>>>;
}>;
export declare type ArticlesByTopicQuery = {
    __typename?: 'RootQuery';
    topics?: Types.Maybe<{
        __typename?: 'RootQueryToTopicConnection';
        nodes?: Types.Maybe<Array<Types.Maybe<({
            __typename?: 'Topic';
            posts?: Types.Maybe<{
                __typename?: 'TopicToPostConnection';
                nodes?: Types.Maybe<Array<Types.Maybe<({
                    __typename?: 'Post';
                } & ArticleTeaserPartsFragment)>>>;
                pageInfo?: Types.Maybe<{
                    __typename?: 'WPPageInfo';
                    endCursor?: Types.Maybe<string>;
                    hasNextPage: boolean;
                }>;
            }>;
        } & TopicPartsFragment)>>>;
    }>;
};
export declare const ArticlesByTopicDocument: Apollo.DocumentNode;
/**
 * __useArticlesByTopicQuery__
 *
 * To run a query within a React component, call `useArticlesByTopicQuery` and pass it any options that fit your needs.
 * When your component renders, `useArticlesByTopicQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useArticlesByTopicQuery({
 *   variables: {
 *      after: // value for 'after'
 *      perPage: // value for 'perPage'
 *      slug: // value for 'slug'
 *   },
 * });
 */
export declare function useArticlesByTopicQuery(baseOptions?: Apollo.QueryHookOptions<ArticlesByTopicQuery, ArticlesByTopicQueryVariables>): Apollo.QueryResult<ArticlesByTopicQuery, Types.Exact<{
    after?: string | null | undefined;
    perPage?: number | null | undefined;
    slug?: (string | null)[] | null | undefined;
}>>;
export declare function useArticlesByTopicLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ArticlesByTopicQuery, ArticlesByTopicQueryVariables>): Apollo.QueryTuple<ArticlesByTopicQuery, Types.Exact<{
    after?: string | null | undefined;
    perPage?: number | null | undefined;
    slug?: (string | null)[] | null | undefined;
}>>;
export declare type ArticlesByTopicQueryHookResult = ReturnType<typeof useArticlesByTopicQuery>;
export declare type ArticlesByTopicLazyQueryHookResult = ReturnType<typeof useArticlesByTopicLazyQuery>;
export declare type ArticlesByTopicQueryResult = Apollo.QueryResult<ArticlesByTopicQuery, ArticlesByTopicQueryVariables>;
//# sourceMappingURL=ArticlesByTopic.d.ts.map