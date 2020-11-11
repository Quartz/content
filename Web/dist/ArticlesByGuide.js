import { gql } from '@apollo/client';
import { GuidePartsFragmentDoc } from './GuideParts';
import { ArticleTeaserPartsFragmentDoc } from './ArticleTeaserParts';
import * as Apollo from '@apollo/client';
export const ArticlesByGuideDocument = /*#__PURE__*/ gql `
    query ArticlesByGuide($after: String = "", $perPage: Int, $slug: [String]) {
  guides(where: {slug: $slug}) {
    nodes {
      ...GuideParts
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
}
    ${GuidePartsFragmentDoc}
${ArticleTeaserPartsFragmentDoc}`;
/**
 * __useArticlesByGuideQuery__
 *
 * To run a query within a React component, call `useArticlesByGuideQuery` and pass it any options that fit your needs.
 * When your component renders, `useArticlesByGuideQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useArticlesByGuideQuery({
 *   variables: {
 *      after: // value for 'after'
 *      perPage: // value for 'perPage'
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useArticlesByGuideQuery(baseOptions) {
    return Apollo.useQuery(ArticlesByGuideDocument, baseOptions);
}
export function useArticlesByGuideLazyQuery(baseOptions) {
    return Apollo.useLazyQuery(ArticlesByGuideDocument, baseOptions);
}
//# sourceMappingURL=ArticlesByGuide.js.map