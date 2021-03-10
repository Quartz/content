import type * as Types from './types';
import type { CollectionPartsFragment } from './CollectionParts';
import * as Apollo from '@apollo/client';
export declare type CollectionsQueryVariables = Types.Exact<{
    first?: Types.Maybe<Types.Scalars['Int']>;
    after?: Types.Maybe<Types.Scalars['String']>;
}>;
export declare type CollectionsQuery = {
    __typename?: 'RootQuery';
    collections?: Types.Maybe<{
        __typename?: 'RootQueryToCollectionConnection';
        pageInfo?: Types.Maybe<{
            __typename?: 'WPPageInfo';
            endCursor?: Types.Maybe<string>;
        }>;
        nodes?: Types.Maybe<Array<Types.Maybe<({
            __typename?: 'Collection';
        } & CollectionPartsFragment)>>>;
    }>;
};
export declare const CollectionsDocument: Apollo.DocumentNode;
/**
 * __useCollectionsQuery__
 *
 * To run a query within a React component, call `useCollectionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCollectionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCollectionsQuery({
 *   variables: {
 *      first: // value for 'first'
 *      after: // value for 'after'
 *   },
 * });
 */
export declare function useCollectionsQuery(baseOptions?: Apollo.QueryHookOptions<CollectionsQuery, CollectionsQueryVariables>): Apollo.QueryResult<CollectionsQuery, Types.Exact<{
    first?: Types.Maybe<number> | undefined;
    after?: Types.Maybe<string> | undefined;
}>>;
export declare function useCollectionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CollectionsQuery, CollectionsQueryVariables>): Apollo.QueryTuple<CollectionsQuery, Types.Exact<{
    first?: Types.Maybe<number> | undefined;
    after?: Types.Maybe<string> | undefined;
}>>;
export declare type CollectionsQueryHookResult = ReturnType<typeof useCollectionsQuery>;
export declare type CollectionsLazyQueryHookResult = ReturnType<typeof useCollectionsLazyQuery>;
export declare type CollectionsQueryResult = Apollo.QueryResult<CollectionsQuery, CollectionsQueryVariables>;
//# sourceMappingURL=Collections.d.ts.map