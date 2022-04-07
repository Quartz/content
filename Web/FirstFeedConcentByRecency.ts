import type * as Types from './types';

import type { ArticleTeaserPartsFragment } from './ArticleTeaserParts';
import type { EmailTeaserPartsFragment } from './EmailTeaserParts';
import { gql } from '@apollo/client';
import { ArticleTeaserPartsFragmentDoc } from './ArticleTeaserParts';
import { EmailTeaserPartsFragmentDoc } from './EmailTeaserParts';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type FirstFeedConcentByRecencyQueryVariables = Types.Exact<{
  first?: Types.Maybe<Types.Scalars['Int']>;
}>;


export type FirstFeedConcentByRecencyQuery = { __typename?: 'RootQuery', feedContent?: Types.Maybe<{ __typename?: 'RootQueryToFeedContentConnection', nodes?: Types.Maybe<Array<Types.Maybe<(
      { __typename?: 'Post' }
      & ArticleTeaserPartsFragment
    ) | { __typename?: 'Page' } | { __typename?: 'MediaItem' } | (
      { __typename?: 'Email', link?: Types.Maybe<string>, emailLists?: Types.Maybe<{ __typename?: 'EmailToEmailListConnection', nodes?: Types.Maybe<Array<Types.Maybe<{ __typename?: 'EmailList', slug?: Types.Maybe<string> }>>> }> }
      & EmailTeaserPartsFragment
    ) | { __typename?: 'Chapter' } | { __typename?: 'Promotion' } | { __typename?: 'Collection' } | { __typename?: 'Bulletin' }>>>, pageInfo?: Types.Maybe<{ __typename?: 'WPPageInfo', endCursor?: Types.Maybe<string> }> }> };


export const FirstFeedConcentByRecencyDocument = /*#__PURE__*/ gql`
    query FirstFeedConcentByRecency($first: Int) {
  feedContent(first: $first) @connection(key: "FirstFeedConcentByRecency") {
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
 * __useFirstFeedConcentByRecencyQuery__
 *
 * To run a query within a React component, call `useFirstFeedConcentByRecencyQuery` and pass it any options that fit your needs.
 * When your component renders, `useFirstFeedConcentByRecencyQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFirstFeedConcentByRecencyQuery({
 *   variables: {
 *      first: // value for 'first'
 *   },
 * });
 */
export function useFirstFeedConcentByRecencyQuery(baseOptions?: Apollo.QueryHookOptions<FirstFeedConcentByRecencyQuery, FirstFeedConcentByRecencyQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FirstFeedConcentByRecencyQuery, FirstFeedConcentByRecencyQueryVariables>(FirstFeedConcentByRecencyDocument, options);
      }
export function useFirstFeedConcentByRecencyLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FirstFeedConcentByRecencyQuery, FirstFeedConcentByRecencyQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FirstFeedConcentByRecencyQuery, FirstFeedConcentByRecencyQueryVariables>(FirstFeedConcentByRecencyDocument, options);
        }
export type FirstFeedConcentByRecencyQueryHookResult = ReturnType<typeof useFirstFeedConcentByRecencyQuery>;
export type FirstFeedConcentByRecencyLazyQueryHookResult = ReturnType<typeof useFirstFeedConcentByRecencyLazyQuery>;
export type FirstFeedConcentByRecencyQueryResult = Apollo.QueryResult<FirstFeedConcentByRecencyQuery, FirstFeedConcentByRecencyQueryVariables>;