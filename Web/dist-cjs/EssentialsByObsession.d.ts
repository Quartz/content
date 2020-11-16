import type * as Types from './types';
import type { CollectionPartsFragment } from './CollectionParts';
import * as Apollo from '@apollo/client';
export declare type EssentialsByObsessionQueryVariables = Types.Exact<{
    slug: Types.Scalars['String'];
}>;
export declare type EssentialsByObsessionQuery = {
    __typename?: 'RootQuery';
    obsessions?: Types.Maybe<{
        __typename?: 'RootQueryToObsessionConnection';
        nodes?: Types.Maybe<Array<Types.Maybe<{
            __typename?: 'Obsession';
            essentials?: Types.Maybe<{
                __typename?: 'ObsessionToCollectionConnection';
                nodes?: Types.Maybe<Array<Types.Maybe<({
                    __typename?: 'Collection';
                } & CollectionPartsFragment)>>>;
            }>;
        }>>>;
    }>;
};
export declare const EssentialsByObsessionDocument: Apollo.DocumentNode;
/**
 * __useEssentialsByObsessionQuery__
 *
 * To run a query within a React component, call `useEssentialsByObsessionQuery` and pass it any options that fit your needs.
 * When your component renders, `useEssentialsByObsessionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEssentialsByObsessionQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export declare function useEssentialsByObsessionQuery(baseOptions: Apollo.QueryHookOptions<EssentialsByObsessionQuery, EssentialsByObsessionQueryVariables>): Apollo.QueryResult<EssentialsByObsessionQuery, Types.Exact<{
    slug: string;
}>>;
export declare function useEssentialsByObsessionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<EssentialsByObsessionQuery, EssentialsByObsessionQueryVariables>): Apollo.QueryTuple<EssentialsByObsessionQuery, Types.Exact<{
    slug: string;
}>>;
export declare type EssentialsByObsessionQueryHookResult = ReturnType<typeof useEssentialsByObsessionQuery>;
export declare type EssentialsByObsessionLazyQueryHookResult = ReturnType<typeof useEssentialsByObsessionLazyQuery>;
export declare type EssentialsByObsessionQueryResult = Apollo.QueryResult<EssentialsByObsessionQuery, EssentialsByObsessionQueryVariables>;
//# sourceMappingURL=EssentialsByObsession.d.ts.map