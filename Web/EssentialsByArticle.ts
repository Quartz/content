import type * as Types from './types';

import type { CollectionPartsFragment } from './CollectionParts';
import type { ObsessionPartsFragment } from './ObsessionParts';
import type { GuidePartsFragment } from './GuideParts';
import { gql } from '@apollo/client';
import { CollectionPartsFragmentDoc } from './CollectionParts';
import { ObsessionPartsFragmentDoc } from './ObsessionParts';
import { GuidePartsFragmentDoc } from './GuideParts';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type EssentialsByArticleQueryVariables = Types.Exact<{
  id: Types.Scalars['ID'];
}>;


export type EssentialsByArticleQuery = { __typename?: 'RootQuery', post?: Types.Maybe<{ __typename?: 'Post', id: string, essentials?: Types.Maybe<{ __typename?: 'PostToCollectionConnection', nodes?: Types.Maybe<Array<Types.Maybe<(
        { __typename?: 'Collection' }
        & CollectionPartsFragment
      )>>> }>, obsessions?: Types.Maybe<{ __typename?: 'PostToObsessionConnection', nodes?: Types.Maybe<Array<Types.Maybe<(
        { __typename?: 'Obsession', essentials?: Types.Maybe<{ __typename?: 'ObsessionToCollectionConnection', nodes?: Types.Maybe<Array<Types.Maybe<(
            { __typename?: 'Collection' }
            & CollectionPartsFragment
          )>>> }> }
        & ObsessionPartsFragment
      )>>> }>, guides?: Types.Maybe<{ __typename?: 'PostToGuideConnection', nodes?: Types.Maybe<Array<Types.Maybe<(
        { __typename?: 'Guide', essentials?: Types.Maybe<{ __typename?: 'GuideToCollectionConnection', nodes?: Types.Maybe<Array<Types.Maybe<(
            { __typename?: 'Collection' }
            & CollectionPartsFragment
          )>>> }> }
        & GuidePartsFragment
      )>>> }> }> };


export const EssentialsByArticleDocument = /*#__PURE__*/ gql`
    query EssentialsByArticle($id: ID!) {
  post(id: $id) {
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
    ${CollectionPartsFragmentDoc}
${ObsessionPartsFragmentDoc}
${GuidePartsFragmentDoc}`;

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
export function useEssentialsByArticleQuery(baseOptions: Apollo.QueryHookOptions<EssentialsByArticleQuery, EssentialsByArticleQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<EssentialsByArticleQuery, EssentialsByArticleQueryVariables>(EssentialsByArticleDocument, options);
      }
export function useEssentialsByArticleLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<EssentialsByArticleQuery, EssentialsByArticleQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<EssentialsByArticleQuery, EssentialsByArticleQueryVariables>(EssentialsByArticleDocument, options);
        }
export type EssentialsByArticleQueryHookResult = ReturnType<typeof useEssentialsByArticleQuery>;
export type EssentialsByArticleLazyQueryHookResult = ReturnType<typeof useEssentialsByArticleLazyQuery>;
export type EssentialsByArticleQueryResult = Apollo.QueryResult<EssentialsByArticleQuery, EssentialsByArticleQueryVariables>;