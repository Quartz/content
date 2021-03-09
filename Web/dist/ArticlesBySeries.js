import { gql } from '@apollo/client';
import { SeriesPartsFragmentDoc } from './SeriesParts';
import { ArticleTeaserPartsFragmentDoc } from './ArticleTeaserParts';
import * as Apollo from '@apollo/client';
const defaultOptions = {};
export const ArticlesBySeriesDocument = /*#__PURE__*/ gql `
    query ArticlesBySeries($after: String = "", $perPage: Int, $slug: [String]) {
  serieses(where: {slug: $slug}) {
    nodes {
      ...SeriesParts
      posts(after: $after, first: $perPage) {
        nodes {
          ...ArticleTeaserParts
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
${ArticleTeaserPartsFragmentDoc}`;
/**
 * __useArticlesBySeriesQuery__
 *
 * To run a query within a React component, call `useArticlesBySeriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useArticlesBySeriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useArticlesBySeriesQuery({
 *   variables: {
 *      after: // value for 'after'
 *      perPage: // value for 'perPage'
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useArticlesBySeriesQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useQuery(ArticlesBySeriesDocument, options);
}
export function useArticlesBySeriesLazyQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useLazyQuery(ArticlesBySeriesDocument, options);
}
//# sourceMappingURL=ArticlesBySeries.js.map