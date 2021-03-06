import { gql } from '@apollo/client';
import { GuidePartsFragmentDoc } from './GuideParts';
import { ArticleTeaserPartsFragmentDoc } from './ArticleTeaserParts';
import * as Apollo from '@apollo/client';
const defaultOptions = {};
export const GuidesDocument = /*#__PURE__*/ gql `
    query Guides($before: String = "", $perPage: Int = 10, $postsPerGuide: Int = 1, $search: String) {
  guides(
    before: $before
    last: $perPage
    where: {search: $search, orderby: TERM_ID}
  ) {
    nodes {
      ...GuideParts
      posts(last: $postsPerGuide) {
        nodes {
          ...ArticleTeaserParts
        }
      }
    }
    pageInfo {
      hasPreviousPage
      startCursor
    }
  }
}
    ${GuidePartsFragmentDoc}
${ArticleTeaserPartsFragmentDoc}`;
/**
 * __useGuidesQuery__
 *
 * To run a query within a React component, call `useGuidesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGuidesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGuidesQuery({
 *   variables: {
 *      before: // value for 'before'
 *      perPage: // value for 'perPage'
 *      postsPerGuide: // value for 'postsPerGuide'
 *      search: // value for 'search'
 *   },
 * });
 */
export function useGuidesQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useQuery(GuidesDocument, options);
}
export function useGuidesLazyQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useLazyQuery(GuidesDocument, options);
}
//# sourceMappingURL=Guides.js.map