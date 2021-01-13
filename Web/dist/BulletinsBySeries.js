import { gql } from '@apollo/client';
import { SeriesPartsFragmentDoc } from './SeriesParts';
import { BulletinPartsFragmentDoc } from './BulletinParts';
import * as Apollo from '@apollo/client';
export const BulletinsBySeriesDocument = /*#__PURE__*/ gql `
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
export function useBulletinsBySeriesQuery(baseOptions) {
    return Apollo.useQuery(BulletinsBySeriesDocument, baseOptions);
}
export function useBulletinsBySeriesLazyQuery(baseOptions) {
    return Apollo.useLazyQuery(BulletinsBySeriesDocument, baseOptions);
}
//# sourceMappingURL=BulletinsBySeries.js.map