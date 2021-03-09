import { gql } from '@apollo/client';
import { ArticleTeaserPartsFragmentDoc } from './ArticleTeaserParts';
import * as Apollo from '@apollo/client';
const defaultOptions = {};
export const ArticleTeaserDocument = /*#__PURE__*/ gql `
    query ArticleTeaser($id: ID!) {
  post(id: $id) {
    ...ArticleTeaserParts
  }
}
    ${ArticleTeaserPartsFragmentDoc}`;
/**
 * __useArticleTeaserQuery__
 *
 * To run a query within a React component, call `useArticleTeaserQuery` and pass it any options that fit your needs.
 * When your component renders, `useArticleTeaserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useArticleTeaserQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useArticleTeaserQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useQuery(ArticleTeaserDocument, options);
}
export function useArticleTeaserLazyQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useLazyQuery(ArticleTeaserDocument, options);
}
//# sourceMappingURL=ArticleTeaser.js.map