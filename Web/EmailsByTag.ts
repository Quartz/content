import type * as Types from './types';

import type { EmailTeaserPartsFragment } from './EmailTeaserParts';
import type { EmailListPartsFragment } from './EmailListParts';
import { gql } from '@apollo/client';
import { EmailTeaserPartsFragmentDoc } from './EmailTeaserParts';
import { EmailListPartsFragmentDoc } from './EmailListParts';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type EmailsByTagQueryVariables = Types.Exact<{
  after?: Types.Maybe<Types.Scalars['String']>;
  perPage?: Types.Maybe<Types.Scalars['Int']>;
  slug?: Types.Maybe<Array<Types.Maybe<Types.Scalars['String']>> | Types.Maybe<Types.Scalars['String']>>;
}>;


export type EmailsByTagQuery = { __typename?: 'RootQuery', emails?: Types.Maybe<{ __typename?: 'RootQueryToEmailConnection', nodes?: Types.Maybe<Array<Types.Maybe<(
      { __typename?: 'Email', html?: Types.Maybe<string>, link?: Types.Maybe<string>, emailLists?: Types.Maybe<{ __typename?: 'EmailToEmailListConnection', nodes?: Types.Maybe<Array<Types.Maybe<(
          { __typename?: 'EmailList' }
          & EmailListPartsFragment
        )>>> }> }
      & EmailTeaserPartsFragment
    )>>>, pageInfo?: Types.Maybe<{ __typename?: 'WPPageInfo', endCursor?: Types.Maybe<string>, hasNextPage: boolean }> }> };


export const EmailsByTagDocument = /*#__PURE__*/ gql`
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
export function useEmailsByTagQuery(baseOptions?: Apollo.QueryHookOptions<EmailsByTagQuery, EmailsByTagQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<EmailsByTagQuery, EmailsByTagQueryVariables>(EmailsByTagDocument, options);
      }
export function useEmailsByTagLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<EmailsByTagQuery, EmailsByTagQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<EmailsByTagQuery, EmailsByTagQueryVariables>(EmailsByTagDocument, options);
        }
export type EmailsByTagQueryHookResult = ReturnType<typeof useEmailsByTagQuery>;
export type EmailsByTagLazyQueryHookResult = ReturnType<typeof useEmailsByTagLazyQuery>;
export type EmailsByTagQueryResult = Apollo.QueryResult<EmailsByTagQuery, EmailsByTagQueryVariables>;