import { gql } from '@apollo/client';
import { ArticleTeaserPartsFragmentDoc } from './ArticleTeaserParts';
import * as Apollo from '@apollo/client';
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
    return Apollo.useQuery(ArticleTeaserDocument, baseOptions);
}
export function useArticleTeaserLazyQuery(baseOptions) {
    return Apollo.useLazyQuery(ArticleTeaserDocument, baseOptions);
}
//# sourceMappingURL=ArticleTeaser.js.map