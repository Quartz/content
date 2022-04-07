import type * as Types from './types';

import type { EmailTeaserPartsFragment } from './EmailTeaserParts';
import { gql } from '@apollo/client';
import { EmailTeaserPartsFragmentDoc } from './EmailTeaserParts';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type LatestEmailByListQueryVariables = Types.Exact<{
  perPage?: Types.Maybe<Types.Scalars['Int']>;
  slug: Array<Types.Maybe<Types.Scalars['String']>> | Types.Maybe<Types.Scalars['String']>;
}>;


export type LatestEmailByListQuery = { __typename?: 'RootQuery', emailLists?: Types.Maybe<{ __typename?: 'RootQueryToEmailListConnection', nodes?: Types.Maybe<Array<Types.Maybe<{ __typename?: 'EmailList', id: string, emails?: Types.Maybe<{ __typename?: 'EmailListToEmailConnection', nodes?: Types.Maybe<Array<Types.Maybe<(
          { __typename?: 'Email', html?: Types.Maybe<string> }
          & EmailTeaserPartsFragment
        )>>> }> }>>> }> };


export const LatestEmailByListDocument = /*#__PURE__*/ gql`
    query LatestEmailByList($perPage: Int = 1, $slug: [String]!) {
  emailLists(first: $perPage, where: {slug: $slug}) {
    nodes {
      id
      emails(first: 1) {
        nodes {
          html
          ...EmailTeaserParts
        }
      }
    }
  }
}
    ${EmailTeaserPartsFragmentDoc}`;

/**
 * __useLatestEmailByListQuery__
 *
 * To run a query within a React component, call `useLatestEmailByListQuery` and pass it any options that fit your needs.
 * When your component renders, `useLatestEmailByListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLatestEmailByListQuery({
 *   variables: {
 *      perPage: // value for 'perPage'
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useLatestEmailByListQuery(baseOptions: Apollo.QueryHookOptions<LatestEmailByListQuery, LatestEmailByListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<LatestEmailByListQuery, LatestEmailByListQueryVariables>(LatestEmailByListDocument, options);
      }
export function useLatestEmailByListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LatestEmailByListQuery, LatestEmailByListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<LatestEmailByListQuery, LatestEmailByListQueryVariables>(LatestEmailByListDocument, options);
        }
export type LatestEmailByListQueryHookResult = ReturnType<typeof useLatestEmailByListQuery>;
export type LatestEmailByListLazyQueryHookResult = ReturnType<typeof useLatestEmailByListLazyQuery>;
export type LatestEmailByListQueryResult = Apollo.QueryResult<LatestEmailByListQuery, LatestEmailByListQueryVariables>;