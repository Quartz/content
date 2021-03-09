import { gql } from '@apollo/client';
import { ArticleTeaserPartsFragmentDoc } from './ArticleTeaserParts';
import { EmailPartsFragmentDoc } from './EmailParts';
import * as Apollo from '@apollo/client';
const defaultOptions = {};
export const LatestFeedContentDocument = /*#__PURE__*/ gql `
    query LatestFeedContent($after: String = "", $perPage: Int) {
  feedContent(after: $after, first: $perPage) {
    nodes {
      ... on Post {
        ...ArticleTeaserParts
      }
      ... on Email {
        ...EmailParts
        link
        emailLists {
          nodes {
            slug
          }
        }
      }
    }
    pageInfo {
      endCursor
    }
  }
}
    ${ArticleTeaserPartsFragmentDoc}
${EmailPartsFragmentDoc}`;
/**
 * __useLatestFeedContentQuery__
 *
 * To run a query within a React component, call `useLatestFeedContentQuery` and pass it any options that fit your needs.
 * When your component renders, `useLatestFeedContentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLatestFeedContentQuery({
 *   variables: {
 *      after: // value for 'after'
 *      perPage: // value for 'perPage'
 *   },
 * });
 */
export function useLatestFeedContentQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useQuery(LatestFeedContentDocument, options);
}
export function useLatestFeedContentLazyQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useLazyQuery(LatestFeedContentDocument, options);
}
//# sourceMappingURL=LatestFeedContent.js.map