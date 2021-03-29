import { gql } from '@apollo/client';
import { EmailListPartsFragmentDoc } from './EmailListParts';
import * as Apollo from '@apollo/client';
const defaultOptions = {};
export const EmailListsBySlugDocument = /*#__PURE__*/ gql `
    query EmailListsBySlug($perPage: Int = 10, $slug: [String]!) {
  emailLists(first: $perPage, where: {slug: $slug}) {
    nodes {
      ...EmailListParts
      emails(first: 1) {
        nodes {
          id
          emailId
        }
      }
    }
  }
}
    ${EmailListPartsFragmentDoc}`;
/**
 * __useEmailListsBySlugQuery__
 *
 * To run a query within a React component, call `useEmailListsBySlugQuery` and pass it any options that fit your needs.
 * When your component renders, `useEmailListsBySlugQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEmailListsBySlugQuery({
 *   variables: {
 *      perPage: // value for 'perPage'
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useEmailListsBySlugQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useQuery(EmailListsBySlugDocument, options);
}
export function useEmailListsBySlugLazyQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useLazyQuery(EmailListsBySlugDocument, options);
}
//# sourceMappingURL=EmailListsBySlug.js.map