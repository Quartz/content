import type * as Types from './types';

import type { CollectionPartsFragment } from './CollectionParts';
import { gql } from '@apollo/client';
import { CollectionPartsFragmentDoc } from './CollectionParts';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type EssentialsByGuideQueryVariables = Types.Exact<{
  slug: Types.Scalars['String'];
}>;


export type EssentialsByGuideQuery = { __typename?: 'RootQuery', guides?: Types.Maybe<{ __typename?: 'RootQueryToGuideConnection', nodes?: Types.Maybe<Array<Types.Maybe<{ __typename?: 'Guide', id: string, essentials?: Types.Maybe<{ __typename?: 'GuideToCollectionConnection', nodes?: Types.Maybe<Array<Types.Maybe<(
          { __typename?: 'Collection' }
          & CollectionPartsFragment
        )>>> }> }>>> }> };


export const EssentialsByGuideDocument = /*#__PURE__*/ gql`
    query EssentialsByGuide($slug: String!) {
  guides(last: 1, where: {slug: [$slug]}) {
    nodes {
      id
      essentials(first: 1) {
        nodes {
          ...CollectionParts
        }
      }
    }
  }
}
    ${CollectionPartsFragmentDoc}`;

/**
 * __useEssentialsByGuideQuery__
 *
 * To run a query within a React component, call `useEssentialsByGuideQuery` and pass it any options that fit your needs.
 * When your component renders, `useEssentialsByGuideQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEssentialsByGuideQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useEssentialsByGuideQuery(baseOptions: Apollo.QueryHookOptions<EssentialsByGuideQuery, EssentialsByGuideQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<EssentialsByGuideQuery, EssentialsByGuideQueryVariables>(EssentialsByGuideDocument, options);
      }
export function useEssentialsByGuideLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<EssentialsByGuideQuery, EssentialsByGuideQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<EssentialsByGuideQuery, EssentialsByGuideQueryVariables>(EssentialsByGuideDocument, options);
        }
export type EssentialsByGuideQueryHookResult = ReturnType<typeof useEssentialsByGuideQuery>;
export type EssentialsByGuideLazyQueryHookResult = ReturnType<typeof useEssentialsByGuideLazyQuery>;
export type EssentialsByGuideQueryResult = Apollo.QueryResult<EssentialsByGuideQuery, EssentialsByGuideQueryVariables>;