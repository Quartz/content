import type * as Types from './types';

import type { TagPartsFragment } from './TagParts';
import type { ArticleTeaserPartsFragment } from './ArticleTeaserParts';
import type { GuidePartsFragment } from './GuideParts';
import { gql } from '@apollo/client';
import { TagPartsFragmentDoc } from './TagParts';
import { ArticleTeaserPartsFragmentDoc } from './ArticleTeaserParts';
import { GuidePartsFragmentDoc } from './GuideParts';
import * as Apollo from '@apollo/client';
export type MemberHomeQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type MemberHomeQuery = (
  { __typename?: 'RootQuery' }
  & { features?: Types.Maybe<(
    { __typename?: 'RootQueryToMenuItemConnection' }
    & { nodes?: Types.Maybe<Array<Types.Maybe<(
      { __typename?: 'MenuItem' }
      & Pick<Types.MenuItem, 'id'>
      & { connectedObject?: Types.Maybe<{ __typename?: 'Post' } | { __typename?: 'Page' } | { __typename?: 'Email' } | { __typename?: 'Chapter' } | { __typename?: 'Promotion' } | { __typename?: 'BlogPost' } | { __typename?: 'Nug' } | { __typename?: 'Collection' } | { __typename?: 'Category' } | (
        { __typename?: 'Tag' }
        & { posts?: Types.Maybe<(
          { __typename?: 'TagToPostConnection' }
          & { nodes?: Types.Maybe<Array<Types.Maybe<(
            { __typename?: 'Post' }
            & ArticleTeaserPartsFragment
          )>>> }
        )> }
        & TagPartsFragment
      ) | { __typename?: 'EmailList' } | { __typename?: 'Obsession' } | { __typename?: 'Topic' } | { __typename?: 'Show' } | { __typename?: 'CoAuthor' } | { __typename?: 'MenuItem' }> }
    )>>> }
  )>, guides?: Types.Maybe<(
    { __typename?: 'RootQueryToGuideConnection' }
    & { nodes?: Types.Maybe<Array<Types.Maybe<(
      { __typename?: 'Guide' }
      & GuidePartsFragment
    )>>> }
  )> }
);


export const MemberHomeDocument = /*#__PURE__*/ gql`
    query MemberHome {
  features: menuItems(first: 3, where: {location: FEATURES_MEMBERS}) {
    nodes {
      id
      connectedObject {
        ... on Tag {
          ...TagParts
          posts(first: 3, where: {orderby: {field: MEMBERSHIP}}) {
            nodes {
              ...ArticleTeaserParts
            }
          }
        }
      }
    }
  }
  guides(last: 6, where: {orderby: TERM_ORDER}) {
    nodes {
      ...GuideParts
    }
  }
}
    ${TagPartsFragmentDoc}
${ArticleTeaserPartsFragmentDoc}
${GuidePartsFragmentDoc}`;

/**
 * __useMemberHomeQuery__
 *
 * To run a query within a React component, call `useMemberHomeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMemberHomeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMemberHomeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMemberHomeQuery(baseOptions?: Apollo.QueryHookOptions<MemberHomeQuery, MemberHomeQueryVariables>) {
        return Apollo.useQuery<MemberHomeQuery, MemberHomeQueryVariables>(MemberHomeDocument, baseOptions);
      }
export function useMemberHomeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MemberHomeQuery, MemberHomeQueryVariables>) {
          return Apollo.useLazyQuery<MemberHomeQuery, MemberHomeQueryVariables>(MemberHomeDocument, baseOptions);
        }
export type MemberHomeQueryHookResult = ReturnType<typeof useMemberHomeQuery>;
export type MemberHomeLazyQueryHookResult = ReturnType<typeof useMemberHomeLazyQuery>;
export type MemberHomeQueryResult = Apollo.QueryResult<MemberHomeQuery, MemberHomeQueryVariables>;