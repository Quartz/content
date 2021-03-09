import type * as Types from './types';

import type { NugPartsFragment } from './NugParts';
import { gql } from '@apollo/client';
import { NugPartsFragmentDoc } from './NugParts';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type NugsByTagQueryVariables = Types.Exact<{
  perPage: Types.Scalars['Int'];
  slug: Array<Types.Maybe<Types.Scalars['String']>> | Types.Maybe<Types.Scalars['String']>;
}>;


export type NugsByTagQuery = { __typename?: 'RootQuery', nugs?: Types.Maybe<{ __typename?: 'RootQueryToNugConnection', nodes?: Types.Maybe<Array<Types.Maybe<(
      { __typename?: 'Nug' }
      & NugPartsFragment
    )>>> }> };


export const NugsByTagDocument = /*#__PURE__*/ gql`
    query NugsByTag($perPage: Int!, $slug: [String]!) {
  nugs(first: $perPage, where: {tagSlugIn: $slug}) {
    nodes {
      ...NugParts
    }
  }
}
    ${NugPartsFragmentDoc}`;

/**
 * __useNugsByTagQuery__
 *
 * To run a query within a React component, call `useNugsByTagQuery` and pass it any options that fit your needs.
 * When your component renders, `useNugsByTagQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNugsByTagQuery({
 *   variables: {
 *      perPage: // value for 'perPage'
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useNugsByTagQuery(baseOptions: Apollo.QueryHookOptions<NugsByTagQuery, NugsByTagQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<NugsByTagQuery, NugsByTagQueryVariables>(NugsByTagDocument, options);
      }
export function useNugsByTagLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<NugsByTagQuery, NugsByTagQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<NugsByTagQuery, NugsByTagQueryVariables>(NugsByTagDocument, options);
        }
export type NugsByTagQueryHookResult = ReturnType<typeof useNugsByTagQuery>;
export type NugsByTagLazyQueryHookResult = ReturnType<typeof useNugsByTagLazyQuery>;
export type NugsByTagQueryResult = Apollo.QueryResult<NugsByTagQuery, NugsByTagQueryVariables>;