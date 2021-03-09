import { gql } from '@apollo/client';
import { ObsessionPartsFragmentDoc } from './ObsessionParts';
import { ArticleTeaserPartsFragmentDoc } from './ArticleTeaserParts';
import * as Apollo from '@apollo/client';
const defaultOptions = {};
export const ObsessionsDocument = /*#__PURE__*/ gql `
    query Obsessions($perPage: Int!, $location: MenuLocationEnum!) {
  menuItems(first: $perPage, where: {location: $location}) {
    nodes {
      id
      connectedObject {
        ... on Obsession {
          ...ObsessionParts
          posts(first: 1) {
            nodes {
              ...ArticleTeaserParts
            }
          }
        }
      }
    }
  }
}
    ${ObsessionPartsFragmentDoc}
${ArticleTeaserPartsFragmentDoc}`;
/**
 * __useObsessionsQuery__
 *
 * To run a query within a React component, call `useObsessionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useObsessionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useObsessionsQuery({
 *   variables: {
 *      perPage: // value for 'perPage'
 *      location: // value for 'location'
 *   },
 * });
 */
export function useObsessionsQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useQuery(ObsessionsDocument, options);
}
export function useObsessionsLazyQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useLazyQuery(ObsessionsDocument, options);
}
//# sourceMappingURL=Obsessions.js.map