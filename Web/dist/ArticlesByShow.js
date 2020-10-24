import { gql } from '@apollo/client';
import { ShowPartsFragmentDoc } from './ShowParts';
import { ArticleTeaserPartsFragmentDoc } from './ArticleTeaserParts';
import * as Apollo from '@apollo/client';
export const ArticlesByShowDocument = /*#__PURE__*/ gql `
    query ArticlesByShow($after: String = "", $perPage: Int, $slug: [String]) {
  shows(where: {slug: $slug}) {
    nodes {
      ...ShowParts
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
    ${ShowPartsFragmentDoc}
${ArticleTeaserPartsFragmentDoc}`;
/**
 * __useArticlesByShowQuery__
 *
 * To run a query within a React component, call `useArticlesByShowQuery` and pass it any options that fit your needs.
 * When your component renders, `useArticlesByShowQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useArticlesByShowQuery({
 *   variables: {
 *      after: // value for 'after'
 *      perPage: // value for 'perPage'
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useArticlesByShowQuery(baseOptions) {
    return Apollo.useQuery(ArticlesByShowDocument, baseOptions);
}
export function useArticlesByShowLazyQuery(baseOptions) {
    return Apollo.useLazyQuery(ArticlesByShowDocument, baseOptions);
}
//# sourceMappingURL=ArticlesByShow.js.map