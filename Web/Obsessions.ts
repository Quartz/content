import type * as Types from './types';

import type { ObsessionPartsFragment } from './ObsessionParts';
import type { ArticleTeaserPartsFragment } from './ArticleTeaserParts';
import { gql } from '@apollo/client';
import { ObsessionPartsFragmentDoc } from './ObsessionParts';
import { ArticleTeaserPartsFragmentDoc } from './ArticleTeaserParts';
import * as Apollo from '@apollo/client';
export type ObsessionsQueryVariables = Types.Exact<{
  perPage: Types.Scalars['Int'];
  location: Types.MenuLocationEnum;
}>;


export type ObsessionsQuery = { __typename?: 'RootQuery', menuItems?: Types.Maybe<{ __typename?: 'RootQueryToMenuItemConnection', nodes?: Types.Maybe<Array<Types.Maybe<{ __typename?: 'MenuItem', id: string, connectedObject?: Types.Maybe<{ __typename?: 'Post' } | { __typename?: 'Page' } | { __typename?: 'Email' } | { __typename?: 'Chapter' } | { __typename?: 'Promotion' } | { __typename?: 'BlogPost' } | { __typename?: 'Nug' } | { __typename?: 'Collection' } | { __typename?: 'Category' } | { __typename?: 'Tag' } | { __typename?: 'EmailList' } | (
        { __typename?: 'Obsession', posts?: Types.Maybe<{ __typename?: 'ObsessionToPostConnection', nodes?: Types.Maybe<Array<Types.Maybe<(
            { __typename?: 'Post' }
            & ArticleTeaserPartsFragment
          )>>> }> }
        & ObsessionPartsFragment
      ) | { __typename?: 'Topic' } | { __typename?: 'Show' } | { __typename?: 'EmailSegments' } | { __typename?: 'CoAuthor' } | { __typename?: 'MenuItem' }> }>>> }> };


export const ObsessionsDocument = /*#__PURE__*/ gql`
    query Obsessions($perPage: Int!, $location: MenuLocationEnum!) {
  menuItems(first: $perPage, where: {location: $location}) {
    nodes {
      id
      connectedObject {
        ... on Obsession {
          ...ObsessionParts
          posts(first: 1) {
            nodes {
              ...ArticleTeaserParts
            }
          }
        }
      }
    }
  }
}
    ${ObsessionPartsFragmentDoc}
${ArticleTeaserPartsFragmentDoc}`;

/**
 * __useObsessionsQuery__
 *
 * To run a query within a React component, call `useObsessionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useObsessionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useObsessionsQuery({
 *   variables: {
 *      perPage: // value for 'perPage'
 *      location: // value for 'location'
 *   },
 * });
 */
export function useObsessionsQuery(baseOptions: Apollo.QueryHookOptions<ObsessionsQuery, ObsessionsQueryVariables>) {
        return Apollo.useQuery<ObsessionsQuery, ObsessionsQueryVariables>(ObsessionsDocument, baseOptions);
      }
export function useObsessionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ObsessionsQuery, ObsessionsQueryVariables>) {
          return Apollo.useLazyQuery<ObsessionsQuery, ObsessionsQueryVariables>(ObsessionsDocument, baseOptions);
        }
export type ObsessionsQueryHookResult = ReturnType<typeof useObsessionsQuery>;
export type ObsessionsLazyQueryHookResult = ReturnType<typeof useObsessionsLazyQuery>;
export type ObsessionsQueryResult = Apollo.QueryResult<ObsessionsQuery, ObsessionsQueryVariables>;