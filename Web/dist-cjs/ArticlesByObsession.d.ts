import type * as Types from './types';
import type { ObsessionPartsFragment } from './ObsessionParts';
import type { ArticleTeaserPartsFragment } from './ArticleTeaserParts';
import type { BulletinPartsFragment } from './BulletinParts';
import type { PromotionPartsFragment } from './PromotionParts';
import * as Apollo from '@apollo/client';
export declare type ArticlesByObsessionQueryVariables = Types.Exact<{
    after?: Types.Maybe<Types.Scalars['String']>;
    perPage?: Types.Maybe<Types.Scalars['Int']>;
    slug: Array<Types.Maybe<Types.Scalars['String']>>;
}>;
export declare type ArticlesByObsessionQuery = {
    __typename?: 'RootQuery';
    obsessions?: Types.Maybe<{
        __typename?: 'RootQueryToObsessionConnection';
        nodes?: Types.Maybe<Array<Types.Maybe<({
            __typename?: 'Obsession';
            posts?: Types.Maybe<{
                __typename?: 'ObsessionToContentUnionConnection';
                nodes?: Types.Maybe<Array<Types.Maybe<({
                    __typename?: 'Post';
                } & ArticleTeaserPartsFragment) | {
                    __typename?: 'Page';
                } | {
                    __typename?: 'MediaItem';
                } | {
                    __typename?: 'Email';
                } | {
                    __typename?: 'Card';
                } | {
                    __typename?: 'Chapter';
                } | ({
                    __typename?: 'Promotion';
                } & PromotionPartsFragment) | {
                    __typename?: 'Collection';
                } | {
                    __typename?: 'Stack';
                } | ({
                    __typename?: 'Bulletin';
                } & BulletinPartsFragment)>>>;
                pageInfo?: Types.Maybe<{
                    __typename?: 'WPPageInfo';
                    endCursor?: Types.Maybe<string>;
                    hasNextPage: boolean;
                }>;
            }>;
        } & ObsessionPartsFragment)>>>;
    }>;
};
export declare const ArticlesByObsessionDocument: Apollo.DocumentNode;
/**
 * __useArticlesByObsessionQuery__
 *
 * To run a query within a React component, call `useArticlesByObsessionQuery` and pass it any options that fit your needs.
 * When your component renders, `useArticlesByObsessionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useArticlesByObsessionQuery({
 *   variables: {
 *      after: // value for 'after'
 *      perPage: // value for 'perPage'
 *      slug: // value for 'slug'
 *   },
 * });
 */
export declare function useArticlesByObsessionQuery(baseOptions?: Apollo.QueryHookOptions<ArticlesByObsessionQuery, ArticlesByObsessionQueryVariables>): Apollo.QueryResult<ArticlesByObsessionQuery, Types.Exact<{
    after?: string | null | undefined;
    perPage?: number | null | undefined;
    slug: (string | null)[];
}>>;
export declare function useArticlesByObsessionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ArticlesByObsessionQuery, ArticlesByObsessionQueryVariables>): Apollo.QueryTuple<ArticlesByObsessionQuery, Types.Exact<{
    after?: string | null | undefined;
    perPage?: number | null | undefined;
    slug: (string | null)[];
}>>;
export declare type ArticlesByObsessionQueryHookResult = ReturnType<typeof useArticlesByObsessionQuery>;
export declare type ArticlesByObsessionLazyQueryHookResult = ReturnType<typeof useArticlesByObsessionLazyQuery>;
export declare type ArticlesByObsessionQueryResult = Apollo.QueryResult<ArticlesByObsessionQuery, ArticlesByObsessionQueryVariables>;
//# sourceMappingURL=ArticlesByObsession.d.ts.map