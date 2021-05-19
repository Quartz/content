import { gql } from '@apollo/client';
import { TagPartsFragmentDoc } from './TagParts';
import { EmailPartsFragmentDoc } from './EmailParts';
import { ArticleTeaserPartsFragmentDoc } from './ArticleTeaserParts';
import * as Apollo from '@apollo/client';
const defaultOptions = {};
export const ContentByTagDocument = /*#__PURE__*/ gql `
    query ContentByTag($slug: String!, $perPage: Int = 10, $after: String) {
  tags(where: {slug: [$slug]}) {
    nodes {
      ...TagParts
    }
  }
  tagContent(after: $after, first: $perPage, where: {slug: $slug}) {
    nodes {
      ... on Email {
        ...EmailParts
        emailLists {
          nodes {
            slug
          }
        }
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
    ${TagPartsFragmentDoc}
${EmailPartsFragmentDoc}
${ArticleTeaserPartsFragmentDoc}`;
/**
 * __useContentByTagQuery__
 *
 * To run a query within a React component, call `useContentByTagQuery` and pass it any options that fit your needs.
 * When your component renders, `useContentByTagQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useContentByTagQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *      perPage: // value for 'perPage'
 *      after: // value for 'after'
 *   },
 * });
 */
export function useContentByTagQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useQuery(ContentByTagDocument, options);
}
export function useContentByTagLazyQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useLazyQuery(ContentByTagDocument, options);
}
//# sourceMappingURL=ContentByTag.js.map