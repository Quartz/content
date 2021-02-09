import type * as Types from './types';

import type { EmailPartsFragment } from './EmailParts';
import type { EmailListPartsFragment } from './EmailListParts';
import { gql } from '@apollo/client';
import { EmailPartsFragmentDoc } from './EmailParts';
import { EmailListPartsFragmentDoc } from './EmailListParts';
import * as Apollo from '@apollo/client';
export type EmailsByTagQueryVariables = Types.Exact<{
  tags?: Types.Maybe<Array<Types.Maybe<Types.Scalars['String']>>>;
}>;


export type EmailsByTagQuery = { __typename?: 'RootQuery', emails?: Types.Maybe<{ __typename?: 'RootQueryToEmailConnection', nodes?: Types.Maybe<Array<Types.Maybe<(
      { __typename?: 'Email', html?: Types.Maybe<string>, emailLists?: Types.Maybe<{ __typename?: 'EmailToEmailListConnection', nodes?: Types.Maybe<Array<Types.Maybe<(
          { __typename?: 'EmailList' }
          & EmailListPartsFragment
        )>>> }> }
      & EmailPartsFragment
    )>>> }> };


export const EmailsByTagDocument = /*#__PURE__*/ gql`
    query EmailsByTag($tags: [String]) {
  emails(where: {tagSlugIn: $tags}) {
    nodes {
      ...EmailParts
      html
      emailLists {
        nodes {
          ...EmailListParts
        }
      }
    }
  }
}
    ${EmailPartsFragmentDoc}
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
 *      tags: // value for 'tags'
 *   },
 * });
 */
export function useEmailsByTagQuery(baseOptions?: Apollo.QueryHookOptions<EmailsByTagQuery, EmailsByTagQueryVariables>) {
        return Apollo.useQuery<EmailsByTagQuery, EmailsByTagQueryVariables>(EmailsByTagDocument, baseOptions);
      }
export function useEmailsByTagLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<EmailsByTagQuery, EmailsByTagQueryVariables>) {
          return Apollo.useLazyQuery<EmailsByTagQuery, EmailsByTagQueryVariables>(EmailsByTagDocument, baseOptions);
        }
export type EmailsByTagQueryHookResult = ReturnType<typeof useEmailsByTagQuery>;
export type EmailsByTagLazyQueryHookResult = ReturnType<typeof useEmailsByTagLazyQuery>;
export type EmailsByTagQueryResult = Apollo.QueryResult<EmailsByTagQuery, EmailsByTagQueryVariables>;