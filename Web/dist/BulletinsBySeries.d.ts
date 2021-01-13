import type * as Types from './types';
import type { SeriesPartsFragment } from './SeriesParts';
import type { BulletinPartsFragment } from './BulletinParts';
import * as Apollo from '@apollo/client';
export declare type BulletinsBySeriesQueryVariables = Types.Exact<{
    after?: Types.Maybe<Types.Scalars['String']>;
    perPage?: Types.Maybe<Types.Scalars['Int']>;
    slug?: Types.Maybe<Array<Types.Maybe<Types.Scalars['String']>>>;
}>;
export declare type BulletinsBySeriesQuery = {
    __typename?: 'RootQuery';
    serieses?: Types.Maybe<{
        __typename?: 'RootQueryToSeriesConnection';
        nodes?: Types.Maybe<Array<Types.Maybe<({
            __typename?: 'Series';
            posts?: Types.Maybe<{
                __typename?: 'SeriesToBulletinConnection';
                nodes?: Types.Maybe<Array<Types.Maybe<({
                    __typename?: 'Bulletin';
                } & BulletinPartsFragment)>>>;
                pageInfo?: Types.Maybe<{
                    __typename?: 'WPPageInfo';
                    endCursor?: Types.Maybe<string>;
                    hasNextPage: boolean;
                }>;
            }>;
        } & SeriesPartsFragment)>>>;
    }>;
};
export declare const BulletinsBySeriesDocument: Apollo.DocumentNode;
/**
 * __useBulletinsBySeriesQuery__
 *
 * To run a query within a React component, call `useBulletinsBySeriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useBulletinsBySeriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBulletinsBySeriesQuery({
 *   variables: {
 *      after: // value for 'after'
 *      perPage: // value for 'perPage'
 *      slug: // value for 'slug'
 *   },
 * });
 */
export declare function useBulletinsBySeriesQuery(baseOptions?: Apollo.QueryHookOptions<BulletinsBySeriesQuery, BulletinsBySeriesQueryVariables>): Apollo.QueryResult<BulletinsBySeriesQuery, Types.Exact<{
    after?: string | null | undefined;
    perPage?: number | null | undefined;
    slug?: (string | null)[] | null | undefined;
}>>;
export declare function useBulletinsBySeriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BulletinsBySeriesQuery, BulletinsBySeriesQueryVariables>): Apollo.QueryTuple<BulletinsBySeriesQuery, Types.Exact<{
    after?: string | null | undefined;
    perPage?: number | null | undefined;
    slug?: (string | null)[] | null | undefined;
}>>;
export declare type BulletinsBySeriesQueryHookResult = ReturnType<typeof useBulletinsBySeriesQuery>;
export declare type BulletinsBySeriesLazyQueryHookResult = ReturnType<typeof useBulletinsBySeriesLazyQuery>;
export declare type BulletinsBySeriesQueryResult = Apollo.QueryResult<BulletinsBySeriesQuery, BulletinsBySeriesQueryVariables>;
//# sourceMappingURL=BulletinsBySeries.d.ts.map