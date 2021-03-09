import { gql } from '@apollo/client';
import { ArticlePartsFragmentDoc } from './ArticleParts';
import * as Apollo from '@apollo/client';
const defaultOptions = {};
export const ArticleDocument = /*#__PURE__*/ gql `
    query Article($id: Int!) {
  posts(where: {id: $id}) {
    nodes {
      ...ArticleParts
    }
  }
}
    ${ArticlePartsFragmentDoc}`;
/**
 * __useArticleQuery__
 *
 * To run a query within a React component, call `useArticleQuery` and pass it any options that fit your needs.
 * When your component renders, `useArticleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useArticleQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useArticleQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useQuery(ArticleDocument, options);
}
export function useArticleLazyQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useLazyQuery(ArticleDocument, options);
}
//# sourceMappingURL=Article.js.map