import { gql } from '@apollo/client';
import { CollectionPartsFragmentDoc } from './CollectionParts';
import { ObsessionPartsFragmentDoc } from './ObsessionParts';
import { GuidePartsFragmentDoc } from './GuideParts';
import * as Apollo from '@apollo/client';
const defaultOptions = {};
export const EssentialsByArticlePreviewDocument = /*#__PURE__*/ gql `
    query EssentialsByArticlePreview($id: Int!, $time: Int!, $token: String!) {
  posts(where: {id: $id, preview: {time: $time, token: $token}}) {
    nodes {
      id
      essentials(first: 3) {
        nodes {
          ...CollectionParts
        }
      }
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
      guides {
        nodes {
          ...GuideParts
          essentials(first: 1) {
            nodes {
              ...CollectionParts
            }
          }
        }
      }
    }
  }
}
    ${CollectionPartsFragmentDoc}
${ObsessionPartsFragmentDoc}
${GuidePartsFragmentDoc}`;
/**
 * __useEssentialsByArticlePreviewQuery__
 *
 * To run a query within a React component, call `useEssentialsByArticlePreviewQuery` and pass it any options that fit your needs.
 * When your component renders, `useEssentialsByArticlePreviewQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEssentialsByArticlePreviewQuery({
 *   variables: {
 *      id: // value for 'id'
 *      time: // value for 'time'
 *      token: // value for 'token'
 *   },
 * });
 */
export function useEssentialsByArticlePreviewQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useQuery(EssentialsByArticlePreviewDocument, options);
}
export function useEssentialsByArticlePreviewLazyQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useLazyQuery(EssentialsByArticlePreviewDocument, options);
}
//# sourceMappingURL=EssentialsByArticlePreview.js.map