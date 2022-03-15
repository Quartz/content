import type * as Types from './types';

import type { GuidePartsFragment } from './GuideParts';
import type { CollectionPartsFragment } from './CollectionParts';
import type { ArticleTeaserPartsFragment } from './ArticleTeaserParts';
import { gql } from '@apollo/client';
import { GuidePartsFragmentDoc } from './GuideParts';
import { CollectionPartsFragmentDoc } from './CollectionParts';
import { ArticleTeaserPartsFragmentDoc } from './ArticleTeaserParts';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type ArticlesByGuide2QueryVariables = Types.Exact<{
  after?: Types.Maybe<Types.Scalars['String']>;
  perPage: Types.Scalars['Int'];
  slug: Types.Scalars['ID'];
}>;


export type ArticlesByGuide2Query = { __typename?: 'RootQuery', guide?: Types.Maybe<(
    { __typename?: 'Guide', essentials?: Types.Maybe<{ __typename?: 'GuideToCollectionConnection', nodes?: Types.Maybe<Array<Types.Maybe<(
        { __typename?: 'Collection' }
        & CollectionPartsFragment
      )>>> }>, posts?: Types.Maybe<{ __typename?: 'GuideToPostConnection', nodes?: Types.Maybe<Array<Types.Maybe<(
        { __typename?: 'Post' }
        & ArticleTeaserPartsFragment
      )>>>, pageInfo?: Types.Maybe<{ __typename?: 'WPPageInfo', hasNextPage: boolean, endCursor?: Types.Maybe<string> }> }> }
    & GuidePartsFragment
  )> };


export const ArticlesByGuide2Document = /*#__PURE__*/ gql`
    query ArticlesByGuide2($after: String = "", $perPage: Int!, $slug: ID!) {
  guide(id: $slug, idType: SLUG) {
    ...GuideParts
    essentials(first: 1) {
      nodes {
        ...CollectionParts
      }
    }
    posts(
      after: $after
      first: $perPage
      where: {orderby: {field: DATE, order: ASC}}
    ) {
      nodes {
        ...ArticleTeaserParts
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
}
    ${GuidePartsFragmentDoc}
${CollectionPartsFragmentDoc}
${ArticleTeaserPartsFragmentDoc}`;

/**
 * __useArticlesByGuide2Query__
 *
 * To run a query within a React component, call `useArticlesByGuide2Query` and pass it any options that fit your needs.
 * When your component renders, `useArticlesByGuide2Query` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useArticlesByGuide2Query({
 *   variables: {
 *      after: // value for 'after'
 *      perPage: // value for 'perPage'
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useArticlesByGuide2Query(baseOptions: Apollo.QueryHookOptions<ArticlesByGuide2Query, ArticlesByGuide2QueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ArticlesByGuide2Query, ArticlesByGuide2QueryVariables>(ArticlesByGuide2Document, options);
      }
export function useArticlesByGuide2LazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ArticlesByGuide2Query, ArticlesByGuide2QueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ArticlesByGuide2Query, ArticlesByGuide2QueryVariables>(ArticlesByGuide2Document, options);
        }
export type ArticlesByGuide2QueryHookResult = ReturnType<typeof useArticlesByGuide2Query>;
export type ArticlesByGuide2LazyQueryHookResult = ReturnType<typeof useArticlesByGuide2LazyQuery>;
export type ArticlesByGuide2QueryResult = Apollo.QueryResult<ArticlesByGuide2Query, ArticlesByGuide2QueryVariables>;