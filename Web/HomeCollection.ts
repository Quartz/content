import type * as Types from './types';

import type { CollectionPartsFragment } from './CollectionParts';
import { gql } from '@apollo/client';
import { CollectionPartsFragmentDoc } from './CollectionParts';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type HomeCollectionQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type HomeCollectionQuery = { __typename?: 'RootQuery', collections?: Types.Maybe<{ __typename?: 'RootQueryToCollectionConnection', nodes?: Types.Maybe<Array<Types.Maybe<(
      { __typename?: 'Collection' }
      & CollectionPartsFragment
    )>>> }> };


export const HomeCollectionDocument = /*#__PURE__*/ gql`
    query HomeCollection {
  collections(first: 1, where: {tagSlugIn: ["home"]}) {
    nodes {
      ...CollectionParts
    }
  }
}
    ${CollectionPartsFragmentDoc}`;

/**
 * __useHomeCollectionQuery__
 *
 * To run a query within a React component, call `useHomeCollectionQuery` and pass it any options that fit your needs.
 * When your component renders, `useHomeCollectionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHomeCollectionQuery({
 *   variables: {
 *   },
 * });
 */
export function useHomeCollectionQuery(baseOptions?: Apollo.QueryHookOptions<HomeCollectionQuery, HomeCollectionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<HomeCollectionQuery, HomeCollectionQueryVariables>(HomeCollectionDocument, options);
      }
export function useHomeCollectionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HomeCollectionQuery, HomeCollectionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<HomeCollectionQuery, HomeCollectionQueryVariables>(HomeCollectionDocument, options);
        }
export type HomeCollectionQueryHookResult = ReturnType<typeof useHomeCollectionQuery>;
export type HomeCollectionLazyQueryHookResult = ReturnType<typeof useHomeCollectionLazyQuery>;
export type HomeCollectionQueryResult = Apollo.QueryResult<HomeCollectionQuery, HomeCollectionQueryVariables>;