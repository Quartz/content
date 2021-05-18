import type * as Types from './types';

import type { CollectionPartsFragment } from './CollectionParts';
import { gql } from '@apollo/client';
import { CollectionPartsFragmentDoc } from './CollectionParts';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type CollectionQueryVariables = Types.Exact<{
  id: Types.Scalars['Int'];
  previewTime?: Types.Maybe<Types.Scalars['Int']>;
  previewToken?: Types.Maybe<Types.Scalars['String']>;
}>;


export type CollectionQuery = { __typename?: 'RootQuery', collections?: Types.Maybe<{ __typename?: 'RootQueryToCollectionConnection', nodes?: Types.Maybe<Array<Types.Maybe<(
      { __typename?: 'Collection' }
      & CollectionPartsFragment
    )>>> }> };


export const CollectionDocument = /*#__PURE__*/ gql`
    query Collection($id: Int!, $previewTime: Int, $previewToken: String) {
  collections(
    where: {id: $id, preview: {time: $previewTime, token: $previewToken}}
  ) {
    nodes {
      ...CollectionParts
    }
  }
}
    ${CollectionPartsFragmentDoc}`;

/**
 * __useCollectionQuery__
 *
 * To run a query within a React component, call `useCollectionQuery` and pass it any options that fit your needs.
 * When your component renders, `useCollectionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCollectionQuery({
 *   variables: {
 *      id: // value for 'id'
 *      previewTime: // value for 'previewTime'
 *      previewToken: // value for 'previewToken'
 *   },
 * });
 */
export function useCollectionQuery(baseOptions: Apollo.QueryHookOptions<CollectionQuery, CollectionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CollectionQuery, CollectionQueryVariables>(CollectionDocument, options);
      }
export function useCollectionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CollectionQuery, CollectionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CollectionQuery, CollectionQueryVariables>(CollectionDocument, options);
        }
export type CollectionQueryHookResult = ReturnType<typeof useCollectionQuery>;
export type CollectionLazyQueryHookResult = ReturnType<typeof useCollectionLazyQuery>;
export type CollectionQueryResult = Apollo.QueryResult<CollectionQuery, CollectionQueryVariables>;