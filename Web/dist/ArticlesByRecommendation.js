import { gql } from '@apollo/client';
import { ArticleTeaserPartsFragmentDoc } from './ArticleTeaserParts';
import * as Apollo from '@apollo/client';
const defaultOptions = {};
export const ArticlesByRecommendationDocument = /*#__PURE__*/ gql `
    query ArticlesByRecommendation($perPage: Int!, $postId: Int!) {
  posts(first: $perPage, where: {recommended: {id: $postId}}) {
    nodes {
      ...ArticleTeaserParts
    }
  }
}
    ${ArticleTeaserPartsFragmentDoc}`;
/**
 * __useArticlesByRecommendationQuery__
 *
 * To run a query within a React component, call `useArticlesByRecommendationQuery` and pass it any options that fit your needs.
 * When your component renders, `useArticlesByRecommendationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useArticlesByRecommendationQuery({
 *   variables: {
 *      perPage: // value for 'perPage'
 *      postId: // value for 'postId'
 *   },
 * });
 */
export function useArticlesByRecommendationQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useQuery(ArticlesByRecommendationDocument, options);
}
export function useArticlesByRecommendationLazyQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useLazyQuery(ArticlesByRecommendationDocument, options);
}
//# sourceMappingURL=ArticlesByRecommendation.js.map