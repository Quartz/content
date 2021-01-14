import { gql } from '@apollo/client';
import { EmailListPartsFragmentDoc } from './EmailListParts';
import { EmailPartsFragmentDoc } from './EmailParts';
import * as Apollo from '@apollo/client';
export const EmailsByListDocument = /*#__PURE__*/ gql `
    query EmailsByList($after: String = "", $perPage: Int = 10, $slug: [String]!, $tags: [String]) {
  emailLists(where: {slug: $slug}) {
    nodes {
      ...EmailListParts
      emails(after: $after, first: $perPage, where: {tagSlugIn: $tags}) {
        nodes {
          ...EmailParts
        }
        pageInfo {
          endCursor
          hasNextPage
        }
      }
    }
  }
}
    ${EmailListPartsFragmentDoc}
${EmailPartsFragmentDoc}`;
/**
 * __useEmailsByListQuery__
 *
 * To run a query within a React component, call `useEmailsByListQuery` and pass it any options that fit your needs.
 * When your component renders, `useEmailsByListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEmailsByListQuery({
 *   variables: {
 *      after: // value for 'after'
 *      perPage: // value for 'perPage'
 *      slug: // value for 'slug'
 *      tags: // value for 'tags'
 *   },
 * });
 */
export function useEmailsByListQuery(baseOptions) {
    return Apollo.useQuery(EmailsByListDocument, baseOptions);
}
export function useEmailsByListLazyQuery(baseOptions) {
    return Apollo.useLazyQuery(EmailsByListDocument, baseOptions);
}
//# sourceMappingURL=EmailsByList.js.map