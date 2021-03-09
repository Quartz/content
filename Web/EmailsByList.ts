import type * as Types from './types';

import type { EmailListPartsFragment } from './EmailListParts';
import type { EmailPartsFragment } from './EmailParts';
import { gql } from '@apollo/client';
import { EmailListPartsFragmentDoc } from './EmailListParts';
import { EmailPartsFragmentDoc } from './EmailParts';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type EmailsByListQueryVariables = Types.Exact<{
  after?: Types.Maybe<Types.Scalars['String']>;
  perPage?: Types.Maybe<Types.Scalars['Int']>;
  slug: Array<Types.Maybe<Types.Scalars['String']>> | Types.Maybe<Types.Scalars['String']>;
  tags?: Types.Maybe<Array<Types.Maybe<Types.Scalars['String']>> | Types.Maybe<Types.Scalars['String']>>;
}>;


export type EmailsByListQuery = { __typename?: 'RootQuery', emailLists?: Types.Maybe<{ __typename?: 'RootQueryToEmailListConnection', nodes?: Types.Maybe<Array<Types.Maybe<(
      { __typename?: 'EmailList', emails?: Types.Maybe<{ __typename?: 'EmailListToEmailConnection', nodes?: Types.Maybe<Array<Types.Maybe<(
          { __typename?: 'Email' }
          & EmailPartsFragment
        )>>>, pageInfo?: Types.Maybe<{ __typename?: 'WPPageInfo', endCursor?: Types.Maybe<string>, hasNextPage: boolean }> }> }
      & EmailListPartsFragment
    )>>> }> };


export const EmailsByListDocument = /*#__PURE__*/ gql`
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
export function useEmailsByListQuery(baseOptions: Apollo.QueryHookOptions<EmailsByListQuery, EmailsByListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<EmailsByListQuery, EmailsByListQueryVariables>(EmailsByListDocument, options);
      }
export function useEmailsByListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<EmailsByListQuery, EmailsByListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<EmailsByListQuery, EmailsByListQueryVariables>(EmailsByListDocument, options);
        }
export type EmailsByListQueryHookResult = ReturnType<typeof useEmailsByListQuery>;
export type EmailsByListLazyQueryHookResult = ReturnType<typeof useEmailsByListLazyQuery>;
export type EmailsByListQueryResult = Apollo.QueryResult<EmailsByListQuery, EmailsByListQueryVariables>;