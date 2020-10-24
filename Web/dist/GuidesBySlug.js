import { gql } from '@apollo/client';
import { GuidePartsFragmentDoc } from './GuideParts';
import * as Apollo from '@apollo/client';
export const GuidesBySlugDocument = /*#__PURE__*/ gql `
    query GuidesBySlug($perPage: Int!, $slugs: [String]!) {
  guides(first: $perPage, where: {slug: $slugs}) {
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
 *      slugs: // value for 'slugs'
 *   },
 * });
 */
export function useGuidesBySlugQuery(baseOptions) {
    return Apollo.useQuery(GuidesBySlugDocument, baseOptions);
}
export function useGuidesBySlugLazyQuery(baseOptions) {
    return Apollo.useLazyQuery(GuidesBySlugDocument, baseOptions);
}
//# sourceMappingURL=GuidesBySlug.js.map