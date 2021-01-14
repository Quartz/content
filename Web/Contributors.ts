import type * as Types from './types';

import type { ArticleTeaserPartsFragment } from './ArticleTeaserParts';
import type { AuthorPartsFragment } from './AuthorParts';
import { gql } from '@apollo/client';
import { ArticleTeaserPartsFragmentDoc } from './ArticleTeaserParts';
import { AuthorPartsFragmentDoc } from './AuthorParts';
import * as Apollo from '@apollo/client';
export type ContributorsQueryQueryVariables = Types.Exact<{
  perPage: Types.Scalars['Int'];
}>;


export type ContributorsQueryQuery = { __typename?: 'RootQuery', menuItems?: Types.Maybe<{ __typename?: 'RootQueryToMenuItemConnection', nodes?: Types.Maybe<Array<Types.Maybe<{ __typename?: 'MenuItem', id: string, connectedObject?: Types.Maybe<{ __typename?: 'Post' } | { __typename?: 'Page' } | { __typename?: 'Email' } | { __typename?: 'Chapter' } | { __typename?: 'Promotion' } | { __typename?: 'BlogPost' } | { __typename?: 'Nug' } | { __typename?: 'Collection' } | { __typename?: 'Category' } | { __typename?: 'Tag' } | { __typename?: 'EmailList' } | { __typename?: 'Obsession' } | { __typename?: 'Topic' } | { __typename?: 'Show' } | { __typename?: 'CoAuthor', posts?: Types.Maybe<{ __typename?: 'CoAuthorToPostConnection', nodes?: Types.Maybe<Array<Types.Maybe<(
            { __typename?: 'Post', authors?: Types.Maybe<{ __typename?: 'PostToCoAuthorConnection', edges?: Types.Maybe<Array<Types.Maybe<{ __typename?: 'PostToCoAuthorConnectionEdge', node?: Types.Maybe<(
                  { __typename?: 'CoAuthor' }
                  & AuthorPartsFragment
                )> }>>> }> }
            & ArticleTeaserPartsFragment
          )>>> }> } | { __typename?: 'MenuItem' }> }>>> }> };


export const ContributorsQueryDocument = /*#__PURE__*/ gql`
    query ContributorsQuery($perPage: Int!) {
  menuItems(first: $perPage, where: {location: AUTHORS_WORK}) {
    nodes {
      id
      connectedObject {
        ... on CoAuthor {
          posts(first: 1) {
            nodes {
              ...ArticleTeaserParts
              authors: coAuthors {
                edges {
                  node {
                    ...AuthorParts
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
    ${ArticleTeaserPartsFragmentDoc}
${AuthorPartsFragmentDoc}`;

/**
 * __useContributorsQueryQuery__
 *
 * To run a query within a React component, call `useContributorsQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useContributorsQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useContributorsQueryQuery({
 *   variables: {
 *      perPage: // value for 'perPage'
 *   },
 * });
 */
export function useContributorsQueryQuery(baseOptions: Apollo.QueryHookOptions<ContributorsQueryQuery, ContributorsQueryQueryVariables>) {
        return Apollo.useQuery<ContributorsQueryQuery, ContributorsQueryQueryVariables>(ContributorsQueryDocument, baseOptions);
      }
export function useContributorsQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ContributorsQueryQuery, ContributorsQueryQueryVariables>) {
          return Apollo.useLazyQuery<ContributorsQueryQuery, ContributorsQueryQueryVariables>(ContributorsQueryDocument, baseOptions);
        }
export type ContributorsQueryQueryHookResult = ReturnType<typeof useContributorsQueryQuery>;
export type ContributorsQueryLazyQueryHookResult = ReturnType<typeof useContributorsQueryLazyQuery>;
export type ContributorsQueryQueryResult = Apollo.QueryResult<ContributorsQueryQuery, ContributorsQueryQueryVariables>;