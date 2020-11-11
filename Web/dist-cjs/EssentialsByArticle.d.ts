import type * as Types from './types';
import type { ObsessionPartsFragment } from './ObsessionParts';
import type { CollectionPartsFragment } from './CollectionParts';
import * as Apollo from '@apollo/client';
export declare type EssentialsByArticleQueryVariables = Types.Exact<{
    id: Types.Scalars['ID'];
}>;
export declare type EssentialsByArticleQuery = {
    __typename?: 'RootQuery';
    post?: Types.Maybe<{
        __typename?: 'Post';
        id: string;
        obsessions?: Types.Maybe<{
            __typename?: 'PostToObsessionConnection';
            nodes?: Types.Maybe<Array<Types.Maybe<({
                __typename?: 'Obsession';
                essentials?: Types.Maybe<{
                    __typename?: 'ObsessionToCollectionConnection';
                    nodes?: Types.Maybe<Array<Types.Maybe<({
                        __typename?: 'Collection';
                    } & CollectionPartsFragment)>>>;
                }>;
            } & ObsessionPartsFragment)>>>;
        }>;
    }>;
};
export declare const EssentialsByArticleDocument: Apollo.DocumentNode;
/**
 * __useEssentialsByArticleQuery__
 *
 * To run a query within a React component, call `useEssentialsByArticleQuery` and pass it any options that fit your needs.
 * When your component renders, `useEssentialsByArticleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEssentialsByArticleQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export declare function useEssentialsByArticleQuery(baseOptions: Apollo.QueryHookOptions<EssentialsByArticleQuery, EssentialsByArticleQueryVariables>): Apollo.QueryResult<EssentialsByArticleQuery, Types.Exact<{
    id: string;
}>>;
export declare function useEssentialsByArticleLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<EssentialsByArticleQuery, EssentialsByArticleQueryVariables>): Apollo.QueryTuple<EssentialsByArticleQuery, Types.Exact<{
    id: string;
}>>;
export declare type EssentialsByArticleQueryHookResult = ReturnType<typeof useEssentialsByArticleQuery>;
export declare type EssentialsByArticleLazyQueryHookResult = ReturnType<typeof useEssentialsByArticleLazyQuery>;
export declare type EssentialsByArticleQueryResult = Apollo.QueryResult<EssentialsByArticleQuery, EssentialsByArticleQueryVariables>;
//# sourceMappingURL=EssentialsByArticle.d.ts.map