import type * as Types from './types';

import type { CollectionPartsFragment } from './CollectionParts';
import type { BulletinDataPartsFragment } from './BulletinDataParts';
import { gql } from '@apollo/client';
import { CollectionPartsFragmentDoc } from './CollectionParts';
import { BulletinDataPartsFragmentDoc } from './BulletinDataParts';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type NonHomeEssentialsQueryVariables = Types.Exact<{
  after?: Types.Maybe<Types.Scalars['String']>;
  perPage?: Types.Maybe<Types.Scalars['Int']>;
}>;


export type NonHomeEssentialsQuery = { __typename?: 'RootQuery', collections?: Types.Maybe<{ __typename?: 'RootQueryToCollectionConnection', nodes?: Types.Maybe<Array<Types.Maybe<(
      { __typename?: 'Collection', bulletin?: Types.Maybe<(
        { __typename?: 'BulletinData' }
        & BulletinDataPartsFragment
      )> }
      & CollectionPartsFragment
    )>>>, pageInfo?: Types.Maybe<{ __typename?: 'WPPageInfo', endCursor?: Types.Maybe<string>, hasNextPage: boolean }> }> };


export const NonHomeEssentialsDocument = /*#__PURE__*/ gql`
    query NonHomeEssentials($after: String = "", $perPage: Int) {
  collections(first: $perPage, after: $after, where: {tagNotIn: 400}) {
    nodes {
      ...CollectionParts
      bulletin {
        ...BulletinDataParts
      }
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}
    ${CollectionPartsFragmentDoc}
${BulletinDataPartsFragmentDoc}`;

/**
 * __useNonHomeEssentialsQuery__
 *
 * To run a query within a React component, call `useNonHomeEssentialsQuery` and pass it any options that fit your needs.
 * When your component renders, `useNonHomeEssentialsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNonHomeEssentialsQuery({
 *   variables: {
 *      after: // value for 'after'
 *      perPage: // value for 'perPage'
 *   },
 * });
 */
export function useNonHomeEssentialsQuery(baseOptions?: Apollo.QueryHookOptions<NonHomeEssentialsQuery, NonHomeEssentialsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<NonHomeEssentialsQuery, NonHomeEssentialsQueryVariables>(NonHomeEssentialsDocument, options);
      }
export function useNonHomeEssentialsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<NonHomeEssentialsQuery, NonHomeEssentialsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<NonHomeEssentialsQuery, NonHomeEssentialsQueryVariables>(NonHomeEssentialsDocument, options);
        }
export type NonHomeEssentialsQueryHookResult = ReturnType<typeof useNonHomeEssentialsQuery>;
export type NonHomeEssentialsLazyQueryHookResult = ReturnType<typeof useNonHomeEssentialsLazyQuery>;
export type NonHomeEssentialsQueryResult = Apollo.QueryResult<NonHomeEssentialsQuery, NonHomeEssentialsQueryVariables>;