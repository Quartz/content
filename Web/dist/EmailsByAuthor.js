import { gql } from '@apollo/client';
import { AuthorPartsFragmentDoc } from './AuthorParts';
import { EmailTeaserPartsFragmentDoc } from './EmailTeaserParts';
import { EmailListPartsFragmentDoc } from './EmailListParts';
import * as Apollo from '@apollo/client';
const defaultOptions = {};
export const EmailsByAuthorDocument = /*#__PURE__*/ gql `
    query EmailsByAuthor($after: String = "", $perPage: Int = 10, $slug: [String]) {
  authors: coAuthors(where: {name: $slug}) {
    nodes {
      ...AuthorParts
      emails(after: $after, first: $perPage) {
        nodes {
          ...EmailTeaserParts
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
  }
}
    ${AuthorPartsFragmentDoc}
${EmailTeaserPartsFragmentDoc}
${EmailListPartsFragmentDoc}`;
/**
 * __useEmailsByAuthorQuery__
 *
 * To run a query within a React component, call `useEmailsByAuthorQuery` and pass it any options that fit your needs.
 * When your component renders, `useEmailsByAuthorQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEmailsByAuthorQuery({
 *   variables: {
 *      after: // value for 'after'
 *      perPage: // value for 'perPage'
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useEmailsByAuthorQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useQuery(EmailsByAuthorDocument, options);
}
export function useEmailsByAuthorLazyQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useLazyQuery(EmailsByAuthorDocument, options);
}
//# sourceMappingURL=EmailsByAuthor.js.map