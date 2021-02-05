import type * as Types from './types';

import type { ArticleTeaserPartsFragment } from './ArticleTeaserParts';
import { gql } from '@apollo/client';
import { ArticleTeaserPartsFragmentDoc } from './ArticleTeaserParts';
import * as Apollo from '@apollo/client';
export type ContentBySearchTermQueryVariables = Types.Exact<{
  after?: Types.Maybe<Types.Scalars['String']>;
  limit?: Types.Maybe<Types.Scalars['Int']>;
  search: Types.Scalars['String'];
}>;


export type ContentBySearchTermQuery = { __typename?: 'RootQuery', content?: Types.Maybe<{ __typename?: 'RootQueryToContentUnionConnection', pageInfo?: Types.Maybe<{ __typename?: 'WPPageInfo', endCursor?: Types.Maybe<string>, hasNextPage: boolean }>, nodes?: Types.Maybe<Array<Types.Maybe<(
      { __typename?: 'Post', trackingUrls?: Types.Maybe<Array<Types.Maybe<string>>> }
      & ArticleTeaserPartsFragment
    ) | { __typename?: 'Page' } | { __typename?: 'MediaItem' } | { __typename?: 'Email' } | { __typename?: 'Chapter' } | { __typename?: 'Promotion' } | { __typename?: 'Collection' } | { __typename?: 'Bulletin' }>>> }> };


export const ContentBySearchTermDocument = /*#__PURE__*/ gql`
    query ContentBySearchTerm($after: String = "", $limit: Int = 10, $search: String!) {
  content(after: $after, first: $limit, where: {search: $search}) {
    pageInfo {
      endCursor
      hasNextPage
    }
    nodes {
      ... on Post {
        trackingUrls
        ...ArticleTeaserParts
      }
    }
  }
}
    ${ArticleTeaserPartsFragmentDoc}`;

/**
 * __useContentBySearchTermQuery__
 *
 * To run a query within a React component, call `useContentBySearchTermQuery` and pass it any options that fit your needs.
 * When your component renders, `useContentBySearchTermQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useContentBySearchTermQuery({
 *   variables: {
 *      after: // value for 'after'
 *      limit: // value for 'limit'
 *      search: // value for 'search'
 *   },
 * });
 */
export function useContentBySearchTermQuery(baseOptions: Apollo.QueryHookOptions<ContentBySearchTermQuery, ContentBySearchTermQueryVariables>) {
        return Apollo.useQuery<ContentBySearchTermQuery, ContentBySearchTermQueryVariables>(ContentBySearchTermDocument, baseOptions);
      }
export function useContentBySearchTermLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ContentBySearchTermQuery, ContentBySearchTermQueryVariables>) {
          return Apollo.useLazyQuery<ContentBySearchTermQuery, ContentBySearchTermQueryVariables>(ContentBySearchTermDocument, baseOptions);
        }
export type ContentBySearchTermQueryHookResult = ReturnType<typeof useContentBySearchTermQuery>;
export type ContentBySearchTermLazyQueryHookResult = ReturnType<typeof useContentBySearchTermLazyQuery>;
export type ContentBySearchTermQueryResult = Apollo.QueryResult<ContentBySearchTermQuery, ContentBySearchTermQueryVariables>;