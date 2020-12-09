import type * as Types from './types';
import type { NugPartsFragment } from './NugParts';
import * as Apollo from '@apollo/client';
export declare type NugQueryVariables = Types.Exact<{
    id: Types.Scalars['Int'];
}>;
export declare type NugQuery = {
    __typename?: 'RootQuery';
    nugs?: Types.Maybe<{
        __typename?: 'RootQueryToNugConnection';
        nodes?: Types.Maybe<Array<Types.Maybe<({
            __typename?: 'Nug';
        } & NugPartsFragment)>>>;
    }>;
};
export declare const NugDocument: Apollo.DocumentNode;
/**
 * __useNugQuery__
 *
 * To run a query within a React component, call `useNugQuery` and pass it any options that fit your needs.
 * When your component renders, `useNugQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNugQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export declare function useNugQuery(baseOptions: Apollo.QueryHookOptions<NugQuery, NugQueryVariables>): Apollo.QueryResult<NugQuery, Types.Exact<{
    id: number;
}>>;
export declare function useNugLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<NugQuery, NugQueryVariables>): Apollo.QueryTuple<NugQuery, Types.Exact<{
    id: number;
}>>;
export declare type NugQueryHookResult = ReturnType<typeof useNugQuery>;
export declare type NugLazyQueryHookResult = ReturnType<typeof useNugLazyQuery>;
export declare type NugQueryResult = Apollo.QueryResult<NugQuery, NugQueryVariables>;
//# sourceMappingURL=Nug.d.ts.map