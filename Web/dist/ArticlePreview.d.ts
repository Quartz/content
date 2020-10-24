import type * as Types from './types';
import type { ArticlePartsFragment } from './ArticleParts';
import * as Apollo from '@apollo/client';
export declare type ArticlePreviewQueryVariables = Types.Exact<{
    id: Types.Scalars['Int'];
    time: Types.Scalars['Int'];
    token: Types.Scalars['String'];
}>;
export declare type ArticlePreviewQuery = ({
    __typename?: 'RootQuery';
} & {
    posts?: Types.Maybe<({
        __typename?: 'RootQueryToPostConnection';
    } & {
        nodes?: Types.Maybe<Array<Types.Maybe<({
            __typename?: 'Post';
        } & ArticlePartsFragment)>>>;
    })>;
});
export declare const ArticlePreviewDocument: Apollo.DocumentNode;
/**
 * __useArticlePreviewQuery__
 *
 * To run a query within a React component, call `useArticlePreviewQuery` and pass it any options that fit your needs.
 * When your component renders, `useArticlePreviewQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useArticlePreviewQuery({
 *   variables: {
 *      id: // value for 'id'
 *      time: // value for 'time'
 *      token: // value for 'token'
 *   },
 * });
 */
export declare function useArticlePreviewQuery(baseOptions?: Apollo.QueryHookOptions<ArticlePreviewQuery, ArticlePreviewQueryVariables>): Apollo.QueryResult<ArticlePreviewQuery, Types.Exact<{
    id: number;
    time: number;
    token: string;
}>>;
export declare function useArticlePreviewLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ArticlePreviewQuery, ArticlePreviewQueryVariables>): Apollo.QueryTuple<ArticlePreviewQuery, Types.Exact<{
    id: number;
    time: number;
    token: string;
}>>;
export declare type ArticlePreviewQueryHookResult = ReturnType<typeof useArticlePreviewQuery>;
export declare type ArticlePreviewLazyQueryHookResult = ReturnType<typeof useArticlePreviewLazyQuery>;
export declare type ArticlePreviewQueryResult = Apollo.QueryResult<ArticlePreviewQuery, ArticlePreviewQueryVariables>;
