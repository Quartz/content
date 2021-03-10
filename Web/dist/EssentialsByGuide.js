import { gql } from '@apollo/client';
import { CollectionPartsFragmentDoc } from './CollectionParts';
import * as Apollo from '@apollo/client';
const defaultOptions = {};
export const EssentialsByGuideDocument = /*#__PURE__*/ gql `
    query EssentialsByGuide($slug: String!) {
  guides(last: 1, where: {slug: [$slug]}) {
    nodes {
      id
      essentials(first: 1) {
        nodes {
          ...CollectionParts
        }
      }
    }
  }
}
    ${CollectionPartsFragmentDoc}`;
/**
 * __useEssentialsByGuideQuery__
 *
 * To run a query within a React component, call `useEssentialsByGuideQuery` and pass it any options that fit your needs.
 * When your component renders, `useEssentialsByGuideQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEssentialsByGuideQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useEssentialsByGuideQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useQuery(EssentialsByGuideDocument, options);
}
export function useEssentialsByGuideLazyQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useLazyQuery(EssentialsByGuideDocument, options);
}
//# sourceMappingURL=EssentialsByGuide.js.map