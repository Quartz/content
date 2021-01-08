import type * as Types from './types';

import type { GuidePartsFragment } from './GuideParts';
import { gql } from '@apollo/client';
import { GuidePartsFragmentDoc } from './GuideParts';
import * as Apollo from '@apollo/client';
export type GuidesByTopicQueryVariables = Types.Exact<{
  slug: Array<Types.Maybe<Types.Scalars['String']>>;
}>;


export type GuidesByTopicQuery = { __typename?: 'RootQuery', topics?: Types.Maybe<{ __typename?: 'RootQueryToTopicConnection', nodes?: Types.Maybe<Array<Types.Maybe<{ __typename?: 'Topic', id: string, name?: Types.Maybe<string>, slug?: Types.Maybe<string>, guides?: Types.Maybe<{ __typename?: 'TopicToGuideConnection', nodes?: Types.Maybe<Array<Types.Maybe<(
          { __typename?: 'Guide' }
          & GuidePartsFragment
        )>>> }> }>>> }> };


export const GuidesByTopicDocument = /*#__PURE__*/ gql`
    query GuidesByTopic($slug: [String]!) {
  topics(where: {slug: $slug}) {
    nodes {
      id
      name
      slug
      guides(first: 50) {
        nodes {
          ...GuideParts
        }
      }
    }
  }
}
    ${GuidePartsFragmentDoc}`;

/**
 * __useGuidesByTopicQuery__
 *
 * To run a query within a React component, call `useGuidesByTopicQuery` and pass it any options that fit your needs.
 * When your component renders, `useGuidesByTopicQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGuidesByTopicQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useGuidesByTopicQuery(baseOptions: Apollo.QueryHookOptions<GuidesByTopicQuery, GuidesByTopicQueryVariables>) {
        return Apollo.useQuery<GuidesByTopicQuery, GuidesByTopicQueryVariables>(GuidesByTopicDocument, baseOptions);
      }
export function useGuidesByTopicLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GuidesByTopicQuery, GuidesByTopicQueryVariables>) {
          return Apollo.useLazyQuery<GuidesByTopicQuery, GuidesByTopicQueryVariables>(GuidesByTopicDocument, baseOptions);
        }
export type GuidesByTopicQueryHookResult = ReturnType<typeof useGuidesByTopicQuery>;
export type GuidesByTopicLazyQueryHookResult = ReturnType<typeof useGuidesByTopicLazyQuery>;
export type GuidesByTopicQueryResult = Apollo.QueryResult<GuidesByTopicQuery, GuidesByTopicQueryVariables>;