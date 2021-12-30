import type * as Types from './types';

import type { NugPartsFragment } from './NugParts';
import type { BulletinDataPartsFragment } from './BulletinDataParts';
import { gql } from '@apollo/client';
import { NugPartsFragmentDoc } from './NugParts';
import { BulletinDataPartsFragmentDoc } from './BulletinDataParts';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type NugQueryVariables = Types.Exact<{
  id: Types.Scalars['Int'];
}>;


export type NugQuery = { __typename?: 'RootQuery', nugs?: Types.Maybe<{ __typename?: 'RootQueryToNugConnection', nodes?: Types.Maybe<Array<Types.Maybe<(
      { __typename?: 'Nug', bulletin?: Types.Maybe<(
        { __typename?: 'BulletinData' }
        & BulletinDataPartsFragment
      )> }
      & NugPartsFragment
    )>>> }> };


export const NugDocument = /*#__PURE__*/ gql`
    query Nug($id: Int!) {
  nugs(where: {id: $id}) {
    nodes {
      ...NugParts
      bulletin {
        ...BulletinDataParts
      }
    }
  }
}
    ${NugPartsFragmentDoc}
${BulletinDataPartsFragmentDoc}`;

/**
 * __useNugQuery__
 *
 * To run a query within a React component, call `useNugQuery` and pass it any options that fit your needs.
 * When your component renders, `useNugQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNugQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useNugQuery(baseOptions: Apollo.QueryHookOptions<NugQuery, NugQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<NugQuery, NugQueryVariables>(NugDocument, options);
      }
export function useNugLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<NugQuery, NugQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<NugQuery, NugQueryVariables>(NugDocument, options);
        }
export type NugQueryHookResult = ReturnType<typeof useNugQuery>;
export type NugLazyQueryHookResult = ReturnType<typeof useNugLazyQuery>;
export type NugQueryResult = Apollo.QueryResult<NugQuery, NugQueryVariables>;