import { gql } from '@apollo/client';
import { ArticleTeaserPartsFragmentDoc } from './ArticleTeaserParts';
import { EmailPartsFragmentDoc } from './EmailParts';
import * as Apollo from '@apollo/client';
const defaultOptions = {};
export const FirstFeedContentByRecencyDocument = /*#__PURE__*/ gql `
    query FirstFeedContentByRecency($first: Int) {
  feedContent(first: $first) @connection(key: "FirstFeedContentByRecency") {
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
 * __useFirstFeedContentByRecencyQuery__
 *
 * To run a query within a React component, call `useFirstFeedContentByRecencyQuery` and pass it any options that fit your needs.
 * When your component renders, `useFirstFeedContentByRecencyQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFirstFeedContentByRecencyQuery({
 *   variables: {
 *      first: // value for 'first'
 *   },
 * });
 */
export function useFirstFeedContentByRecencyQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useQuery(FirstFeedContentByRecencyDocument, options);
}
export function useFirstFeedContentByRecencyLazyQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useLazyQuery(FirstFeedContentByRecencyDocument, options);
}
//# sourceMappingURL=FirstFeedContentByRecency.js.map