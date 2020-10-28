import type * as Types from './types';

import type { ObsessionPartsFragment } from './ObsessionParts';
import type { CollectionPartsFragment } from './CollectionParts';
import { gql } from '@apollo/client';
import { ObsessionPartsFragmentDoc } from './ObsessionParts';
import { CollectionPartsFragmentDoc } from './CollectionParts';
import * as Apollo from '@apollo/client';
export type EssentialsByArticleQueryVariables = Types.Exact<{
  id: Types.Scalars['ID'];
}>;


export type EssentialsByArticleQuery = (
  { __typename?: 'RootQuery' }
  & { post?: Types.Maybe<(
    { __typename?: 'Post' }
    & Pick<Types.Post, 'id'>
    & { obsessions?: Types.Maybe<(
      { __typename?: 'PostToObsessionConnection' }
      & { nodes?: Types.Maybe<Array<Types.Maybe<(
        { __typename?: 'Obsession' }
        & { essentials?: Types.Maybe<(
          { __typename?: 'ObsessionToCollectionConnection' }
          & { nodes?: Types.Maybe<Array<Types.Maybe<(
            { __typename?: 'Collection' }
            & CollectionPartsFragment
          )>>> }
        )> }
        & ObsessionPartsFragment
      )>>> }
    )> }
  )> }
);


export const EssentialsByArticleDocument = /*#__PURE__*/ gql`
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
export function useEssentialsByArticleQuery(baseOptions?: Apollo.QueryHookOptions<EssentialsByArticleQuery, EssentialsByArticleQueryVariables>) {
        return Apollo.useQuery<EssentialsByArticleQuery, EssentialsByArticleQueryVariables>(EssentialsByArticleDocument, baseOptions);
      }
export function useEssentialsByArticleLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<EssentialsByArticleQuery, EssentialsByArticleQueryVariables>) {
          return Apollo.useLazyQuery<EssentialsByArticleQuery, EssentialsByArticleQueryVariables>(EssentialsByArticleDocument, baseOptions);
        }
export type EssentialsByArticleQueryHookResult = ReturnType<typeof useEssentialsByArticleQuery>;
export type EssentialsByArticleLazyQueryHookResult = ReturnType<typeof useEssentialsByArticleLazyQuery>;
export type EssentialsByArticleQueryResult = Apollo.QueryResult<EssentialsByArticleQuery, EssentialsByArticleQueryVariables>;