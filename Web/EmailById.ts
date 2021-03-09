import type * as Types from './types';

import type { EmailPartsFragment } from './EmailParts';
import type { EmailListPartsFragment } from './EmailListParts';
import { gql } from '@apollo/client';
import { EmailPartsFragmentDoc } from './EmailParts';
import { EmailListPartsFragmentDoc } from './EmailListParts';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type EmailByIdQueryVariables = Types.Exact<{
  id: Types.Scalars['ID'];
}>;


export type EmailByIdQuery = { __typename?: 'RootQuery', email?: Types.Maybe<(
    { __typename?: 'Email', html?: Types.Maybe<string>, emailLists?: Types.Maybe<{ __typename?: 'EmailToEmailListConnection', nodes?: Types.Maybe<Array<Types.Maybe<(
        { __typename?: 'EmailList' }
        & EmailListPartsFragment
      )>>> }> }
    & EmailPartsFragment
  )> };


export const EmailByIdDocument = /*#__PURE__*/ gql`
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
export function useEmailByIdQuery(baseOptions: Apollo.QueryHookOptions<EmailByIdQuery, EmailByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<EmailByIdQuery, EmailByIdQueryVariables>(EmailByIdDocument, options);
      }
export function useEmailByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<EmailByIdQuery, EmailByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<EmailByIdQuery, EmailByIdQueryVariables>(EmailByIdDocument, options);
        }
export type EmailByIdQueryHookResult = ReturnType<typeof useEmailByIdQuery>;
export type EmailByIdLazyQueryHookResult = ReturnType<typeof useEmailByIdLazyQuery>;
export type EmailByIdQueryResult = Apollo.QueryResult<EmailByIdQuery, EmailByIdQueryVariables>;