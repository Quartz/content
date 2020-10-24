import { gql } from '@apollo/client';
import { ArticlePartsFragmentDoc } from './ArticleParts';
import * as Apollo from '@apollo/client';
export const ArticlePreviewDocument = /*#__PURE__*/ gql `
    query ArticlePreview($id: Int!, $time: Int!, $token: String!) {
  posts(where: {id: $id, preview: {time: $time, token: $token}}) {
    nodes {
      ...ArticleParts
    }
  }
}
    ${ArticlePartsFragmentDoc}`;
/**
 * __useArticlePreviewQuery__
 *
 * To run a query within a React component, call `useArticlePreviewQuery` and pass it any options that fit your needs.
 * When your component renders, `useArticlePreviewQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useArticlePreviewQuery({
 *   variables: {
 *      id: // value for 'id'
 *      time: // value for 'time'
 *      token: // value for 'token'
 *   },
 * });
 */
export function useArticlePreviewQuery(baseOptions) {
    return Apollo.useQuery(ArticlePreviewDocument, baseOptions);
}
export function useArticlePreviewLazyQuery(baseOptions) {
    return Apollo.useLazyQuery(ArticlePreviewDocument, baseOptions);
}
//# sourceMappingURL=ArticlePreview.js.map