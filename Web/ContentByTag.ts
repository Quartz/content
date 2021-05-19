import type * as Types from './types';

import type { TagPartsFragment } from './TagParts';
import type { EmailPartsFragment } from './EmailParts';
import type { ArticleTeaserPartsFragment } from './ArticleTeaserParts';
import { gql } from '@apollo/client';
import { TagPartsFragmentDoc } from './TagParts';
import { EmailPartsFragmentDoc } from './EmailParts';
import { ArticleTeaserPartsFragmentDoc } from './ArticleTeaserParts';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type ContentByTagQueryVariables = Types.Exact<{
  slug: Types.Scalars['String'];
  perPage?: Types.Maybe<Types.Scalars['Int']>;
  after?: Types.Maybe<Types.Scalars['String']>;
}>;


export type ContentByTagQuery = { __typename?: 'RootQuery', tags?: Types.Maybe<{ __typename?: 'RootQueryToTagConnection', nodes?: Types.Maybe<Array<Types.Maybe<(
      { __typename?: 'Tag' }
      & TagPartsFragment
    )>>> }>, tagContent?: Types.Maybe<{ __typename?: 'RootQueryToTagContentConnection', nodes?: Types.Maybe<Array<Types.Maybe<(
      { __typename?: 'Post' }
      & ArticleTeaserPartsFragment
    ) | { __typename?: 'Page' } | { __typename?: 'MediaItem' } | (
      { __typename?: 'Email', emailLists?: Types.Maybe<{ __typename?: 'EmailToEmailListConnection', nodes?: Types.Maybe<Array<Types.Maybe<{ __typename?: 'EmailList', slug?: Types.Maybe<string> }>>> }> }
      & EmailPartsFragment
    ) | { __typename?: 'Chapter' } | { __typename?: 'Promotion' } | { __typename?: 'Collection' } | { __typename?: 'Bulletin' }>>>, pageInfo?: Types.Maybe<{ __typename?: 'WPPageInfo', endCursor?: Types.Maybe<string>, hasNextPage: boolean }> }> };


export const ContentByTagDocument = /*#__PURE__*/ gql`
    query ContentByTag($slug: String!, $perPage: Int = 10, $after: String) {
  tags(where: {slug: [$slug]}) {
    nodes {
      ...TagParts
    }
  }
  tagContent(after: $after, first: $perPage, where: {slug: $slug}) {
    nodes {
      ... on Email {
        ...EmailParts
        emailLists {
          nodes {
            slug
          }
        }
      }
      ... on Post {
        ...ArticleTeaserParts
      }
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}
    ${TagPartsFragmentDoc}
${EmailPartsFragmentDoc}
${ArticleTeaserPartsFragmentDoc}`;

/**
 * __useContentByTagQuery__
 *
 * To run a query within a React component, call `useContentByTagQuery` and pass it any options that fit your needs.
 * When your component renders, `useContentByTagQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useContentByTagQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *      perPage: // value for 'perPage'
 *      after: // value for 'after'
 *   },
 * });
 */
export function useContentByTagQuery(baseOptions: Apollo.QueryHookOptions<ContentByTagQuery, ContentByTagQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ContentByTagQuery, ContentByTagQueryVariables>(ContentByTagDocument, options);
      }
export function useContentByTagLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ContentByTagQuery, ContentByTagQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ContentByTagQuery, ContentByTagQueryVariables>(ContentByTagDocument, options);
        }
export type ContentByTagQueryHookResult = ReturnType<typeof useContentByTagQuery>;
export type ContentByTagLazyQueryHookResult = ReturnType<typeof useContentByTagLazyQuery>;
export type ContentByTagQueryResult = Apollo.QueryResult<ContentByTagQuery, ContentByTagQueryVariables>;