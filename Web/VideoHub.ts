import type * as Types from './types';

import type { ArticleTeaserPartsFragment } from './ArticleTeaserParts';
import type { ShowPartsFragment } from './ShowParts';
import { gql } from '@apollo/client';
import { ArticleTeaserPartsFragmentDoc } from './ArticleTeaserParts';
import { ShowPartsFragmentDoc } from './ShowParts';
import * as Apollo from '@apollo/client';
export type VideoHubQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type VideoHubQuery = (
  { __typename?: 'RootQuery' }
  & { featuredVideoPlayer?: Types.Maybe<(
    { __typename?: 'RootQueryToMenuItemConnection' }
    & { nodes?: Types.Maybe<Array<Types.Maybe<(
      { __typename?: 'MenuItem' }
      & { connectedObject?: Types.Maybe<(
        { __typename?: 'Post' }
        & { shows?: Types.Maybe<(
          { __typename?: 'PostToShowConnection' }
          & { nodes?: Types.Maybe<Array<Types.Maybe<(
            { __typename?: 'Show' }
            & ShowPartsFragment
          )>>> }
        )> }
        & ArticleTeaserPartsFragment
      ) | { __typename?: 'Page' } | { __typename?: 'Email' } | { __typename?: 'Chapter' } | { __typename?: 'Promotion' } | { __typename?: 'BlogPost' } | { __typename?: 'Nug' } | { __typename?: 'Collection' } | { __typename?: 'Category' } | { __typename?: 'Tag' } | { __typename?: 'EmailList' } | { __typename?: 'Obsession' } | { __typename?: 'Topic' } | { __typename?: 'Show' } | { __typename?: 'CoAuthor' } | { __typename?: 'MenuItem' }> }
    )>>> }
  )>, latest?: Types.Maybe<(
    { __typename?: 'RootQueryToTagConnection' }
    & { nodes?: Types.Maybe<Array<Types.Maybe<(
      { __typename?: 'Tag' }
      & { posts?: Types.Maybe<(
        { __typename?: 'TagToPostConnection' }
        & { nodes?: Types.Maybe<Array<Types.Maybe<(
          { __typename?: 'Post' }
          & { shows?: Types.Maybe<(
            { __typename?: 'PostToShowConnection' }
            & { nodes?: Types.Maybe<Array<Types.Maybe<(
              { __typename?: 'Show' }
              & ShowPartsFragment
            )>>> }
          )> }
          & ArticleTeaserPartsFragment
        )>>> }
      )> }
    )>>> }
  )>, featuredShows?: Types.Maybe<(
    { __typename?: 'RootQueryToMenuItemConnection' }
    & { nodes?: Types.Maybe<Array<Types.Maybe<(
      { __typename?: 'MenuItem' }
      & { connectedObject?: Types.Maybe<{ __typename?: 'Post' } | { __typename?: 'Page' } | { __typename?: 'Email' } | { __typename?: 'Chapter' } | { __typename?: 'Promotion' } | { __typename?: 'BlogPost' } | { __typename?: 'Nug' } | { __typename?: 'Collection' } | { __typename?: 'Category' } | { __typename?: 'Tag' } | { __typename?: 'EmailList' } | { __typename?: 'Obsession' } | { __typename?: 'Topic' } | (
        { __typename?: 'Show' }
        & { posts?: Types.Maybe<(
          { __typename?: 'ShowToPostConnection' }
          & { nodes?: Types.Maybe<Array<Types.Maybe<(
            { __typename?: 'Post' }
            & ArticleTeaserPartsFragment
          )>>> }
        )> }
        & ShowPartsFragment
      ) | { __typename?: 'CoAuthor' } | { __typename?: 'MenuItem' }> }
    )>>> }
  )>, allShows?: Types.Maybe<(
    { __typename?: 'RootQueryToShowConnection' }
    & { nodes?: Types.Maybe<Array<Types.Maybe<(
      { __typename?: 'Show' }
      & ShowPartsFragment
    )>>> }
  )> }
);


export const VideoHubDocument = /*#__PURE__*/ gql`
    query VideoHub {
  featuredVideoPlayer: menuItems(where: {location: PLAYER_VIDEO}) {
    nodes {
      connectedObject {
        ...ArticleTeaserParts
        ... on Post {
          shows {
            nodes {
              ...ShowParts
            }
          }
        }
      }
    }
  }
  latest: tags(where: {slug: "quartz-video"}) {
    nodes {
      posts(first: 6) {
        nodes {
          ...ArticleTeaserParts
          shows {
            nodes {
              ...ShowParts
            }
          }
        }
      }
    }
  }
  featuredShows: menuItems(where: {location: SHOWS_VIDEO}) {
    nodes {
      connectedObject {
        ... on Show {
          ...ShowParts
          posts(first: 6) {
            nodes {
              ...ArticleTeaserParts
            }
          }
        }
      }
    }
  }
  allShows: shows(last: 40, where: {orderby: TERM_ID}) {
    nodes {
      ...ShowParts
    }
  }
}
    ${ArticleTeaserPartsFragmentDoc}
${ShowPartsFragmentDoc}`;

/**
 * __useVideoHubQuery__
 *
 * To run a query within a React component, call `useVideoHubQuery` and pass it any options that fit your needs.
 * When your component renders, `useVideoHubQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useVideoHubQuery({
 *   variables: {
 *   },
 * });
 */
export function useVideoHubQuery(baseOptions?: Apollo.QueryHookOptions<VideoHubQuery, VideoHubQueryVariables>) {
        return Apollo.useQuery<VideoHubQuery, VideoHubQueryVariables>(VideoHubDocument, baseOptions);
      }
export function useVideoHubLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<VideoHubQuery, VideoHubQueryVariables>) {
          return Apollo.useLazyQuery<VideoHubQuery, VideoHubQueryVariables>(VideoHubDocument, baseOptions);
        }
export type VideoHubQueryHookResult = ReturnType<typeof useVideoHubQuery>;
export type VideoHubLazyQueryHookResult = ReturnType<typeof useVideoHubLazyQuery>;
export type VideoHubQueryResult = Apollo.QueryResult<VideoHubQuery, VideoHubQueryVariables>;