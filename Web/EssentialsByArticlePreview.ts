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
export type EssentialsByArticlePreviewQueryVariables = Types.Exact<{
  id: Types.Scalars['Int'];
  time: Types.Scalars['Int'];
  token: Types.Scalars['String'];
}>;


export type EssentialsByArticlePreviewQuery = { __typename?: 'RootQuery', posts?: Types.Maybe<{ __typename?: 'RootQueryToPostConnection', nodes?: Types.Maybe<Array<Types.Maybe<{ __typename?: 'Post', id: string, essentials?: Types.Maybe<{ __typename?: 'PostToCollectionConnection', nodes?: Types.Maybe<Array<Types.Maybe<(
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
        )>>> }> }>>> }> };


export const EssentialsByArticlePreviewDocument = /*#__PURE__*/ gql`
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
export function useEssentialsByArticlePreviewQuery(baseOptions: Apollo.QueryHookOptions<EssentialsByArticlePreviewQuery, EssentialsByArticlePreviewQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<EssentialsByArticlePreviewQuery, EssentialsByArticlePreviewQueryVariables>(EssentialsByArticlePreviewDocument, options);
      }
export function useEssentialsByArticlePreviewLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<EssentialsByArticlePreviewQuery, EssentialsByArticlePreviewQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<EssentialsByArticlePreviewQuery, EssentialsByArticlePreviewQueryVariables>(EssentialsByArticlePreviewDocument, options);
        }
export type EssentialsByArticlePreviewQueryHookResult = ReturnType<typeof useEssentialsByArticlePreviewQuery>;
export type EssentialsByArticlePreviewLazyQueryHookResult = ReturnType<typeof useEssentialsByArticlePreviewLazyQuery>;
export type EssentialsByArticlePreviewQueryResult = Apollo.QueryResult<EssentialsByArticlePreviewQuery, EssentialsByArticlePreviewQueryVariables>;