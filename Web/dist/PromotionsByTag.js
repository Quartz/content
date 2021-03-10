import { gql } from '@apollo/client';
import { PromotionPartsFragmentDoc } from './PromotionParts';
import { BlockPartsFragmentDoc } from './BlockParts';
import * as Apollo from '@apollo/client';
const defaultOptions = {};
export const PromotionsByTagDocument = /*#__PURE__*/ gql `
    query PromotionsByTag($perPage: Int!, $slug: [String]!) {
  promotions(first: $perPage, where: {tagSlugIn: $slug}) {
    nodes {
      ...PromotionParts
      blocks {
        ...BlockParts
      }
    }
  }
}
    ${PromotionPartsFragmentDoc}
${BlockPartsFragmentDoc}`;
/**
 * __usePromotionsByTagQuery__
 *
 * To run a query within a React component, call `usePromotionsByTagQuery` and pass it any options that fit your needs.
 * When your component renders, `usePromotionsByTagQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePromotionsByTagQuery({
 *   variables: {
 *      perPage: // value for 'perPage'
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function usePromotionsByTagQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useQuery(PromotionsByTagDocument, options);
}
export function usePromotionsByTagLazyQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useLazyQuery(PromotionsByTagDocument, options);
}
//# sourceMappingURL=PromotionsByTag.js.map