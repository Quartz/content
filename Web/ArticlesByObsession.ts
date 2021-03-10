import type * as Types from './types';

import type { ObsessionPartsFragment } from './ObsessionParts';
import type { ArticleTeaserPartsFragment } from './ArticleTeaserParts';
import type { BulletinPartsFragment } from './BulletinParts';
import type { PromotionPartsFragment } from './PromotionParts';
import { gql } from '@apollo/client';
import { ObsessionPartsFragmentDoc } from './ObsessionParts';
import { ArticleTeaserPartsFragmentDoc } from './ArticleTeaserParts';
import { BulletinPartsFragmentDoc } from './BulletinParts';
import { PromotionPartsFragmentDoc } from './PromotionParts';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type ArticlesByObsessionQueryVariables = Types.Exact<{
  after?: Types.Maybe<Types.Scalars['String']>;
  perPage?: Types.Maybe<Types.Scalars['Int']>;
  slug: Array<Types.Maybe<Types.Scalars['String']>> | Types.Maybe<Types.Scalars['String']>;
}>;


export type ArticlesByObsessionQuery = { __typename?: 'RootQuery', obsessions?: Types.Maybe<{ __typename?: 'RootQueryToObsessionConnection', nodes?: Types.Maybe<Array<Types.Maybe<(
      { __typename?: 'Obsession', posts?: Types.Maybe<{ __typename?: 'ObsessionToContentUnionConnection', nodes?: Types.Maybe<Array<Types.Maybe<(
          { __typename?: 'Post' }
          & ArticleTeaserPartsFragment
        ) | { __typename?: 'Page' } | { __typename?: 'MediaItem' } | { __typename?: 'Email' } | { __typename?: 'Chapter' } | (
          { __typename?: 'Promotion' }
          & PromotionPartsFragment
        ) | { __typename?: 'Collection' } | (
          { __typename?: 'Bulletin' }
          & BulletinPartsFragment
        )>>>, pageInfo?: Types.Maybe<{ __typename?: 'WPPageInfo', endCursor?: Types.Maybe<string>, hasNextPage: boolean }> }> }
      & ObsessionPartsFragment
    )>>> }> };


export const ArticlesByObsessionDocument = /*#__PURE__*/ gql`
    query ArticlesByObsession($after: String = "", $perPage: Int = 10, $slug: [String]!) {
  obsessions(where: {slug: $slug}) {
    nodes {
      ...ObsessionParts
      posts: content(after: $after, first: $perPage) {
        nodes {
          ... on Post {
            ...ArticleTeaserParts
          }
          ... on Bulletin {
            ...BulletinParts
          }
          ... on Promotion {
            ...PromotionParts
          }
        }
        pageInfo {
          endCursor
          hasNextPage
        }
      }
    }
  }
}
    ${ObsessionPartsFragmentDoc}
${ArticleTeaserPartsFragmentDoc}
${BulletinPartsFragmentDoc}
${PromotionPartsFragmentDoc}`;

/**
 * __useArticlesByObsessionQuery__
 *
 * To run a query within a React component, call `useArticlesByObsessionQuery` and pass it any options that fit your needs.
 * When your component renders, `useArticlesByObsessionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useArticlesByObsessionQuery({
 *   variables: {
 *      after: // value for 'after'
 *      perPage: // value for 'perPage'
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useArticlesByObsessionQuery(baseOptions: Apollo.QueryHookOptions<ArticlesByObsessionQuery, ArticlesByObsessionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ArticlesByObsessionQuery, ArticlesByObsessionQueryVariables>(ArticlesByObsessionDocument, options);
      }
export function useArticlesByObsessionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ArticlesByObsessionQuery, ArticlesByObsessionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ArticlesByObsessionQuery, ArticlesByObsessionQueryVariables>(ArticlesByObsessionDocument, options);
        }
export type ArticlesByObsessionQueryHookResult = ReturnType<typeof useArticlesByObsessionQuery>;
export type ArticlesByObsessionLazyQueryHookResult = ReturnType<typeof useArticlesByObsessionLazyQuery>;
export type ArticlesByObsessionQueryResult = Apollo.QueryResult<ArticlesByObsessionQuery, ArticlesByObsessionQueryVariables>;