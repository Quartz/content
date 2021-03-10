import { gql } from '@apollo/client';
import { ArticleTeaserPartsFragmentDoc } from './ArticleTeaserParts';
import { AuthorPartsFragmentDoc } from './AuthorParts';
import * as Apollo from '@apollo/client';
const defaultOptions = {};
export const ContributorsDocument = /*#__PURE__*/ gql `
    query Contributors($perPage: Int!) {
  menuItems(first: $perPage, where: {location: AUTHORS_WORK}) {
    nodes {
      id
      connectedObject {
        ... on CoAuthor {
          posts(first: 1) {
            nodes {
              ...ArticleTeaserParts
              authors: coAuthors {
                edges {
                  node {
                    ...AuthorParts
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
    ${ArticleTeaserPartsFragmentDoc}
${AuthorPartsFragmentDoc}`;
/**
 * __useContributorsQuery__
 *
 * To run a query within a React component, call `useContributorsQuery` and pass it any options that fit your needs.
 * When your component renders, `useContributorsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useContributorsQuery({
 *   variables: {
 *      perPage: // value for 'perPage'
 *   },
 * });
 */
export function useContributorsQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useQuery(ContributorsDocument, options);
}
export function useContributorsLazyQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useLazyQuery(ContributorsDocument, options);
}
//# sourceMappingURL=Contributors.js.map