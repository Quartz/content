import type * as Types from './types';
import type { ArticleTeaserPartsFragment } from './ArticleTeaserParts';
import * as Apollo from '@apollo/client';
export declare type ArticleTeaserQueryVariables = Types.Exact<{
    id: Types.Scalars['ID'];
}>;
export declare type ArticleTeaserQuery = ({
    __typename?: 'RootQuery';
} & {
    post?: Types.Maybe<({
        __typename?: 'Post';
    } & ArticleTeaserPartsFragment)>;
});
export declare const ArticleTeaserDocument: Apollo.DocumentNode;
/**
 * __useArticleTeaserQuery__
 *
 * To run a query within a React component, call `useArticleTeaserQuery` and pass it any options that fit your needs.
 * When your component renders, `useArticleTeaserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useArticleTeaserQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export declare function useArticleTeaserQuery(baseOptions?: Apollo.QueryHookOptions<ArticleTeaserQuery, ArticleTeaserQueryVariables>): Apollo.QueryResult<ArticleTeaserQuery, Types.Exact<{
    id: string;
}>>;
export declare function useArticleTeaserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ArticleTeaserQuery, ArticleTeaserQueryVariables>): Apollo.QueryTuple<ArticleTeaserQuery, Types.Exact<{
    id: string;
}>>;
export declare type ArticleTeaserQueryHookResult = ReturnType<typeof useArticleTeaserQuery>;
export declare type ArticleTeaserLazyQueryHookResult = ReturnType<typeof useArticleTeaserLazyQuery>;
export declare type ArticleTeaserQueryResult = Apollo.QueryResult<ArticleTeaserQuery, ArticleTeaserQueryVariables>;
//# sourceMappingURL=ArticleTeaser.d.ts.map