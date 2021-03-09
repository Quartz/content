import { gql } from '@apollo/client';
import { EmailPartsFragmentDoc } from './EmailParts';
import { EmailListPartsFragmentDoc } from './EmailListParts';
import * as Apollo from '@apollo/client';
const defaultOptions = {};
export const EmailByIdDocument = /*#__PURE__*/ gql `
    query EmailById($id: ID!) {
  email(id: $id) {
    ...EmailParts
    html
    emailLists {
      nodes {
        ...EmailListParts
      }
    }
  }
}
    ${EmailPartsFragmentDoc}
${EmailListPartsFragmentDoc}`;
/**
 * __useEmailByIdQuery__
 *
 * To run a query within a React component, call `useEmailByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useEmailByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEmailByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useEmailByIdQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useQuery(EmailByIdDocument, options);
}
export function useEmailByIdLazyQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useLazyQuery(EmailByIdDocument, options);
}
//# sourceMappingURL=EmailById.js.map