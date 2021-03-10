import type * as Types from './types';

import type { CollectionPartsFragment } from './CollectionParts';
import { gql } from '@apollo/client';
import { CollectionPartsFragmentDoc } from './CollectionParts';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type HomeCollectionPreviewQueryVariables = Types.Exact<{
  id: Types.Scalars['Int'];
  time: Types.Scalars['Int'];
  token: Types.Scalars['String'];
}>;


export type HomeCollectionPreviewQuery = { __typename?: 'RootQuery', collections?: Types.Maybe<{ __typename?: 'RootQueryToCollectionConnection', nodes?: Types.Maybe<Array<Types.Maybe<(
      { __typename?: 'Collection' }
      & CollectionPartsFragment
    )>>> }> };


export const HomeCollectionPreviewDocument = /*#__PURE__*/ gql`
    query HomeCollectionPreview($id: Int!, $time: Int!, $token: String!) {
  collections(where: {id: $id, preview: {time: $time, token: $token}}) {
    nodes {
      ...CollectionParts
    }
  }
}
    ${CollectionPartsFragmentDoc}`;

/**
 * __useHomeCollectionPreviewQuery__
 *
 * To run a query within a React component, call `useHomeCollectionPreviewQuery` and pass it any options that fit your needs.
 * When your component renders, `useHomeCollectionPreviewQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHomeCollectionPreviewQuery({
 *   variables: {
 *      id: // value for 'id'
 *      time: // value for 'time'
 *      token: // value for 'token'
 *   },
 * });
 */
export function useHomeCollectionPreviewQuery(baseOptions: Apollo.QueryHookOptions<HomeCollectionPreviewQuery, HomeCollectionPreviewQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<HomeCollectionPreviewQuery, HomeCollectionPreviewQueryVariables>(HomeCollectionPreviewDocument, options);
      }
export function useHomeCollectionPreviewLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HomeCollectionPreviewQuery, HomeCollectionPreviewQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<HomeCollectionPreviewQuery, HomeCollectionPreviewQueryVariables>(HomeCollectionPreviewDocument, options);
        }
export type HomeCollectionPreviewQueryHookResult = ReturnType<typeof useHomeCollectionPreviewQuery>;
export type HomeCollectionPreviewLazyQueryHookResult = ReturnType<typeof useHomeCollectionPreviewLazyQuery>;
export type HomeCollectionPreviewQueryResult = Apollo.QueryResult<HomeCollectionPreviewQuery, HomeCollectionPreviewQueryVariables>;