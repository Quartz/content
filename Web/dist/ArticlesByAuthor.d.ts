import type * as Types from './types';
import type { AuthorPartsFragment } from './AuthorParts';
import type { ArticleTeaserPartsFragment } from './ArticleTeaserParts';
import * as Apollo from '@apollo/client';
export declare type ArticlesByAuthorQueryVariables = Types.Exact<{
    after?: Types.Maybe<Types.Scalars['String']>;
    perPage: Types.Scalars['Int'];
    slug?: Types.Maybe<Array<Types.Maybe<Types.Scalars['String']>>>;
}>;
export declare type ArticlesByAuthorQuery = {
    __typename?: 'RootQuery';
    authors?: Types.Maybe<{
        __typename?: 'RootQueryToCoAuthorConnection';
        nodes?: Types.Maybe<Array<Types.Maybe<({
            __typename?: 'CoAuthor';
            posts?: Types.Maybe<{
                __typename?: 'CoAuthorToPostConnection';
                nodes?: Types.Maybe<Array<Types.Maybe<({
                    __typename?: 'Post';
                } & ArticleTeaserPartsFragment)>>>;
                pageInfo?: Types.Maybe<{
                    __typename?: 'WPPageInfo';
                    endCursor?: Types.Maybe<string>;
                    hasNextPage: boolean;
                }>;
            }>;
        } & AuthorPartsFragment)>>>;
    }>;
};
export declare const ArticlesByAuthorDocument: Apollo.DocumentNode;
/**
 * __useArticlesByAuthorQuery__
 *
 * To run a query within a React component, call `useArticlesByAuthorQuery` and pass it any options that fit your needs.
 * When your component renders, `useArticlesByAuthorQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useArticlesByAuthorQuery({
 *   variables: {
 *      after: // value for 'after'
 *      perPage: // value for 'perPage'
 *      slug: // value for 'slug'
 *   },
 * });
 */
export declare function useArticlesByAuthorQuery(baseOptions: Apollo.QueryHookOptions<ArticlesByAuthorQuery, ArticlesByAuthorQueryVariables>): Apollo.QueryResult<ArticlesByAuthorQuery, Types.Exact<{
    after?: string | null | undefined;
    perPage: number;
    slug?: (string | null)[] | null | undefined;
}>>;
export declare function useArticlesByAuthorLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ArticlesByAuthorQuery, ArticlesByAuthorQueryVariables>): Apollo.QueryTuple<ArticlesByAuthorQuery, Types.Exact<{
    after?: string | null | undefined;
    perPage: number;
    slug?: (string | null)[] | null | undefined;
}>>;
export declare type ArticlesByAuthorQueryHookResult = ReturnType<typeof useArticlesByAuthorQuery>;
export declare type ArticlesByAuthorLazyQueryHookResult = ReturnType<typeof useArticlesByAuthorLazyQuery>;
export declare type ArticlesByAuthorQueryResult = Apollo.QueryResult<ArticlesByAuthorQuery, ArticlesByAuthorQueryVariables>;
//# sourceMappingURL=ArticlesByAuthor.d.ts.map