import { gql } from '@apollo/client';
import { EmailTeaserPartsFragmentDoc } from './EmailTeaserParts';
import { EmailListPartsFragmentDoc } from './EmailListParts';
import * as Apollo from '@apollo/client';
const defaultOptions = {};
export const EmailsByTagDocument = /*#__PURE__*/ gql `
    query EmailsByTag($after: String = "", $perPage: Int = 10, $slug: [String]) {
  emails(after: $after, first: $perPage, where: {tagSlugIn: $slug}) {
    nodes {
      ...EmailTeaserParts
      html
      link
      emailLists {
        nodes {
          ...EmailListParts
        }
      }
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}
    ${EmailTeaserPartsFragmentDoc}
${EmailListPartsFragmentDoc}`;
/**
 * __useEmailsByTagQuery__
 *
 * To run a query within a React component, call `useEmailsByTagQuery` and pass it any options that fit your needs.
 * When your component renders, `useEmailsByTagQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEmailsByTagQuery({
 *   variables: {
 *      after: // value for 'after'
 *      perPage: // value for 'perPage'
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useEmailsByTagQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useQuery(EmailsByTagDocument, options);
}
export function useEmailsByTagLazyQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useLazyQuery(EmailsByTagDocument, options);
}
//# sourceMappingURL=EmailsByTag.js.map