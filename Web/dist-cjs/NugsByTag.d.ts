import type * as Types from './types';
import type { NugPartsFragment } from './NugParts';
import * as Apollo from '@apollo/client';
export declare type NugsByTagQueryVariables = Types.Exact<{
    perPage: Types.Scalars['Int'];
    tag: Array<Types.Maybe<Types.Scalars['String']>>;
}>;
export declare type NugsByTagQuery = ({
    __typename?: 'RootQuery';
} & {
    nugs?: Types.Maybe<({
        __typename?: 'RootQueryToNugConnection';
    } & {
        nodes?: Types.Maybe<Array<Types.Maybe<({
            __typename?: 'Nug';
        } & NugPartsFragment)>>>;
    })>;
});
export declare const NugsByTagDocument: Apollo.DocumentNode;
/**
 * __useNugsByTagQuery__
 *
 * To run a query within a React component, call `useNugsByTagQuery` and pass it any options that fit your needs.
 * When your component renders, `useNugsByTagQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNugsByTagQuery({
 *   variables: {
 *      perPage: // value for 'perPage'
 *      tag: // value for 'tag'
 *   },
 * });
 */
export declare function useNugsByTagQuery(baseOptions?: Apollo.QueryHookOptions<NugsByTagQuery, NugsByTagQueryVariables>): Apollo.QueryResult<NugsByTagQuery, Types.Exact<{
    perPage: number;
    tag: (string | null)[];
}>>;
export declare function useNugsByTagLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<NugsByTagQuery, NugsByTagQueryVariables>): Apollo.QueryTuple<NugsByTagQuery, Types.Exact<{
    perPage: number;
    tag: (string | null)[];
}>>;
export declare type NugsByTagQueryHookResult = ReturnType<typeof useNugsByTagQuery>;
export declare type NugsByTagLazyQueryHookResult = ReturnType<typeof useNugsByTagLazyQuery>;
export declare type NugsByTagQueryResult = Apollo.QueryResult<NugsByTagQuery, NugsByTagQueryVariables>;
//# sourceMappingURL=NugsByTag.d.ts.map