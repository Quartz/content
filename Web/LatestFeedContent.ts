import type * as Types from './types';

import type { ArticleTeaserPartsFragment } from './ArticleTeaserParts';
import type { EmailTeaserPartsFragment } from './EmailTeaserParts';
import { gql } from '@apollo/client';
import { ArticleTeaserPartsFragmentDoc } from './ArticleTeaserParts';
import { EmailTeaserPartsFragmentDoc } from './EmailTeaserParts';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type LatestFeedContentQueryVariables = Types.Exact<{
  after?: Types.Maybe<Types.Scalars['String']>;
  perPage?: Types.Maybe<Types.Scalars['Int']>;
}>;


export type LatestFeedContentQuery = { __typename?: 'RootQuery', feedContent?: Types.Maybe<{ __typename?: 'RootQueryToFeedContentConnection', nodes?: Types.Maybe<Array<Types.Maybe<(
      { __typename?: 'Post' }
      & ArticleTeaserPartsFragment
    ) | { __typename?: 'Page' } | { __typename?: 'MediaItem' } | (
      { __typename?: 'Email', link?: Types.Maybe<string>, emailLists?: Types.Maybe<{ __typename?: 'EmailToEmailListConnection', nodes?: Types.Maybe<Array<Types.Maybe<{ __typename?: 'EmailList', slug?: Types.Maybe<string> }>>> }> }
      & EmailTeaserPartsFragment
    ) | { __typename?: 'Chapter' } | { __typename?: 'Promotion' } | { __typename?: 'Collection' } | { __typename?: 'Bulletin' }>>>, pageInfo?: Types.Maybe<{ __typename?: 'WPPageInfo', endCursor?: Types.Maybe<string> }> }> };


export const LatestFeedContentDocument = /*#__PURE__*/ gql`
    query LatestFeedContent($after: String = "", $perPage: Int) {
  feedContent(after: $after, first: $perPage) {
    nodes {
      ... on Post {
        ...ArticleTeaserParts
      }
      ... on Email {
        ...EmailTeaserParts
        link
        emailLists {
          nodes {
            slug
          }
        }
      }
    }
    pageInfo {
      endCursor
    }
  }
}
    ${ArticleTeaserPartsFragmentDoc}
${EmailTeaserPartsFragmentDoc}`;

/**
 * __useLatestFeedContentQuery__
 *
 * To run a query within a React component, call `useLatestFeedContentQuery` and pass it any options that fit your needs.
 * When your component renders, `useLatestFeedContentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLatestFeedContentQuery({
 *   variables: {
 *      after: // value for 'after'
 *      perPage: // value for 'perPage'
 *   },
 * });
 */
export function useLatestFeedContentQuery(baseOptions?: Apollo.QueryHookOptions<LatestFeedContentQuery, LatestFeedContentQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<LatestFeedContentQuery, LatestFeedContentQueryVariables>(LatestFeedContentDocument, options);
      }
export function useLatestFeedContentLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LatestFeedContentQuery, LatestFeedContentQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<LatestFeedContentQuery, LatestFeedContentQueryVariables>(LatestFeedContentDocument, options);
        }
export type LatestFeedContentQueryHookResult = ReturnType<typeof useLatestFeedContentQuery>;
export type LatestFeedContentLazyQueryHookResult = ReturnType<typeof useLatestFeedContentLazyQuery>;
export type LatestFeedContentQueryResult = Apollo.QueryResult<LatestFeedContentQuery, LatestFeedContentQueryVariables>;