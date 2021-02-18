import type * as Types from './types';

import type { TagPartsFragment } from './TagParts';
import type { ArticleTeaserPartsFragment } from './ArticleTeaserParts';
import { gql } from '@apollo/client';
import { TagPartsFragmentDoc } from './TagParts';
import { ArticleTeaserPartsFragmentDoc } from './ArticleTeaserParts';
import * as Apollo from '@apollo/client';
export type MemberVideoQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type MemberVideoQuery = { __typename?: 'RootQuery', features?: Types.Maybe<{ __typename?: 'RootQueryToMenuItemConnection', nodes?: Types.Maybe<Array<Types.Maybe<{ __typename?: 'MenuItem', id: string, connectedObject?: Types.Maybe<{ __typename?: 'Post' } | { __typename?: 'Page' } | { __typename?: 'Email' } | { __typename?: 'Chapter' } | { __typename?: 'Promotion' } | { __typename?: 'BlogPost' } | { __typename?: 'Nug' } | { __typename?: 'Collection' } | { __typename?: 'Category' } | (
        { __typename?: 'Tag', posts?: Types.Maybe<{ __typename?: 'TagToPostConnection', nodes?: Types.Maybe<Array<Types.Maybe<(
            { __typename?: 'Post' }
            & ArticleTeaserPartsFragment
          )>>> }> }
        & TagPartsFragment
      ) | { __typename?: 'EmailList' } | { __typename?: 'Obsession' } | { __typename?: 'Topic' } | { __typename?: 'Show' } | { __typename?: 'EmailSegment' } | { __typename?: 'CoAuthor' }> }>>> }> };


export const MemberVideoDocument = /*#__PURE__*/ gql`
    query MemberVideo {
  features: menuItems(first: 3, where: {location: FEATURES_VIDEO_MEMBERS}) {
    nodes {
      id
      connectedObject {
        ... on Tag {
          ...TagParts
          posts(first: 6, where: {orderby: {field: MEMBERSHIP}}) {
            nodes {
              ...ArticleTeaserParts
            }
          }
        }
      }
    }
  }
}
    ${TagPartsFragmentDoc}
${ArticleTeaserPartsFragmentDoc}`;

/**
 * __useMemberVideoQuery__
 *
 * To run a query within a React component, call `useMemberVideoQuery` and pass it any options that fit your needs.
 * When your component renders, `useMemberVideoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMemberVideoQuery({
 *   variables: {
 *   },
 * });
 */
export function useMemberVideoQuery(baseOptions?: Apollo.QueryHookOptions<MemberVideoQuery, MemberVideoQueryVariables>) {
        return Apollo.useQuery<MemberVideoQuery, MemberVideoQueryVariables>(MemberVideoDocument, baseOptions);
      }
export function useMemberVideoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MemberVideoQuery, MemberVideoQueryVariables>) {
          return Apollo.useLazyQuery<MemberVideoQuery, MemberVideoQueryVariables>(MemberVideoDocument, baseOptions);
        }
export type MemberVideoQueryHookResult = ReturnType<typeof useMemberVideoQuery>;
export type MemberVideoLazyQueryHookResult = ReturnType<typeof useMemberVideoLazyQuery>;
export type MemberVideoQueryResult = Apollo.QueryResult<MemberVideoQuery, MemberVideoQueryVariables>;