import type * as Types from './types';

import type { CollectionPartsFragment } from './CollectionParts';
import { gql } from '@apollo/client';
import { CollectionPartsFragmentDoc } from './CollectionParts';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type EssentialsByObsessionQueryVariables = Types.Exact<{
  slug: Types.Scalars['String'];
}>;


export type EssentialsByObsessionQuery = { __typename?: 'RootQuery', obsessions?: Types.Maybe<{ __typename?: 'RootQueryToObsessionConnection', nodes?: Types.Maybe<Array<Types.Maybe<{ __typename?: 'Obsession', id: string, essentials?: Types.Maybe<{ __typename?: 'ObsessionToCollectionConnection', nodes?: Types.Maybe<Array<Types.Maybe<(
          { __typename?: 'Collection' }
          & CollectionPartsFragment
        )>>> }> }>>> }> };


export const EssentialsByObsessionDocument = /*#__PURE__*/ gql`
    query EssentialsByObsession($slug: String!) {
  obsessions(last: 1, where: {slug: [$slug]}) {
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
 * __useEssentialsByObsessionQuery__
 *
 * To run a query within a React component, call `useEssentialsByObsessionQuery` and pass it any options that fit your needs.
 * When your component renders, `useEssentialsByObsessionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEssentialsByObsessionQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useEssentialsByObsessionQuery(baseOptions: Apollo.QueryHookOptions<EssentialsByObsessionQuery, EssentialsByObsessionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<EssentialsByObsessionQuery, EssentialsByObsessionQueryVariables>(EssentialsByObsessionDocument, options);
      }
export function useEssentialsByObsessionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<EssentialsByObsessionQuery, EssentialsByObsessionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<EssentialsByObsessionQuery, EssentialsByObsessionQueryVariables>(EssentialsByObsessionDocument, options);
        }
export type EssentialsByObsessionQueryHookResult = ReturnType<typeof useEssentialsByObsessionQuery>;
export type EssentialsByObsessionLazyQueryHookResult = ReturnType<typeof useEssentialsByObsessionLazyQuery>;
export type EssentialsByObsessionQueryResult = Apollo.QueryResult<EssentialsByObsessionQuery, EssentialsByObsessionQueryVariables>;