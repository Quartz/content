import { gql } from '@apollo/client';
import { ObsessionPartsFragmentDoc } from './ObsessionParts';
import { ArticleTeaserPartsFragmentDoc } from './ArticleTeaserParts';
import { BulletinPartsFragmentDoc } from './BulletinParts';
import { PromotionPartsFragmentDoc } from './PromotionParts';
import * as Apollo from '@apollo/client';
export const ArticlesByObsessionDocument = /*#__PURE__*/ gql `
    query ArticlesByObsession($after: String = "", $perPage: Int = 10, $slug: [String]!) {
  obsessions(where: {slug: $slug}) {
    nodes {
      ...ObsessionParts
      posts: content(after: $after, first: $perPage) {
        nodes {
          ... on Post {
            ...ArticleTeaserParts
          }
          ... on Bulletin {
            ...BulletinParts
          }
          ... on Promotion {
            ...PromotionParts
          }
        }
        pageInfo {
          endCursor
          hasNextPage
        }
      }
    }
  }
}
    ${ObsessionPartsFragmentDoc}
${ArticleTeaserPartsFragmentDoc}
${BulletinPartsFragmentDoc}
${PromotionPartsFragmentDoc}`;
/**
 * __useArticlesByObsessionQuery__
 *
 * To run a query within a React component, call `useArticlesByObsessionQuery` and pass it any options that fit your needs.
 * When your component renders, `useArticlesByObsessionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useArticlesByObsessionQuery({
 *   variables: {
 *      after: // value for 'after'
 *      perPage: // value for 'perPage'
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useArticlesByObsessionQuery(baseOptions) {
    return Apollo.useQuery(ArticlesByObsessionDocument, baseOptions);
}
export function useArticlesByObsessionLazyQuery(baseOptions) {
    return Apollo.useLazyQuery(ArticlesByObsessionDocument, baseOptions);
}
//# sourceMappingURL=ArticlesByObsession.js.map