import type * as Types from './types';

import type { SeriesPartsFragment } from './SeriesParts';
import type { BulletinPartsFragment } from './BulletinParts';
import { gql } from '@apollo/client';
import { SeriesPartsFragmentDoc } from './SeriesParts';
import { BulletinPartsFragmentDoc } from './BulletinParts';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type BulletinsBySeriesQueryVariables = Types.Exact<{
  after?: Types.Maybe<Types.Scalars['String']>;
  perPage?: Types.Maybe<Types.Scalars['Int']>;
  slug?: Types.Maybe<Array<Types.Maybe<Types.Scalars['String']>> | Types.Maybe<Types.Scalars['String']>>;
}>;


export type BulletinsBySeriesQuery = { __typename?: 'RootQuery', serieses?: Types.Maybe<{ __typename?: 'RootQueryToSeriesConnection', nodes?: Types.Maybe<Array<Types.Maybe<(
      { __typename?: 'Series', posts?: Types.Maybe<{ __typename?: 'SeriesToBulletinConnection', nodes?: Types.Maybe<Array<Types.Maybe<(
          { __typename?: 'Bulletin' }
          & BulletinPartsFragment
        )>>>, pageInfo?: Types.Maybe<{ __typename?: 'WPPageInfo', endCursor?: Types.Maybe<string>, hasNextPage: boolean }> }> }
      & SeriesPartsFragment
    )>>> }> };


export const BulletinsBySeriesDocument = /*#__PURE__*/ gql`
    query BulletinsBySeries($after: String = "", $perPage: Int, $slug: [String]) {
  serieses(where: {slug: $slug}) {
    nodes {
      ...SeriesParts
      posts: bulletins(after: $after, first: $perPage) {
        nodes {
          ...BulletinParts
        }
        pageInfo {
          endCursor
          hasNextPage
        }
      }
    }
  }
}
    ${SeriesPartsFragmentDoc}
${BulletinPartsFragmentDoc}`;

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
export function useBulletinsBySeriesQuery(baseOptions?: Apollo.QueryHookOptions<BulletinsBySeriesQuery, BulletinsBySeriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BulletinsBySeriesQuery, BulletinsBySeriesQueryVariables>(BulletinsBySeriesDocument, options);
      }
export function useBulletinsBySeriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BulletinsBySeriesQuery, BulletinsBySeriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BulletinsBySeriesQuery, BulletinsBySeriesQueryVariables>(BulletinsBySeriesDocument, options);
        }
export type BulletinsBySeriesQueryHookResult = ReturnType<typeof useBulletinsBySeriesQuery>;
export type BulletinsBySeriesLazyQueryHookResult = ReturnType<typeof useBulletinsBySeriesLazyQuery>;
export type BulletinsBySeriesQueryResult = Apollo.QueryResult<BulletinsBySeriesQuery, BulletinsBySeriesQueryVariables>;