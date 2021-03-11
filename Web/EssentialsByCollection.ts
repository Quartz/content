import type * as Types from './types';

import type { CollectionPartsFragment } from './CollectionParts';
import type { BulletinDataPartsFragment } from './BulletinDataParts';
import { gql } from '@apollo/client';
import { CollectionPartsFragmentDoc } from './CollectionParts';
import { BulletinDataPartsFragmentDoc } from './BulletinDataParts';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type EssentialsByCollectionQueryVariables = Types.Exact<{
  id: Types.Scalars['ID'];
}>;


export type EssentialsByCollectionQuery = { __typename?: 'RootQuery', collection?: Types.Maybe<(
    { __typename?: 'Collection', bulletin?: Types.Maybe<(
      { __typename?: 'BulletinData' }
      & BulletinDataPartsFragment
    )> }
    & CollectionPartsFragment
  )> };


export const EssentialsByCollectionDocument = /*#__PURE__*/ gql`
    query EssentialsByCollection($id: ID!) {
  collection(id: $id, idType: ID) {
    ...CollectionParts
    bulletin {
      ...BulletinDataParts
    }
  }
}
    ${CollectionPartsFragmentDoc}
${BulletinDataPartsFragmentDoc}`;

/**
 * __useEssentialsByCollectionQuery__
 *
 * To run a query within a React component, call `useEssentialsByCollectionQuery` and pass it any options that fit your needs.
 * When your component renders, `useEssentialsByCollectionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEssentialsByCollectionQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useEssentialsByCollectionQuery(baseOptions: Apollo.QueryHookOptions<EssentialsByCollectionQuery, EssentialsByCollectionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<EssentialsByCollectionQuery, EssentialsByCollectionQueryVariables>(EssentialsByCollectionDocument, options);
      }
export function useEssentialsByCollectionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<EssentialsByCollectionQuery, EssentialsByCollectionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<EssentialsByCollectionQuery, EssentialsByCollectionQueryVariables>(EssentialsByCollectionDocument, options);
        }
export type EssentialsByCollectionQueryHookResult = ReturnType<typeof useEssentialsByCollectionQuery>;
export type EssentialsByCollectionLazyQueryHookResult = ReturnType<typeof useEssentialsByCollectionLazyQuery>;
export type EssentialsByCollectionQueryResult = Apollo.QueryResult<EssentialsByCollectionQuery, EssentialsByCollectionQueryVariables>;