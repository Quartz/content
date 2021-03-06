import type * as Types from './types';
import type { ArticlePartsFragment } from './ArticleParts';
import * as Apollo from '@apollo/client';
export declare type ArticleQueryVariables = Types.Exact<{
    id: Types.Scalars['Int'];
    previewTime?: Types.Maybe<Types.Scalars['Int']>;
    previewToken?: Types.Maybe<Types.Scalars['String']>;
}>;
export declare type ArticleQuery = {
    __typename?: 'RootQuery';
    posts?: Types.Maybe<{
        __typename?: 'RootQueryToPostConnection';
        nodes?: Types.Maybe<Array<Types.Maybe<({
            __typename?: 'Post';
        } & ArticlePartsFragment)>>>;
    }>;
};
export declare const ArticleDocument: Apollo.DocumentNode;
/**
 * __useArticleQuery__
 *
 * To run a query within a React component, call `useArticleQuery` and pass it any options that fit your needs.
 * When your component renders, `useArticleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useArticleQuery({
 *   variables: {
 *      id: // value for 'id'
 *      previewTime: // value for 'previewTime'
 *      previewToken: // value for 'previewToken'
 *   },
 * });
 */
export declare function useArticleQuery(baseOptions: Apollo.QueryHookOptions<ArticleQuery, ArticleQueryVariables>): Apollo.QueryResult<ArticleQuery, Types.Exact<{
    id: number;
    previewTime?: Types.Maybe<number> | undefined;
    previewToken?: Types.Maybe<string> | undefined;
}>>;
export declare function useArticleLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ArticleQuery, ArticleQueryVariables>): Apollo.QueryTuple<ArticleQuery, Types.Exact<{
    id: number;
    previewTime?: Types.Maybe<number> | undefined;
    previewToken?: Types.Maybe<string> | undefined;
}>>;
export declare type ArticleQueryHookResult = ReturnType<typeof useArticleQuery>;
export declare type ArticleLazyQueryHookResult = ReturnType<typeof useArticleLazyQuery>;
export declare type ArticleQueryResult = Apollo.QueryResult<ArticleQuery, ArticleQueryVariables>;
//# sourceMappingURL=Article.d.ts.map