import * as Types from './types';

import { TopicPartsFragment } from './TopicParts';
import { ArticleTeaserPartsFragment } from './ArticleTeaserParts';
import { gql } from '@apollo/client';
import { TopicPartsFragmentDoc } from './TopicParts';
import { ArticleTeaserPartsFragmentDoc } from './ArticleTeaserParts';
import * as Apollo from '@apollo/client';
export type ArticlesByTopicQueryVariables = Types.Exact<{
  after?: Types.Maybe<Types.Scalars['String']>;
  perPage?: Types.Maybe<Types.Scalars['Int']>;
  slug?: Types.Maybe<Array<Types.Maybe<Types.Scalars['String']>>>;
}>;


export type ArticlesByTopicQuery = (
  { __typename?: 'RootQuery' }
  & { topics?: Types.Maybe<(
    { __typename?: 'RootQueryToTopicConnection' }
    & { nodes?: Types.Maybe<Array<Types.Maybe<(
      { __typename?: 'Topic' }
      & { posts?: Types.Maybe<(
        { __typename?: 'TopicToPostConnection' }
        & { nodes?: Types.Maybe<Array<Types.Maybe<(
          { __typename?: 'Post' }
          & ArticleTeaserPartsFragment
        )>>>, pageInfo?: Types.Maybe<(
          { __typename?: 'WPPageInfo' }
          & Pick<Types.WpPageInfo, 'endCursor' | 'hasNextPage'>
        )> }
      )> }
      & TopicPartsFragment
    )>>> }
  )> }
);


export const ArticlesByTopicDocument = /*#__PURE__*/ gql`
    query ArticlesByTopic($after: String = "", $perPage: Int, $slug: [String]) {
  topics(where: {slug: $slug}) {
    nodes {
      ...TopicParts
      posts(after: $after, first: $perPage) {
        nodes {
          ...ArticleTeaserParts
        }
        pageInfo {
          endCursor
          hasNextPage
        }
      }
    }
  }
}
    ${TopicPartsFragmentDoc}
${ArticleTeaserPartsFragmentDoc}`;

/**
 * __useArticlesByTopicQuery__
 *
 * To run a query within a React component, call `useArticlesByTopicQuery` and pass it any options that fit your needs.
 * When your component renders, `useArticlesByTopicQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useArticlesByTopicQuery({
 *   variables: {
 *      after: // value for 'after'
 *      perPage: // value for 'perPage'
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useArticlesByTopicQuery(baseOptions?: Apollo.QueryHookOptions<ArticlesByTopicQuery, ArticlesByTopicQueryVariables>) {
        return Apollo.useQuery<ArticlesByTopicQuery, ArticlesByTopicQueryVariables>(ArticlesByTopicDocument, baseOptions);
      }
export function useArticlesByTopicLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ArticlesByTopicQuery, ArticlesByTopicQueryVariables>) {
          return Apollo.useLazyQuery<ArticlesByTopicQuery, ArticlesByTopicQueryVariables>(ArticlesByTopicDocument, baseOptions);
        }
export type ArticlesByTopicQueryHookResult = ReturnType<typeof useArticlesByTopicQuery>;
export type ArticlesByTopicLazyQueryHookResult = ReturnType<typeof useArticlesByTopicLazyQuery>;
export type ArticlesByTopicQueryResult = Apollo.QueryResult<ArticlesByTopicQuery, ArticlesByTopicQueryVariables>;