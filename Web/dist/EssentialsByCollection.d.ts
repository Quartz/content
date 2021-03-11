import type * as Types from './types';
import type { CollectionPartsFragment } from './CollectionParts';
import type { BulletinDataPartsFragment } from './BulletinDataParts';
import * as Apollo from '@apollo/client';
export declare type EssentialsByCollectionQueryVariables = Types.Exact<{
    id: Types.Scalars['ID'];
}>;
export declare type EssentialsByCollectionQuery = {
    __typename?: 'RootQuery';
    collection?: Types.Maybe<({
        __typename?: 'Collection';
        bulletin?: Types.Maybe<({
            __typename?: 'BulletinData';
        } & BulletinDataPartsFragment)>;
    } & CollectionPartsFragment)>;
};
export declare const EssentialsByCollectionDocument: Apollo.DocumentNode;
/**
 * __useEssentialsByCollectionQuery__
 *
 * To run a query within a React component, call `useEssentialsByCollectionQuery` and pass it any options that fit your needs.
 * When your component renders, `useEssentialsByCollectionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEssentialsByCollectionQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export declare function useEssentialsByCollectionQuery(baseOptions: Apollo.QueryHookOptions<EssentialsByCollectionQuery, EssentialsByCollectionQueryVariables>): Apollo.QueryResult<EssentialsByCollectionQuery, Types.Exact<{
    id: string;
}>>;
export declare function useEssentialsByCollectionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<EssentialsByCollectionQuery, EssentialsByCollectionQueryVariables>): Apollo.QueryTuple<EssentialsByCollectionQuery, Types.Exact<{
    id: string;
}>>;
export declare type EssentialsByCollectionQueryHookResult = ReturnType<typeof useEssentialsByCollectionQuery>;
export declare type EssentialsByCollectionLazyQueryHookResult = ReturnType<typeof useEssentialsByCollectionLazyQuery>;
export declare type EssentialsByCollectionQueryResult = Apollo.QueryResult<EssentialsByCollectionQuery, EssentialsByCollectionQueryVariables>;
//# sourceMappingURL=EssentialsByCollection.d.ts.map