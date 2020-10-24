import * as Types from './types';

import { ArticleTeaserPartsFragment } from './ArticleTeaserParts';
import { TopicPartsFragment } from './TopicParts';
import { gql } from '@apollo/client';
import { ArticleTeaserPartsFragmentDoc } from './ArticleTeaserParts';
import { TopicPartsFragmentDoc } from './TopicParts';
import * as Apollo from '@apollo/client';
export type DiscoverQueryVariables = Types.Exact<{
  topics: Array<Types.Maybe<Types.Scalars['String']>>;
}>;


export type DiscoverQuery = (
  { __typename?: 'RootQuery' }
  & { latest?: Types.Maybe<(
    { __typename?: 'RootQueryToPostConnection' }
    & { nodes?: Types.Maybe<Array<Types.Maybe<(
      { __typename?: 'Post' }
      & ArticleTeaserPartsFragment
    )>>> }
  )>, trendingPosts?: Types.Maybe<(
    { __typename?: 'RootQueryToPostConnection' }
    & { nodes?: Types.Maybe<Array<Types.Maybe<(
      { __typename?: 'Post' }
      & ArticleTeaserPartsFragment
    )>>> }
  )>, topics?: Types.Maybe<(
    { __typename?: 'RootQueryToTopicConnection' }
    & { nodes?: Types.Maybe<Array<Types.Maybe<(
      { __typename?: 'Topic' }
      & { posts?: Types.Maybe<(
        { __typename?: 'TopicToPostConnection' }
        & { nodes?: Types.Maybe<Array<Types.Maybe<(
          { __typename?: 'Post' }
          & ArticleTeaserPartsFragment
        )>>> }
      )> }
      & TopicPartsFragment
    )>>> }
  )> }
);


export const DiscoverDocument = /*#__PURE__*/ gql`
    query Discover($topics: [String]!) {
  latest: posts(first: 5) {
    nodes {
      ...ArticleTeaserParts
    }
  }
  trendingPosts(first: 5) {
    nodes {
      ...ArticleTeaserParts
    }
  }
  topics(first: 7, where: {slug: $topics}) {
    nodes {
      ...TopicParts
      posts(first: 3) {
        nodes {
          ...ArticleTeaserParts
        }
      }
    }
  }
}
    ${ArticleTeaserPartsFragmentDoc}
${TopicPartsFragmentDoc}`;

/**
 * __useDiscoverQuery__
 *
 * To run a query within a React component, call `useDiscoverQuery` and pass it any options that fit your needs.
 * When your component renders, `useDiscoverQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDiscoverQuery({
 *   variables: {
 *      topics: // value for 'topics'
 *   },
 * });
 */
export function useDiscoverQuery(baseOptions?: Apollo.QueryHookOptions<DiscoverQuery, DiscoverQueryVariables>) {
        return Apollo.useQuery<DiscoverQuery, DiscoverQueryVariables>(DiscoverDocument, baseOptions);
      }
export function useDiscoverLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<DiscoverQuery, DiscoverQueryVariables>) {
          return Apollo.useLazyQuery<DiscoverQuery, DiscoverQueryVariables>(DiscoverDocument, baseOptions);
        }
export type DiscoverQueryHookResult = ReturnType<typeof useDiscoverQuery>;
export type DiscoverLazyQueryHookResult = ReturnType<typeof useDiscoverLazyQuery>;
export type DiscoverQueryResult = Apollo.QueryResult<DiscoverQuery, DiscoverQueryVariables>;