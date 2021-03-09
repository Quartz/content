import { gql } from '@apollo/client';
import { TagPartsFragmentDoc } from './TagParts';
import { ArticleTeaserPartsFragmentDoc } from './ArticleTeaserParts';
import * as Apollo from '@apollo/client';
const defaultOptions = {};
export const ArticlesByTagDocument = /*#__PURE__*/ gql `
    query ArticlesByTag($after: String = "", $perPage: Int, $slug: [String]) {
  tags(where: {slug: $slug}) {
    nodes {
      ...TagParts
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
    ${TagPartsFragmentDoc}
${ArticleTeaserPartsFragmentDoc}`;
/**
 * __useArticlesByTagQuery__
 *
 * To run a query within a React component, call `useArticlesByTagQuery` and pass it any options that fit your needs.
 * When your component renders, `useArticlesByTagQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useArticlesByTagQuery({
 *   variables: {
 *      after: // value for 'after'
 *      perPage: // value for 'perPage'
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useArticlesByTagQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useQuery(ArticlesByTagDocument, options);
}
export function useArticlesByTagLazyQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useLazyQuery(ArticlesByTagDocument, options);
}
//# sourceMappingURL=ArticlesByTag.js.map