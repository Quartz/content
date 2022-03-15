import { gql } from '@apollo/client';
import { GuidePartsFragmentDoc } from './GuideParts';
import { CollectionPartsFragmentDoc } from './CollectionParts';
import { ArticleTeaserPartsFragmentDoc } from './ArticleTeaserParts';
import * as Apollo from '@apollo/client';
const defaultOptions = {};
export const ArticlesByGuide2Document = /*#__PURE__*/ gql `
    query ArticlesByGuide2($after: String = "", $perPage: Int!, $slug: ID!) {
  guide(id: $slug, idType: SLUG) {
    ...GuideParts
    essentials(first: 1) {
      nodes {
        ...CollectionParts
      }
    }
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
    ${GuidePartsFragmentDoc}
${CollectionPartsFragmentDoc}
${ArticleTeaserPartsFragmentDoc}`;
/**
 * __useArticlesByGuide2Query__
 *
 * To run a query within a React component, call `useArticlesByGuide2Query` and pass it any options that fit your needs.
 * When your component renders, `useArticlesByGuide2Query` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useArticlesByGuide2Query({
 *   variables: {
 *      after: // value for 'after'
 *      perPage: // value for 'perPage'
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useArticlesByGuide2Query(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useQuery(ArticlesByGuide2Document, options);
}
export function useArticlesByGuide2LazyQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useLazyQuery(ArticlesByGuide2Document, options);
}
//# sourceMappingURL=ArticlesByGuide2.js.map