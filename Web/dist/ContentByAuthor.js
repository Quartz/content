import { gql } from '@apollo/client';
import { AuthorPartsFragmentDoc } from './AuthorParts';
import { EmailPartsFragmentDoc } from './EmailParts';
import { ArticleTeaserPartsFragmentDoc } from './ArticleTeaserParts';
import * as Apollo from '@apollo/client';
const defaultOptions = {};
export const ContentByAuthorDocument = /*#__PURE__*/ gql `
    query ContentByAuthor($slug: String!, $perPage: Int! = 10, $after: String = "") {
  authors: coAuthors(where: {name: [$slug]}) {
    nodes {
      ...AuthorParts
    }
  }
  authorContent(after: $after, first: $perPage, where: {slug: $slug}) {
    nodes {
      ... on Email {
        ...EmailParts
      }
      ... on Post {
        ...ArticleTeaserParts
      }
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}
    ${AuthorPartsFragmentDoc}
${EmailPartsFragmentDoc}
${ArticleTeaserPartsFragmentDoc}`;
/**
 * __useContentByAuthorQuery__
 *
 * To run a query within a React component, call `useContentByAuthorQuery` and pass it any options that fit your needs.
 * When your component renders, `useContentByAuthorQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useContentByAuthorQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *      perPage: // value for 'perPage'
 *      after: // value for 'after'
 *   },
 * });
 */
export function useContentByAuthorQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useQuery(ContentByAuthorDocument, options);
}
export function useContentByAuthorLazyQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useLazyQuery(ContentByAuthorDocument, options);
}
//# sourceMappingURL=ContentByAuthor.js.map