import type * as Types from './types';

import type { GuidePartsFragment } from './GuideParts';
import { gql } from '@apollo/client';
import { GuidePartsFragmentDoc } from './GuideParts';
import * as Apollo from '@apollo/client';
export type GuidesBySlugQueryVariables = Types.Exact<{
  perPage: Types.Scalars['Int'];
  slugs: Array<Types.Maybe<Types.Scalars['String']>>;
}>;


export type GuidesBySlugQuery = (
  { __typename?: 'RootQuery' }
  & { guides?: Types.Maybe<(
    { __typename?: 'RootQueryToGuideConnection' }
    & { nodes?: Types.Maybe<Array<Types.Maybe<(
      { __typename?: 'Guide' }
      & GuidePartsFragment
    )>>> }
  )> }
);


export const GuidesBySlugDocument = /*#__PURE__*/ gql`
    query GuidesBySlug($perPage: Int!, $slugs: [String]!) {
  guides(first: $perPage, where: {slug: $slugs}) {
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
 *      slugs: // value for 'slugs'
 *   },
 * });
 */
export function useGuidesBySlugQuery(baseOptions?: Apollo.QueryHookOptions<GuidesBySlugQuery, GuidesBySlugQueryVariables>) {
        return Apollo.useQuery<GuidesBySlugQuery, GuidesBySlugQueryVariables>(GuidesBySlugDocument, baseOptions);
      }
export function useGuidesBySlugLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GuidesBySlugQuery, GuidesBySlugQueryVariables>) {
          return Apollo.useLazyQuery<GuidesBySlugQuery, GuidesBySlugQueryVariables>(GuidesBySlugDocument, baseOptions);
        }
export type GuidesBySlugQueryHookResult = ReturnType<typeof useGuidesBySlugQuery>;
export type GuidesBySlugLazyQueryHookResult = ReturnType<typeof useGuidesBySlugLazyQuery>;
export type GuidesBySlugQueryResult = Apollo.QueryResult<GuidesBySlugQuery, GuidesBySlugQueryVariables>;