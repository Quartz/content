import type * as Types from './types';

import type { GuidePartsFragment } from './GuideParts';
import { gql } from '@apollo/client';
import { GuidePartsFragmentDoc } from './GuideParts';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type GuidesBySlugQueryVariables = Types.Exact<{
  perPage: Types.Scalars['Int'];
  slug: Array<Types.Maybe<Types.Scalars['String']>> | Types.Maybe<Types.Scalars['String']>;
}>;


export type GuidesBySlugQuery = { __typename?: 'RootQuery', guides?: Types.Maybe<{ __typename?: 'RootQueryToGuideConnection', nodes?: Types.Maybe<Array<Types.Maybe<(
      { __typename?: 'Guide' }
      & GuidePartsFragment
    )>>> }> };


export const GuidesBySlugDocument = /*#__PURE__*/ gql`
    query GuidesBySlug($perPage: Int!, $slug: [String]!) {
  guides(last: $perPage, where: {slug: $slug}) {
    nodes {
      ...GuideParts
    }
  }
}
    ${GuidePartsFragmentDoc}`;

/**
 * __useGuidesBySlugQuery__
 *
 * To run a query within a React component, call `useGuidesBySlugQuery` and pass it any options that fit your needs.
 * When your component renders, `useGuidesBySlugQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGuidesBySlugQuery({
 *   variables: {
 *      perPage: // value for 'perPage'
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useGuidesBySlugQuery(baseOptions: Apollo.QueryHookOptions<GuidesBySlugQuery, GuidesBySlugQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GuidesBySlugQuery, GuidesBySlugQueryVariables>(GuidesBySlugDocument, options);
      }
export function useGuidesBySlugLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GuidesBySlugQuery, GuidesBySlugQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GuidesBySlugQuery, GuidesBySlugQueryVariables>(GuidesBySlugDocument, options);
        }
export type GuidesBySlugQueryHookResult = ReturnType<typeof useGuidesBySlugQuery>;
export type GuidesBySlugLazyQueryHookResult = ReturnType<typeof useGuidesBySlugLazyQuery>;
export type GuidesBySlugQueryResult = Apollo.QueryResult<GuidesBySlugQuery, GuidesBySlugQueryVariables>;