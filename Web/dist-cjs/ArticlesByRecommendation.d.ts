import type * as Types from './types';
import type { ArticleTeaserPartsFragment } from './ArticleTeaserParts';
import * as Apollo from '@apollo/client';
export declare type ArticlesByRecommendationQueryVariables = Types.Exact<{
    perPage: Types.Scalars['Int'];
    postId: Types.Scalars['Int'];
}>;
export declare type ArticlesByRecommendationQuery = {
    __typename?: 'RootQuery';
    posts?: Types.Maybe<{
        __typename?: 'RootQueryToPostConnection';
        nodes?: Types.Maybe<Array<Types.Maybe<({
            __typename?: 'Post';
        } & ArticleTeaserPartsFragment)>>>;
    }>;
};
export declare const ArticlesByRecommendationDocument: Apollo.DocumentNode;
/**
 * __useArticlesByRecommendationQuery__
 *
 * To run a query within a React component, call `useArticlesByRecommendationQuery` and pass it any options that fit your needs.
 * When your component renders, `useArticlesByRecommendationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useArticlesByRecommendationQuery({
 *   variables: {
 *      perPage: // value for 'perPage'
 *      postId: // value for 'postId'
 *   },
 * });
 */
export declare function useArticlesByRecommendationQuery(baseOptions: Apollo.QueryHookOptions<ArticlesByRecommendationQuery, ArticlesByRecommendationQueryVariables>): Apollo.QueryResult<ArticlesByRecommendationQuery, Types.Exact<{
    perPage: number;
    postId: number;
}>>;
export declare function useArticlesByRecommendationLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ArticlesByRecommendationQuery, ArticlesByRecommendationQueryVariables>): Apollo.QueryTuple<ArticlesByRecommendationQuery, Types.Exact<{
    perPage: number;
    postId: number;
}>>;
export declare type ArticlesByRecommendationQueryHookResult = ReturnType<typeof useArticlesByRecommendationQuery>;
export declare type ArticlesByRecommendationLazyQueryHookResult = ReturnType<typeof useArticlesByRecommendationLazyQuery>;
export declare type ArticlesByRecommendationQueryResult = Apollo.QueryResult<ArticlesByRecommendationQuery, ArticlesByRecommendationQueryVariables>;
//# sourceMappingURL=ArticlesByRecommendation.d.ts.map