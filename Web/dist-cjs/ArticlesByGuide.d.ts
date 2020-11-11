import type * as Types from './types';
import type { GuidePartsFragment } from './GuideParts';
import type { ArticleTeaserPartsFragment } from './ArticleTeaserParts';
import * as Apollo from '@apollo/client';
export declare type ArticlesByGuideQueryVariables = Types.Exact<{
    after?: Types.Maybe<Types.Scalars['String']>;
    perPage?: Types.Maybe<Types.Scalars['Int']>;
    slug?: Types.Maybe<Array<Types.Maybe<Types.Scalars['String']>>>;
}>;
export declare type ArticlesByGuideQuery = {
    __typename?: 'RootQuery';
    guides?: Types.Maybe<{
        __typename?: 'RootQueryToGuideConnection';
        nodes?: Types.Maybe<Array<Types.Maybe<({
            __typename?: 'Guide';
            posts?: Types.Maybe<{
                __typename?: 'GuideToPostConnection';
                nodes?: Types.Maybe<Array<Types.Maybe<({
                    __typename?: 'Post';
                } & ArticleTeaserPartsFragment)>>>;
                pageInfo?: Types.Maybe<{
                    __typename?: 'WPPageInfo';
                    hasNextPage: boolean;
                    endCursor?: Types.Maybe<string>;
                }>;
            }>;
        } & GuidePartsFragment)>>>;
    }>;
};
export declare const ArticlesByGuideDocument: Apollo.DocumentNode;
/**
 * __useArticlesByGuideQuery__
 *
 * To run a query within a React component, call `useArticlesByGuideQuery` and pass it any options that fit your needs.
 * When your component renders, `useArticlesByGuideQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useArticlesByGuideQuery({
 *   variables: {
 *      after: // value for 'after'
 *      perPage: // value for 'perPage'
 *      slug: // value for 'slug'
 *   },
 * });
 */
export declare function useArticlesByGuideQuery(baseOptions?: Apollo.QueryHookOptions<ArticlesByGuideQuery, ArticlesByGuideQueryVariables>): Apollo.QueryResult<ArticlesByGuideQuery, Types.Exact<{
    after?: string | null | undefined;
    perPage?: number | null | undefined;
    slug?: (string | null)[] | null | undefined;
}>>;
export declare function useArticlesByGuideLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ArticlesByGuideQuery, ArticlesByGuideQueryVariables>): Apollo.QueryTuple<ArticlesByGuideQuery, Types.Exact<{
    after?: string | null | undefined;
    perPage?: number | null | undefined;
    slug?: (string | null)[] | null | undefined;
}>>;
export declare type ArticlesByGuideQueryHookResult = ReturnType<typeof useArticlesByGuideQuery>;
export declare type ArticlesByGuideLazyQueryHookResult = ReturnType<typeof useArticlesByGuideLazyQuery>;
export declare type ArticlesByGuideQueryResult = Apollo.QueryResult<ArticlesByGuideQuery, ArticlesByGuideQueryVariables>;
//# sourceMappingURL=ArticlesByGuide.d.ts.map