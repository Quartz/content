import type * as Types from './types';

import type { ArticleTeaserPartsFragment } from './ArticleTeaserParts';
import type { EmailPartsFragment } from './EmailParts';
import { gql } from '@apollo/client';
import { ArticleTeaserPartsFragmentDoc } from './ArticleTeaserParts';
import { EmailPartsFragmentDoc } from './EmailParts';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type FirstFeedContentByRecencyQueryVariables = Types.Exact<{
  first?: Types.Maybe<Types.Scalars['Int']>;
}>;


export type FirstFeedContentByRecencyQuery = { __typename?: 'RootQuery', feedContent?: Types.Maybe<{ __typename?: 'RootQueryToFeedContentConnection', nodes?: Types.Maybe<Array<Types.Maybe<(
      { __typename?: 'Post' }
      & ArticleTeaserPartsFragment
    ) | { __typename?: 'Page' } | { __typename?: 'MediaItem' } | (
      { __typename?: 'Email', link?: Types.Maybe<string>, emailLists?: Types.Maybe<{ __typename?: 'EmailToEmailListConnection', nodes?: Types.Maybe<Array<Types.Maybe<{ __typename?: 'EmailList', slug?: Types.Maybe<string> }>>> }> }
      & EmailPartsFragment
    ) | { __typename?: 'Chapter' } | { __typename?: 'Promotion' } | { __typename?: 'Collection' } | { __typename?: 'Bulletin' }>>>, pageInfo?: Types.Maybe<{ __typename?: 'WPPageInfo', endCursor?: Types.Maybe<string> }> }> };


export const FirstFeedContentByRecencyDocument = /*#__PURE__*/ gql`
    query FirstFeedContentByRecency($first: Int) {
  feedContent(first: $first) @connection(key: "FirstFeedContentByRecency") {
    nodes {
      ... on Post {
        ...ArticleTeaserParts
      }
      ... on Email {
        ...EmailParts
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
${EmailPartsFragmentDoc}`;

/**
 * __useFirstFeedContentByRecencyQuery__
 *
 * To run a query within a React component, call `useFirstFeedContentByRecencyQuery` and pass it any options that fit your needs.
 * When your component renders, `useFirstFeedContentByRecencyQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFirstFeedContentByRecencyQuery({
 *   variables: {
 *      first: // value for 'first'
 *   },
 * });
 */
export function useFirstFeedContentByRecencyQuery(baseOptions?: Apollo.QueryHookOptions<FirstFeedContentByRecencyQuery, FirstFeedContentByRecencyQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FirstFeedContentByRecencyQuery, FirstFeedContentByRecencyQueryVariables>(FirstFeedContentByRecencyDocument, options);
      }
export function useFirstFeedContentByRecencyLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FirstFeedContentByRecencyQuery, FirstFeedContentByRecencyQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FirstFeedContentByRecencyQuery, FirstFeedContentByRecencyQueryVariables>(FirstFeedContentByRecencyDocument, options);
        }
export type FirstFeedContentByRecencyQueryHookResult = ReturnType<typeof useFirstFeedContentByRecencyQuery>;
export type FirstFeedContentByRecencyLazyQueryHookResult = ReturnType<typeof useFirstFeedContentByRecencyLazyQuery>;
export type FirstFeedContentByRecencyQueryResult = Apollo.QueryResult<FirstFeedContentByRecencyQuery, FirstFeedContentByRecencyQueryVariables>;