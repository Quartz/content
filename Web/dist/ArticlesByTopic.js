import { gql } from '@apollo/client';
import { TopicPartsFragmentDoc } from './TopicParts';
import { ArticleTeaserPartsFragmentDoc } from './ArticleTeaserParts';
import * as Apollo from '@apollo/client';
const defaultOptions = {};
export const ArticlesByTopicDocument = /*#__PURE__*/ gql `
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
export function useArticlesByTopicQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useQuery(ArticlesByTopicDocument, options);
}
export function useArticlesByTopicLazyQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useLazyQuery(ArticlesByTopicDocument, options);
}
//# sourceMappingURL=ArticlesByTopic.js.map