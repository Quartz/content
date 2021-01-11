import { gql } from '@apollo/client';
import { TopicPartsFragmentDoc } from './TopicParts';
import * as Apollo from '@apollo/client';
export const TopicsDocument = /*#__PURE__*/ gql `
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
export function useTopicsQuery(baseOptions) {
    return Apollo.useQuery(TopicsDocument, baseOptions);
}
export function useTopicsLazyQuery(baseOptions) {
    return Apollo.useLazyQuery(TopicsDocument, baseOptions);
}
//# sourceMappingURL=Topics.js.map