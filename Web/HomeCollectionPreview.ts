import type * as Types from './types';

import type { HomeCollectionPartsFragment } from './HomeCollectionParts';
import { gql } from '@apollo/client';
import { HomeCollectionPartsFragmentDoc } from './HomeCollectionParts';
import * as Apollo from '@apollo/client';
export type HomeCollectionPreviewQueryVariables = Types.Exact<{
  id: Types.Scalars['Int'];
  time: Types.Scalars['Int'];
  token: Types.Scalars['String'];
}>;


export type HomeCollectionPreviewQuery = (
  { __typename?: 'RootQuery' }
  & { collections?: Types.Maybe<(
    { __typename?: 'RootQueryToCollectionConnection' }
    & { nodes?: Types.Maybe<Array<Types.Maybe<(
      { __typename?: 'Collection' }
      & HomeCollectionPartsFragment
    )>>> }
  )> }
);


export const HomeCollectionPreviewDocument = /*#__PURE__*/ gql`
    query HomeCollectionPreview($id: Int!, $time: Int!, $token: String!) {
  collections(where: {id: $id, preview: {time: $time, token: $token}}) {
    nodes {
      ...HomeCollectionParts
    }
  }
}
    ${HomeCollectionPartsFragmentDoc}`;

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
export function useHomeCollectionPreviewQuery(baseOptions?: Apollo.QueryHookOptions<HomeCollectionPreviewQuery, HomeCollectionPreviewQueryVariables>) {
        return Apollo.useQuery<HomeCollectionPreviewQuery, HomeCollectionPreviewQueryVariables>(HomeCollectionPreviewDocument, baseOptions);
      }
export function useHomeCollectionPreviewLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HomeCollectionPreviewQuery, HomeCollectionPreviewQueryVariables>) {
          return Apollo.useLazyQuery<HomeCollectionPreviewQuery, HomeCollectionPreviewQueryVariables>(HomeCollectionPreviewDocument, baseOptions);
        }
export type HomeCollectionPreviewQueryHookResult = ReturnType<typeof useHomeCollectionPreviewQuery>;
export type HomeCollectionPreviewLazyQueryHookResult = ReturnType<typeof useHomeCollectionPreviewLazyQuery>;
export type HomeCollectionPreviewQueryResult = Apollo.QueryResult<HomeCollectionPreviewQuery, HomeCollectionPreviewQueryVariables>;