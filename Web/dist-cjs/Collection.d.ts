import type * as Types from './types';
import type { CollectionPartsFragment } from './CollectionParts';
import * as Apollo from '@apollo/client';
export declare type CollectionQueryVariables = Types.Exact<{
    id: Types.Scalars['Int'];
    previewTime?: Types.Maybe<Types.Scalars['Int']>;
    previewToken?: Types.Maybe<Types.Scalars['String']>;
}>;
export declare type CollectionQuery = {
    __typename?: 'RootQuery';
    collections?: Types.Maybe<{
        __typename?: 'RootQueryToCollectionConnection';
        nodes?: Types.Maybe<Array<Types.Maybe<({
            __typename?: 'Collection';
        } & CollectionPartsFragment)>>>;
    }>;
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
 *      id: // value for 'id'
 *      previewTime: // value for 'previewTime'
 *      previewToken: // value for 'previewToken'
 *   },
 * });
 */
export declare function useCollectionQuery(baseOptions: Apollo.QueryHookOptions<CollectionQuery, CollectionQueryVariables>): Apollo.QueryResult<CollectionQuery, Types.Exact<{
    id: number;
    previewTime?: Types.Maybe<number> | undefined;
    previewToken?: Types.Maybe<string> | undefined;
}>>;
export declare function useCollectionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CollectionQuery, CollectionQueryVariables>): Apollo.QueryTuple<CollectionQuery, Types.Exact<{
    id: number;
    previewTime?: Types.Maybe<number> | undefined;
    previewToken?: Types.Maybe<string> | undefined;
}>>;
export declare type CollectionQueryHookResult = ReturnType<typeof useCollectionQuery>;
export declare type CollectionLazyQueryHookResult = ReturnType<typeof useCollectionLazyQuery>;
export declare type CollectionQueryResult = Apollo.QueryResult<CollectionQuery, CollectionQueryVariables>;
//# sourceMappingURL=Collection.d.ts.map