import { gql } from '@apollo/client';
import { ArticleTeaserPartsFragmentDoc } from './ArticleTeaserParts';
import * as Apollo from '@apollo/client';
export const PopularArticlesDocument = /*#__PURE__*/ gql `
    query PopularArticles($edition: EditionName, $perPage: Int) {
  posts(first: $perPage, where: {popular: {edition: $edition}}) {
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
 * __usePopularArticlesQuery__
 *
 * To run a query within a React component, call `usePopularArticlesQuery` and pass it any options that fit your needs.
 * When your component renders, `usePopularArticlesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePopularArticlesQuery({
 *   variables: {
 *      edition: // value for 'edition'
 *      perPage: // value for 'perPage'
 *   },
 * });
 */
export function usePopularArticlesQuery(baseOptions) {
    return Apollo.useQuery(PopularArticlesDocument, baseOptions);
}
export function usePopularArticlesLazyQuery(baseOptions) {
    return Apollo.useLazyQuery(PopularArticlesDocument, baseOptions);
}
//# sourceMappingURL=ArticlesByPopularity.js.map