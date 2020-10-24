import * as Types from './types';

import { NugPartsFragment } from './NugParts';
import { gql } from '@apollo/client';
import { NugPartsFragmentDoc } from './NugParts';
import * as Apollo from '@apollo/client';
export type NugQueryVariables = Types.Exact<{
  slug: Types.Scalars['String'];
}>;


export type NugQuery = (
  { __typename?: 'RootQuery' }
  & { nugBy?: Types.Maybe<(
    { __typename?: 'Nug' }
    & NugPartsFragment
  )> }
);


export const NugDocument = /*#__PURE__*/ gql`
    query Nug($slug: String!) {
  nugBy(slug: $slug) {
    ...NugParts
  }
}
    ${NugPartsFragmentDoc}`;

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
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useNugQuery(baseOptions?: Apollo.QueryHookOptions<NugQuery, NugQueryVariables>) {
        return Apollo.useQuery<NugQuery, NugQueryVariables>(NugDocument, baseOptions);
      }
export function useNugLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<NugQuery, NugQueryVariables>) {
          return Apollo.useLazyQuery<NugQuery, NugQueryVariables>(NugDocument, baseOptions);
        }
export type NugQueryHookResult = ReturnType<typeof useNugQuery>;
export type NugLazyQueryHookResult = ReturnType<typeof useNugLazyQuery>;
export type NugQueryResult = Apollo.QueryResult<NugQuery, NugQueryVariables>;