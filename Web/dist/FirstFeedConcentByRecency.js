import { gql } from '@apollo/client';
import { ArticleTeaserPartsFragmentDoc } from './ArticleTeaserParts';
import { EmailTeaserPartsFragmentDoc } from './EmailTeaserParts';
import * as Apollo from '@apollo/client';
const defaultOptions = {};
export const FirstFeedConcentByRecencyDocument = /*#__PURE__*/ gql `
    query FirstFeedConcentByRecency($first: Int) {
  feedContent(first: $first) @connection(key: "FirstFeedConcentByRecency") {
    nodes {
      ... on Post {
        ...ArticleTeaserParts
      }
      ... on Email {
        ...EmailTeaserParts
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
${EmailTeaserPartsFragmentDoc}`;
/**
 * __useFirstFeedConcentByRecencyQuery__
 *
 * To run a query within a React component, call `useFirstFeedConcentByRecencyQuery` and pass it any options that fit your needs.
 * When your component renders, `useFirstFeedConcentByRecencyQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFirstFeedConcentByRecencyQuery({
 *   variables: {
 *      first: // value for 'first'
 *   },
 * });
 */
export function useFirstFeedConcentByRecencyQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useQuery(FirstFeedConcentByRecencyDocument, options);
}
export function useFirstFeedConcentByRecencyLazyQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useLazyQuery(FirstFeedConcentByRecencyDocument, options);
}
//# sourceMappingURL=FirstFeedConcentByRecency.js.map