import type * as Types from './types';

import type { PromotionPartsFragment } from './PromotionParts';
import type { BlockPartsFragment } from './BlockParts';
import { gql } from '@apollo/client';
import { PromotionPartsFragmentDoc } from './PromotionParts';
import { BlockPartsFragmentDoc } from './BlockParts';
import * as Apollo from '@apollo/client';
export type PromotionsByTagQueryVariables = Types.Exact<{
  perPage: Types.Scalars['Int'];
  slug: Array<Types.Maybe<Types.Scalars['String']>>;
}>;


export type PromotionsByTagQuery = { __typename?: 'RootQuery', promotions?: Types.Maybe<{ __typename?: 'RootQueryToPromotionConnection', nodes?: Types.Maybe<Array<Types.Maybe<(
      { __typename?: 'Promotion', blocks?: Types.Maybe<Array<Types.Maybe<(
        { __typename?: 'Block' }
        & BlockPartsFragment
      )>>> }
      & PromotionPartsFragment
    )>>> }> };


export const PromotionsByTagDocument = /*#__PURE__*/ gql`
    query PromotionsByTag($perPage: Int!, $slug: [String]!) {
  promotions(first: $perPage, where: {tagSlugIn: $slug}) {
    nodes {
      ...PromotionParts
      blocks {
        ...BlockParts
      }
    }
  }
}
    ${PromotionPartsFragmentDoc}
${BlockPartsFragmentDoc}`;

/**
 * __usePromotionsByTagQuery__
 *
 * To run a query within a React component, call `usePromotionsByTagQuery` and pass it any options that fit your needs.
 * When your component renders, `usePromotionsByTagQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePromotionsByTagQuery({
 *   variables: {
 *      perPage: // value for 'perPage'
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function usePromotionsByTagQuery(baseOptions?: Apollo.QueryHookOptions<PromotionsByTagQuery, PromotionsByTagQueryVariables>) {
        return Apollo.useQuery<PromotionsByTagQuery, PromotionsByTagQueryVariables>(PromotionsByTagDocument, baseOptions);
      }
export function usePromotionsByTagLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PromotionsByTagQuery, PromotionsByTagQueryVariables>) {
          return Apollo.useLazyQuery<PromotionsByTagQuery, PromotionsByTagQueryVariables>(PromotionsByTagDocument, baseOptions);
        }
export type PromotionsByTagQueryHookResult = ReturnType<typeof usePromotionsByTagQuery>;
export type PromotionsByTagLazyQueryHookResult = ReturnType<typeof usePromotionsByTagLazyQuery>;
export type PromotionsByTagQueryResult = Apollo.QueryResult<PromotionsByTagQuery, PromotionsByTagQueryVariables>;