import { gql } from '@apollo/client';
import { ArticleTeaserPartsFragmentDoc } from './ArticleTeaserParts';
import * as Apollo from '@apollo/client';
export const LatestArticlesDocument = /*#__PURE__*/ gql `
    query LatestArticles($after: String = "", $edition: EditionName, $postsPerPage: Int) {
  posts(after: $after, first: $postsPerPage, where: {edition: $edition}) {
    nodes {
      ...ArticleTeaserParts
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}
    ${ArticleTeaserPartsFragmentDoc}`;
/**
 * __useLatestArticlesQuery__
 *
 * To run a query within a React component, call `useLatestArticlesQuery` and pass it any options that fit your needs.
 * When your component renders, `useLatestArticlesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLatestArticlesQuery({
 *   variables: {
 *      after: // value for 'after'
 *      edition: // value for 'edition'
 *      postsPerPage: // value for 'postsPerPage'
 *   },
 * });
 */
export function useLatestArticlesQuery(baseOptions) {
    return Apollo.useQuery(LatestArticlesDocument, baseOptions);
}
export function useLatestArticlesLazyQuery(baseOptions) {
    return Apollo.useLazyQuery(LatestArticlesDocument, baseOptions);
}
//# sourceMappingURL=LatestArticles.js.map