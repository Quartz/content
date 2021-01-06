import type * as Types from './types';

import type { CollectionPartsFragment } from './CollectionParts';
import { gql } from '@apollo/client';
import { CollectionPartsFragmentDoc } from './CollectionParts';
import * as Apollo from '@apollo/client';
export type CollectionsQueryVariables = Types.Exact<{
  first?: Types.Maybe<Types.Scalars['Int']>;
  after?: Types.Maybe<Types.Scalars['String']>;
}>;


export type CollectionsQuery = { __typename?: 'RootQuery', collections?: Types.Maybe<{ __typename?: 'RootQueryToCollectionConnection', pageInfo?: Types.Maybe<{ __typename?: 'WPPageInfo', endCursor?: Types.Maybe<string> }>, nodes?: Types.Maybe<Array<Types.Maybe<(
      { __typename?: 'Collection' }
      & CollectionPartsFragment
    )>>> }> };


export const CollectionsDocument = /*#__PURE__*/ gql`
    query Collections($first: Int = 10, $after: String) {
  collections(first: $first, after: $after) {
    pageInfo {
      endCursor
    }
    nodes {
      ...CollectionParts
    }
  }
}
    ${CollectionPartsFragmentDoc}`;

/**
 * __useCollectionsQuery__
 *
 * To run a query within a React component, call `useCollectionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCollectionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCollectionsQuery({
 *   variables: {
 *      first: // value for 'first'
 *      after: // value for 'after'
 *   },
 * });
 */
export function useCollectionsQuery(baseOptions?: Apollo.QueryHookOptions<CollectionsQuery, CollectionsQueryVariables>) {
        return Apollo.useQuery<CollectionsQuery, CollectionsQueryVariables>(CollectionsDocument, baseOptions);
      }
export function useCollectionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CollectionsQuery, CollectionsQueryVariables>) {
          return Apollo.useLazyQuery<CollectionsQuery, CollectionsQueryVariables>(CollectionsDocument, baseOptions);
        }
export type CollectionsQueryHookResult = ReturnType<typeof useCollectionsQuery>;
export type CollectionsLazyQueryHookResult = ReturnType<typeof useCollectionsLazyQuery>;
export type CollectionsQueryResult = Apollo.QueryResult<CollectionsQuery, CollectionsQueryVariables>;