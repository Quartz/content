import { gql } from '@apollo/client';
import { EmailListPartsFragmentDoc } from './EmailListParts';
import * as Apollo from '@apollo/client';
export const EmailListsBySlugDocument = /*#__PURE__*/ gql `
    query EmailListsBySlug($slug: [String]!) {
  emailLists(where: {slug: $slug}) {
    nodes {
      ...EmailListParts
      emails(first: 1) {
        nodes {
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
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useEmailListsBySlugQuery(baseOptions) {
    return Apollo.useQuery(EmailListsBySlugDocument, baseOptions);
}
export function useEmailListsBySlugLazyQuery(baseOptions) {
    return Apollo.useLazyQuery(EmailListsBySlugDocument, baseOptions);
}
//# sourceMappingURL=EmailListsBySlug.js.map