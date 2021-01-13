import { gql } from '@apollo/client';
import { AuthorPartsFragmentDoc } from './AuthorParts';
import { ArticleTeaserPartsFragmentDoc } from './ArticleTeaserParts';
import * as Apollo from '@apollo/client';
export const ArticlesByAuthorDocument = /*#__PURE__*/ gql `
    query ArticlesByAuthor($after: String = "", $perPage: Int!, $slug: [String]) {
  authors: coAuthors(where: {name: $slug}) {
    nodes {
      ...AuthorParts
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
    ${AuthorPartsFragmentDoc}
${ArticleTeaserPartsFragmentDoc}`;
/**
 * __useArticlesByAuthorQuery__
 *
 * To run a query within a React component, call `useArticlesByAuthorQuery` and pass it any options that fit your needs.
 * When your component renders, `useArticlesByAuthorQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useArticlesByAuthorQuery({
 *   variables: {
 *      after: // value for 'after'
 *      perPage: // value for 'perPage'
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useArticlesByAuthorQuery(baseOptions) {
    return Apollo.useQuery(ArticlesByAuthorDocument, baseOptions);
}
export function useArticlesByAuthorLazyQuery(baseOptions) {
    return Apollo.useLazyQuery(ArticlesByAuthorDocument, baseOptions);
}
//# sourceMappingURL=ArticlesByAuthor.js.map