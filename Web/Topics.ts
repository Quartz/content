import type * as Types from './types';

import type { TopicPartsFragment } from './TopicParts';
import { gql } from '@apollo/client';
import { TopicPartsFragmentDoc } from './TopicParts';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type TopicsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type TopicsQuery = { __typename?: 'RootQuery', topics?: Types.Maybe<{ __typename?: 'RootQueryToTopicConnection', nodes?: Types.Maybe<Array<Types.Maybe<(
      { __typename?: 'Topic' }
      & TopicPartsFragment
    )>>> }> };


export const TopicsDocument = /*#__PURE__*/ gql`
    query Topics {
  topics {
    nodes {
      ...TopicParts
    }
  }
}
    ${TopicPartsFragmentDoc}`;

/**
 * __useTopicsQuery__
 *
 * To run a query within a React component, call `useTopicsQuery` and pass it any options that fit your needs.
 * When your component renders, `useTopicsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTopicsQuery({
 *   variables: {
 *   },
 * });
 */
export function useTopicsQuery(baseOptions?: Apollo.QueryHookOptions<TopicsQuery, TopicsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TopicsQuery, TopicsQueryVariables>(TopicsDocument, options);
      }
export function useTopicsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TopicsQuery, TopicsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TopicsQuery, TopicsQueryVariables>(TopicsDocument, options);
        }
export type TopicsQueryHookResult = ReturnType<typeof useTopicsQuery>;
export type TopicsLazyQueryHookResult = ReturnType<typeof useTopicsLazyQuery>;
export type TopicsQueryResult = Apollo.QueryResult<TopicsQuery, TopicsQueryVariables>;