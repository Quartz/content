import type * as Types from './types';
import type { GuidePartsFragment } from './GuideParts';
import type { CollectionPartsFragment } from './CollectionParts';
import type { ArticleTeaserPartsFragment } from './ArticleTeaserParts';
import * as Apollo from '@apollo/client';
export declare type ArticlesByGuide2QueryVariables = Types.Exact<{
    after?: Types.Maybe<Types.Scalars['String']>;
    perPage: Types.Scalars['Int'];
    slug: Types.Scalars['ID'];
}>;
export declare type ArticlesByGuide2Query = {
    __typename?: 'RootQuery';
    guide?: Types.Maybe<({
        __typename?: 'Guide';
        essentials?: Types.Maybe<{
            __typename?: 'GuideToCollectionConnection';
            nodes?: Types.Maybe<Array<Types.Maybe<({
                __typename?: 'Collection';
            } & CollectionPartsFragment)>>>;
        }>;
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
    } & GuidePartsFragment)>;
};
export declare const ArticlesByGuide2Document: Apollo.DocumentNode;
/**
 * __useArticlesByGuide2Query__
 *
 * To run a query within a React component, call `useArticlesByGuide2Query` and pass it any options that fit your needs.
 * When your component renders, `useArticlesByGuide2Query` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useArticlesByGuide2Query({
 *   variables: {
 *      after: // value for 'after'
 *      perPage: // value for 'perPage'
 *      slug: // value for 'slug'
 *   },
 * });
 */
export declare function useArticlesByGuide2Query(baseOptions: Apollo.QueryHookOptions<ArticlesByGuide2Query, ArticlesByGuide2QueryVariables>): Apollo.QueryResult<ArticlesByGuide2Query, Types.Exact<{
    after?: Types.Maybe<string> | undefined;
    perPage: number;
    slug: string;
}>>;
export declare function useArticlesByGuide2LazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ArticlesByGuide2Query, ArticlesByGuide2QueryVariables>): Apollo.QueryTuple<ArticlesByGuide2Query, Types.Exact<{
    after?: Types.Maybe<string> | undefined;
    perPage: number;
    slug: string;
}>>;
export declare type ArticlesByGuide2QueryHookResult = ReturnType<typeof useArticlesByGuide2Query>;
export declare type ArticlesByGuide2LazyQueryHookResult = ReturnType<typeof useArticlesByGuide2LazyQuery>;
export declare type ArticlesByGuide2QueryResult = Apollo.QueryResult<ArticlesByGuide2Query, ArticlesByGuide2QueryVariables>;
//# sourceMappingURL=ArticlesByGuide2.d.ts.map