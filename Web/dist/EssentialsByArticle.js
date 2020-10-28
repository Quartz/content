import { gql } from '@apollo/client';
import { ObsessionPartsFragmentDoc } from './ObsessionParts';
import { CollectionPartsFragmentDoc } from './CollectionParts';
import * as Apollo from '@apollo/client';
export const EssentialsByArticleDocument = /*#__PURE__*/ gql `
    query EssentialsByArticle($id: ID!) {
  post(id: $id) {
    id
    obsessions {
      nodes {
        ...ObsessionParts
        essentials(first: 1) {
          nodes {
            ...CollectionParts
          }
        }
      }
    }
  }
}
    ${ObsessionPartsFragmentDoc}
${CollectionPartsFragmentDoc}`;
/**
 * __useEssentialsByArticleQuery__
 *
 * To run a query within a React component, call `useEssentialsByArticleQuery` and pass it any options that fit your needs.
 * When your component renders, `useEssentialsByArticleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEssentialsByArticleQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useEssentialsByArticleQuery(baseOptions) {
    return Apollo.useQuery(EssentialsByArticleDocument, baseOptions);
}
export function useEssentialsByArticleLazyQuery(baseOptions) {
    return Apollo.useLazyQuery(EssentialsByArticleDocument, baseOptions);
}
//# sourceMappingURL=EssentialsByArticle.js.map