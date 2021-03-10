import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {};
export const PageByUriDocument = /*#__PURE__*/ gql `
    query PageByUri($slug: String!) {
  pageBy(uri: $slug) {
    id
    content
    title
  }
}
    `;
/**
 * __usePageByUriQuery__
 *
 * To run a query within a React component, call `usePageByUriQuery` and pass it any options that fit your needs.
 * When your component renders, `usePageByUriQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePageByUriQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function usePageByUriQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useQuery(PageByUriDocument, options);
}
export function usePageByUriLazyQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useLazyQuery(PageByUriDocument, options);
}
//# sourceMappingURL=PageByUri.js.map