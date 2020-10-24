import type * as Types from './types';
import type { GuidePartsFragment } from './GuideParts';
import * as Apollo from '@apollo/client';
export declare type GuidesBySlugQueryVariables = Types.Exact<{
    perPage: Types.Scalars['Int'];
    slugs: Array<Types.Maybe<Types.Scalars['String']>>;
}>;
export declare type GuidesBySlugQuery = ({
    __typename?: 'RootQuery';
} & {
    guides?: Types.Maybe<({
        __typename?: 'RootQueryToGuideConnection';
    } & {
        nodes?: Types.Maybe<Array<Types.Maybe<({
            __typename?: 'Guide';
        } & GuidePartsFragment)>>>;
    })>;
});
export declare const GuidesBySlugDocument: Apollo.DocumentNode;
/**
 * __useGuidesBySlugQuery__
 *
 * To run a query within a React component, call `useGuidesBySlugQuery` and pass it any options that fit your needs.
 * When your component renders, `useGuidesBySlugQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGuidesBySlugQuery({
 *   variables: {
 *      perPage: // value for 'perPage'
 *      slugs: // value for 'slugs'
 *   },
 * });
 */
export declare function useGuidesBySlugQuery(baseOptions?: Apollo.QueryHookOptions<GuidesBySlugQuery, GuidesBySlugQueryVariables>): Apollo.QueryResult<GuidesBySlugQuery, Types.Exact<{
    perPage: number;
    slugs: (string | null)[];
}>>;
export declare function useGuidesBySlugLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GuidesBySlugQuery, GuidesBySlugQueryVariables>): Apollo.QueryTuple<GuidesBySlugQuery, Types.Exact<{
    perPage: number;
    slugs: (string | null)[];
}>>;
export declare type GuidesBySlugQueryHookResult = ReturnType<typeof useGuidesBySlugQuery>;
export declare type GuidesBySlugLazyQueryHookResult = ReturnType<typeof useGuidesBySlugLazyQuery>;
export declare type GuidesBySlugQueryResult = Apollo.QueryResult<GuidesBySlugQuery, GuidesBySlugQueryVariables>;
