import { gql } from '@apollo/client';
import { CollectionPartsFragmentDoc } from './CollectionParts';
import * as Apollo from '@apollo/client';
export const EssentialsByObsessionDocument = /*#__PURE__*/ gql `
    query EssentialsByObsession($slug: String!) {
  obsessions(where: {slug: [$slug]}) {
    nodes {
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
 * __useEssentialsByObsessionQuery__
 *
 * To run a query within a React component, call `useEssentialsByObsessionQuery` and pass it any options that fit your needs.
 * When your component renders, `useEssentialsByObsessionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEssentialsByObsessionQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useEssentialsByObsessionQuery(baseOptions) {
    return Apollo.useQuery(EssentialsByObsessionDocument, baseOptions);
}
export function useEssentialsByObsessionLazyQuery(baseOptions) {
    return Apollo.useLazyQuery(EssentialsByObsessionDocument, baseOptions);
}
//# sourceMappingURL=EssentialsByObsession.js.map