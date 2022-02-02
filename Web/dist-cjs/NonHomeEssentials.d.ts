import type * as Types from './types';
import type { CollectionPartsFragment } from './CollectionParts';
import type { BulletinDataPartsFragment } from './BulletinDataParts';
import * as Apollo from '@apollo/client';
export declare type NonHomeEssentialsQueryVariables = Types.Exact<{
    after?: Types.Maybe<Types.Scalars['String']>;
    perPage?: Types.Maybe<Types.Scalars['Int']>;
}>;
export declare type NonHomeEssentialsQuery = {
    __typename?: 'RootQuery';
    collections?: Types.Maybe<{
        __typename?: 'RootQueryToCollectionConnection';
        nodes?: Types.Maybe<Array<Types.Maybe<({
            __typename?: 'Collection';
            bulletin?: Types.Maybe<({
                __typename?: 'BulletinData';
            } & BulletinDataPartsFragment)>;
        } & CollectionPartsFragment)>>>;
        pageInfo?: Types.Maybe<{
            __typename?: 'WPPageInfo';
            endCursor?: Types.Maybe<string>;
            hasNextPage: boolean;
        }>;
    }>;
};
export declare const NonHomeEssentialsDocument: Apollo.DocumentNode;
/**
 * __useNonHomeEssentialsQuery__
 *
 * To run a query within a React component, call `useNonHomeEssentialsQuery` and pass it any options that fit your needs.
 * When your component renders, `useNonHomeEssentialsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNonHomeEssentialsQuery({
 *   variables: {
 *      after: // value for 'after'
 *      perPage: // value for 'perPage'
 *   },
 * });
 */
export declare function useNonHomeEssentialsQuery(baseOptions?: Apollo.QueryHookOptions<NonHomeEssentialsQuery, NonHomeEssentialsQueryVariables>): Apollo.QueryResult<NonHomeEssentialsQuery, Types.Exact<{
    after?: Types.Maybe<string> | undefined;
    perPage?: Types.Maybe<number> | undefined;
}>>;
export declare function useNonHomeEssentialsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<NonHomeEssentialsQuery, NonHomeEssentialsQueryVariables>): Apollo.QueryTuple<NonHomeEssentialsQuery, Types.Exact<{
    after?: Types.Maybe<string> | undefined;
    perPage?: Types.Maybe<number> | undefined;
}>>;
export declare type NonHomeEssentialsQueryHookResult = ReturnType<typeof useNonHomeEssentialsQuery>;
export declare type NonHomeEssentialsLazyQueryHookResult = ReturnType<typeof useNonHomeEssentialsLazyQuery>;
export declare type NonHomeEssentialsQueryResult = Apollo.QueryResult<NonHomeEssentialsQuery, NonHomeEssentialsQueryVariables>;
//# sourceMappingURL=NonHomeEssentials.d.ts.map