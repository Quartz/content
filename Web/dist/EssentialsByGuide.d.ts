import type * as Types from './types';
import type { CollectionPartsFragment } from './CollectionParts';
import * as Apollo from '@apollo/client';
export declare type EssentialsByGuideQueryVariables = Types.Exact<{
    slug: Types.Scalars['String'];
}>;
export declare type EssentialsByGuideQuery = {
    __typename?: 'RootQuery';
    guides?: Types.Maybe<{
        __typename?: 'RootQueryToGuideConnection';
        nodes?: Types.Maybe<Array<Types.Maybe<{
            __typename?: 'Guide';
            id: string;
            essentials?: Types.Maybe<{
                __typename?: 'GuideToCollectionConnection';
                nodes?: Types.Maybe<Array<Types.Maybe<({
                    __typename?: 'Collection';
                } & CollectionPartsFragment)>>>;
            }>;
        }>>>;
    }>;
};
export declare const EssentialsByGuideDocument: Apollo.DocumentNode;
/**
 * __useEssentialsByGuideQuery__
 *
 * To run a query within a React component, call `useEssentialsByGuideQuery` and pass it any options that fit your needs.
 * When your component renders, `useEssentialsByGuideQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEssentialsByGuideQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export declare function useEssentialsByGuideQuery(baseOptions: Apollo.QueryHookOptions<EssentialsByGuideQuery, EssentialsByGuideQueryVariables>): Apollo.QueryResult<EssentialsByGuideQuery, Types.Exact<{
    slug: string;
}>>;
export declare function useEssentialsByGuideLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<EssentialsByGuideQuery, EssentialsByGuideQueryVariables>): Apollo.QueryTuple<EssentialsByGuideQuery, Types.Exact<{
    slug: string;
}>>;
export declare type EssentialsByGuideQueryHookResult = ReturnType<typeof useEssentialsByGuideQuery>;
export declare type EssentialsByGuideLazyQueryHookResult = ReturnType<typeof useEssentialsByGuideLazyQuery>;
export declare type EssentialsByGuideQueryResult = Apollo.QueryResult<EssentialsByGuideQuery, EssentialsByGuideQueryVariables>;
//# sourceMappingURL=EssentialsByGuide.d.ts.map