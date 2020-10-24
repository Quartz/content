import * as Types from './types';

import { GuidePartsFragment } from './GuideParts';
import { ArticleTeaserPartsFragment } from './ArticleTeaserParts';
import { gql } from '@apollo/client';
import { GuidePartsFragmentDoc } from './GuideParts';
import { ArticleTeaserPartsFragmentDoc } from './ArticleTeaserParts';
import * as Apollo from '@apollo/client';
export type GuidesQueryVariables = Types.Exact<{
  before?: Types.Maybe<Types.Scalars['String']>;
  perPage?: Types.Maybe<Types.Scalars['Int']>;
  postsPerGuide?: Types.Maybe<Types.Scalars['Int']>;
}>;


export type GuidesQuery = (
  { __typename?: 'RootQuery' }
  & { guides?: Types.Maybe<(
    { __typename?: 'RootQueryToGuideConnection' }
    & { nodes?: Types.Maybe<Array<Types.Maybe<(
      { __typename?: 'Guide' }
      & { posts?: Types.Maybe<(
        { __typename?: 'GuideToPostConnection' }
        & { nodes?: Types.Maybe<Array<Types.Maybe<(
          { __typename?: 'Post' }
          & ArticleTeaserPartsFragment
        )>>> }
      )> }
      & GuidePartsFragment
    )>>>, pageInfo?: Types.Maybe<(
      { __typename?: 'WPPageInfo' }
      & Pick<Types.WpPageInfo, 'hasPreviousPage' | 'startCursor'>
    )> }
  )> }
);


export const GuidesDocument = /*#__PURE__*/ gql`
    query Guides($before: String = "", $perPage: Int = 10, $postsPerGuide: Int = 1) {
  guides(before: $before, last: $perPage, where: {orderby: TERM_ID}) {
    nodes {
      ...GuideParts
      posts(last: $postsPerGuide) {
        nodes {
          ...ArticleTeaserParts
        }
      }
    }
    pageInfo {
      hasPreviousPage
      startCursor
    }
  }
}
    ${GuidePartsFragmentDoc}
${ArticleTeaserPartsFragmentDoc}`;

/**
 * __useGuidesQuery__
 *
 * To run a query within a React component, call `useGuidesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGuidesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGuidesQuery({
 *   variables: {
 *      before: // value for 'before'
 *      perPage: // value for 'perPage'
 *      postsPerGuide: // value for 'postsPerGuide'
 *   },
 * });
 */
export function useGuidesQuery(baseOptions?: Apollo.QueryHookOptions<GuidesQuery, GuidesQueryVariables>) {
        return Apollo.useQuery<GuidesQuery, GuidesQueryVariables>(GuidesDocument, baseOptions);
      }
export function useGuidesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GuidesQuery, GuidesQueryVariables>) {
          return Apollo.useLazyQuery<GuidesQuery, GuidesQueryVariables>(GuidesDocument, baseOptions);
        }
export type GuidesQueryHookResult = ReturnType<typeof useGuidesQuery>;
export type GuidesLazyQueryHookResult = ReturnType<typeof useGuidesLazyQuery>;
export type GuidesQueryResult = Apollo.QueryResult<GuidesQuery, GuidesQueryVariables>;