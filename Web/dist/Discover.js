import { gql } from '@apollo/client';
import { ArticleTeaserPartsFragmentDoc } from './ArticleTeaserParts';
import { TopicPartsFragmentDoc } from './TopicParts';
import * as Apollo from '@apollo/client';
const defaultOptions = {};
export const DiscoverDocument = /*#__PURE__*/ gql `
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
export function useDiscoverQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useQuery(DiscoverDocument, options);
}
export function useDiscoverLazyQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useLazyQuery(DiscoverDocument, options);
}
//# sourceMappingURL=Discover.js.map