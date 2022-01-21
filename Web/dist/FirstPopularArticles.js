import { gql } from '@apollo/client';
import { ArticleTeaserPartsFragmentDoc } from './ArticleTeaserParts';
import * as Apollo from '@apollo/client';
const defaultOptions = {};
export const FirstPopularArticlesDocument = /*#__PURE__*/ gql `
    query FirstPopularArticles($edition: EditionName, $first: Int) {
  posts(first: $first, where: {popular: {edition: $edition}}) @connection(key: "FirstPopularArticles") {
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
 * __useFirstPopularArticlesQuery__
 *
 * To run a query within a React component, call `useFirstPopularArticlesQuery` and pass it any options that fit your needs.
 * When your component renders, `useFirstPopularArticlesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFirstPopularArticlesQuery({
 *   variables: {
 *      edition: // value for 'edition'
 *      first: // value for 'first'
 *   },
 * });
 */
export function useFirstPopularArticlesQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useQuery(FirstPopularArticlesDocument, options);
}
export function useFirstPopularArticlesLazyQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useLazyQuery(FirstPopularArticlesDocument, options);
}
//# sourceMappingURL=FirstPopularArticles.js.map