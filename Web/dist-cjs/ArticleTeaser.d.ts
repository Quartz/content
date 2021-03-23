import type * as Types from './types';
import type { ArticleTeaserPartsFragment } from './ArticleTeaserParts';
import * as Apollo from '@apollo/client';
export declare type ArticleOrBulletinTeaserQueryVariables = Types.Exact<{
    id: Types.Scalars['Int'];
}>;
export declare type ArticleOrBulletinTeaserQuery = {
    __typename?: 'RootQuery';
    posts?: Types.Maybe<{
        __typename?: 'RootQueryToPostConnection';
        nodes?: Types.Maybe<Array<Types.Maybe<({
            __typename?: 'Post';
        } & ArticleTeaserPartsFragment)>>>;
    }>;
};
export declare const ArticleOrBulletinTeaserDocument: Apollo.DocumentNode;
/**
 * __useArticleOrBulletinTeaserQuery__
 *
 * To run a query within a React component, call `useArticleOrBulletinTeaserQuery` and pass it any options that fit your needs.
 * When your component renders, `useArticleOrBulletinTeaserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useArticleOrBulletinTeaserQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export declare function useArticleOrBulletinTeaserQuery(baseOptions: Apollo.QueryHookOptions<ArticleOrBulletinTeaserQuery, ArticleOrBulletinTeaserQueryVariables>): Apollo.QueryResult<ArticleOrBulletinTeaserQuery, Types.Exact<{
    id: number;
}>>;
export declare function useArticleOrBulletinTeaserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ArticleOrBulletinTeaserQuery, ArticleOrBulletinTeaserQueryVariables>): Apollo.QueryTuple<ArticleOrBulletinTeaserQuery, Types.Exact<{
    id: number;
}>>;
export declare type ArticleOrBulletinTeaserQueryHookResult = ReturnType<typeof useArticleOrBulletinTeaserQuery>;
export declare type ArticleOrBulletinTeaserLazyQueryHookResult = ReturnType<typeof useArticleOrBulletinTeaserLazyQuery>;
export declare type ArticleOrBulletinTeaserQueryResult = Apollo.QueryResult<ArticleOrBulletinTeaserQuery, ArticleOrBulletinTeaserQueryVariables>;
//# sourceMappingURL=ArticleTeaser.d.ts.map