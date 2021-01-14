import { gql } from '@apollo/client';
import { ArticleTeaserPartsFragmentDoc } from './ArticleTeaserParts';
import { AuthorPartsFragmentDoc } from './AuthorParts';
import * as Apollo from '@apollo/client';
export const ContributorsQueryDocument = /*#__PURE__*/ gql `
    query ContributorsQuery($perPage: Int!) {
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
 * __useContributorsQueryQuery__
 *
 * To run a query within a React component, call `useContributorsQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useContributorsQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useContributorsQueryQuery({
 *   variables: {
 *      perPage: // value for 'perPage'
 *   },
 * });
 */
export function useContributorsQueryQuery(baseOptions) {
    return Apollo.useQuery(ContributorsQueryDocument, baseOptions);
}
export function useContributorsQueryLazyQuery(baseOptions) {
    return Apollo.useLazyQuery(ContributorsQueryDocument, baseOptions);
}
//# sourceMappingURL=Contributors.js.map