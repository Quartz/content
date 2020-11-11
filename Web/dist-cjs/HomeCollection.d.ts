import type * as Types from './types';
import type { CollectionPartsFragment } from './CollectionParts';
import * as Apollo from '@apollo/client';
export declare type HomeCollectionQueryVariables = Types.Exact<{
    [key: string]: never;
}>;
export declare type HomeCollectionQuery = {
    __typename?: 'RootQuery';
    collections?: Types.Maybe<{
        __typename?: 'RootQueryToCollectionConnection';
        nodes?: Types.Maybe<Array<Types.Maybe<({
            __typename?: 'Collection';
        } & CollectionPartsFragment)>>>;
    }>;
};
export declare const HomeCollectionDocument: Apollo.DocumentNode;
/**
 * __useHomeCollectionQuery__
 *
 * To run a query within a React component, call `useHomeCollectionQuery` and pass it any options that fit your needs.
 * When your component renders, `useHomeCollectionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHomeCollectionQuery({
 *   variables: {
 *   },
 * });
 */
export declare function useHomeCollectionQuery(baseOptions?: Apollo.QueryHookOptions<HomeCollectionQuery, HomeCollectionQueryVariables>): Apollo.QueryResult<HomeCollectionQuery, Types.Exact<{
    [key: string]: never;
}>>;
export declare function useHomeCollectionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HomeCollectionQuery, HomeCollectionQueryVariables>): Apollo.QueryTuple<HomeCollectionQuery, Types.Exact<{
    [key: string]: never;
}>>;
export declare type HomeCollectionQueryHookResult = ReturnType<typeof useHomeCollectionQuery>;
export declare type HomeCollectionLazyQueryHookResult = ReturnType<typeof useHomeCollectionLazyQuery>;
export declare type HomeCollectionQueryResult = Apollo.QueryResult<HomeCollectionQuery, HomeCollectionQueryVariables>;
//# sourceMappingURL=HomeCollection.d.ts.map