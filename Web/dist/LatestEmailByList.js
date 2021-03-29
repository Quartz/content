import { gql } from '@apollo/client';
import { EmailPartsFragmentDoc } from './EmailParts';
import * as Apollo from '@apollo/client';
const defaultOptions = {};
export const LatestEmailByListDocument = /*#__PURE__*/ gql `
    query LatestEmailByList($slug: [String]!) {
  emailLists(first: 1, where: {slug: $slug}) {
    nodes {
      id
      emails(first: 1) {
        nodes {
          html
          ...EmailParts
        }
      }
    }
  }
}
    ${EmailPartsFragmentDoc}`;
/**
 * __useLatestEmailByListQuery__
 *
 * To run a query within a React component, call `useLatestEmailByListQuery` and pass it any options that fit your needs.
 * When your component renders, `useLatestEmailByListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLatestEmailByListQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useLatestEmailByListQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useQuery(LatestEmailByListDocument, options);
}
export function useLatestEmailByListLazyQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useLazyQuery(LatestEmailByListDocument, options);
}
//# sourceMappingURL=LatestEmailByList.js.map