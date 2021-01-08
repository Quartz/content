import { gql } from '@apollo/client';
import { GuidePartsFragmentDoc } from './GuideParts';
import * as Apollo from '@apollo/client';
export const GuidesByTopicDocument = /*#__PURE__*/ gql `
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
export function useGuidesByTopicQuery(baseOptions) {
    return Apollo.useQuery(GuidesByTopicDocument, baseOptions);
}
export function useGuidesByTopicLazyQuery(baseOptions) {
    return Apollo.useLazyQuery(GuidesByTopicDocument, baseOptions);
}
//# sourceMappingURL=GuidesByTopic.js.map