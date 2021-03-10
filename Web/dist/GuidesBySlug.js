import { gql } from '@apollo/client';
import { GuidePartsFragmentDoc } from './GuideParts';
import * as Apollo from '@apollo/client';
const defaultOptions = {};
export const GuidesBySlugDocument = /*#__PURE__*/ gql `
    query GuidesBySlug($perPage: Int!, $slug: [String]!) {
  guides(last: $perPage, where: {slug: $slug}) {
    nodes {
      ...GuideParts
    }
  }
}
    ${GuidePartsFragmentDoc}`;
/**
 * __useGuidesBySlugQuery__
 *
 * To run a query within a React component, call `useGuidesBySlugQuery` and pass it any options that fit your needs.
 * When your component renders, `useGuidesBySlugQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGuidesBySlugQuery({
 *   variables: {
 *      perPage: // value for 'perPage'
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useGuidesBySlugQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useQuery(GuidesBySlugDocument, options);
}
export function useGuidesBySlugLazyQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useLazyQuery(GuidesBySlugDocument, options);
}
//# sourceMappingURL=GuidesBySlug.js.map