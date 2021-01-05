import type * as Types from './types';
import type { CollectionPartsFragment } from './CollectionParts';
import * as Apollo from '@apollo/client';
export declare type CollectionQueryVariables = Types.Exact<{
    slug: Types.Scalars['String'];
}>;
export declare type CollectionQuery = {
    __typename?: 'RootQuery';
    collectionBy?: Types.Maybe<({
        __typename?: 'Collection';
    } & CollectionPartsFragment)>;
};
export declare const CollectionDocument: Apollo.DocumentNode;
/**
 * __useCollectionQuery__
 *
 * To run a query within a React component, call `useCollectionQuery` and pass it any options that fit your needs.
 * When your component renders, `useCollectionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCollectionQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export declare function useCollectionQuery(baseOptions: Apollo.QueryHookOptions<CollectionQuery, CollectionQueryVariables>): Apollo.QueryResult<CollectionQuery, Types.Exact<{
    slug: string;
}>>;
export declare function useCollectionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CollectionQuery, CollectionQueryVariables>): Apollo.QueryTuple<CollectionQuery, Types.Exact<{
    slug: string;
}>>;
export declare type CollectionQueryHookResult = ReturnType<typeof useCollectionQuery>;
export declare type CollectionLazyQueryHookResult = ReturnType<typeof useCollectionLazyQuery>;
export declare type CollectionQueryResult = Apollo.QueryResult<CollectionQuery, CollectionQueryVariables>;
//# sourceMappingURL=Collection.d.ts.map