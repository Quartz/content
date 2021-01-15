import { gql } from '@apollo/client';
import { ArticleTeaserPartsFragmentDoc } from './ArticleTeaserParts';
import * as Apollo from '@apollo/client';
export const TrendingArticlesDocument = /*#__PURE__*/ gql `
    query TrendingArticles {
  trendingPosts {
    nodes {
      ...ArticleTeaserParts
    }
  }
}
    ${ArticleTeaserPartsFragmentDoc}`;
/**
 * __useTrendingArticlesQuery__
 *
 * To run a query within a React component, call `useTrendingArticlesQuery` and pass it any options that fit your needs.
 * When your component renders, `useTrendingArticlesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTrendingArticlesQuery({
 *   variables: {
 *   },
 * });
 */
export function useTrendingArticlesQuery(baseOptions) {
    return Apollo.useQuery(TrendingArticlesDocument, baseOptions);
}
export function useTrendingArticlesLazyQuery(baseOptions) {
    return Apollo.useLazyQuery(TrendingArticlesDocument, baseOptions);
}
//# sourceMappingURL=TrendingArticles.js.map