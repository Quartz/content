import { gql } from '@apollo/client';
import { ArticleTeaserPartsFragmentDoc } from './ArticleTeaserParts';
import * as Apollo from '@apollo/client';
const defaultOptions = {};
export const ArticleOrBulletinTeaserDocument = /*#__PURE__*/ gql `
    query ArticleOrBulletinTeaser($id: Int!) {
  posts(where: {id: $id}) {
    nodes {
      ...ArticleTeaserParts
    }
  }
}
    ${ArticleTeaserPartsFragmentDoc}`;
/**
 * __useArticleOrBulletinTeaserQuery__
 *
 * To run a query within a React component, call `useArticleOrBulletinTeaserQuery` and pass it any options that fit your needs.
 * When your component renders, `useArticleOrBulletinTeaserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useArticleOrBulletinTeaserQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useArticleOrBulletinTeaserQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useQuery(ArticleOrBulletinTeaserDocument, options);
}
export function useArticleOrBulletinTeaserLazyQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useLazyQuery(ArticleOrBulletinTeaserDocument, options);
}
//# sourceMappingURL=ArticleTeaser.js.map