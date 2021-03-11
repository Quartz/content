import type * as Types from './types';
import type { CollectionPartsFragment } from './CollectionParts';
import * as Apollo from '@apollo/client';
export declare type CollectionByIdQueryVariables = Types.Exact<{
    id: Types.Scalars['ID'];
}>;
export declare type CollectionByIdQuery = {
    __typename?: 'RootQuery';
    collection?: Types.Maybe<({
        __typename?: 'Collection';
    } & CollectionPartsFragment)>;
};
export declare const CollectionByIdDocument: Apollo.DocumentNode;
/**
 * __useCollectionByIdQuery__
 *
 * To run a query within a React component, call `useCollectionByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useCollectionByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCollectionByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export declare function useCollectionByIdQuery(baseOptions: Apollo.QueryHookOptions<CollectionByIdQuery, CollectionByIdQueryVariables>): Apollo.QueryResult<CollectionByIdQuery, Types.Exact<{
    id: string;
}>>;
export declare function useCollectionByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CollectionByIdQuery, CollectionByIdQueryVariables>): Apollo.QueryTuple<CollectionByIdQuery, Types.Exact<{
    id: string;
}>>;
export declare type CollectionByIdQueryHookResult = ReturnType<typeof useCollectionByIdQuery>;
export declare type CollectionByIdLazyQueryHookResult = ReturnType<typeof useCollectionByIdLazyQuery>;
export declare type CollectionByIdQueryResult = Apollo.QueryResult<CollectionByIdQuery, CollectionByIdQueryVariables>;
//# sourceMappingURL=CollectionById.d.ts.map