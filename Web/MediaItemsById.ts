import type * as Types from './types';

import type { MediaPartsFragment } from './MediaParts';
import { gql } from '@apollo/client';
import { MediaPartsFragmentDoc } from './MediaParts';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type MediaItemsByIdQueryVariables = Types.Exact<{
  ids?: Types.Maybe<Array<Types.Scalars['ID']> | Types.Scalars['ID']>;
}>;


export type MediaItemsByIdQuery = { __typename?: 'RootQuery', mediaItems?: Types.Maybe<{ __typename?: 'RootQueryToMediaItemConnection', nodes?: Types.Maybe<Array<Types.Maybe<(
      { __typename?: 'MediaItem' }
      & MediaPartsFragment
    )>>> }> };


export const MediaItemsByIdDocument = /*#__PURE__*/ gql`
    query MediaItemsById($ids: [ID!]) {
  mediaItems(where: {in: $ids}) {
    nodes {
      ...MediaParts
    }
  }
}
    ${MediaPartsFragmentDoc}`;

/**
 * __useMediaItemsByIdQuery__
 *
 * To run a query within a React component, call `useMediaItemsByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useMediaItemsByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMediaItemsByIdQuery({
 *   variables: {
 *      ids: // value for 'ids'
 *   },
 * });
 */
export function useMediaItemsByIdQuery(baseOptions?: Apollo.QueryHookOptions<MediaItemsByIdQuery, MediaItemsByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MediaItemsByIdQuery, MediaItemsByIdQueryVariables>(MediaItemsByIdDocument, options);
      }
export function useMediaItemsByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MediaItemsByIdQuery, MediaItemsByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MediaItemsByIdQuery, MediaItemsByIdQueryVariables>(MediaItemsByIdDocument, options);
        }
export type MediaItemsByIdQueryHookResult = ReturnType<typeof useMediaItemsByIdQuery>;
export type MediaItemsByIdLazyQueryHookResult = ReturnType<typeof useMediaItemsByIdLazyQuery>;
export type MediaItemsByIdQueryResult = Apollo.QueryResult<MediaItemsByIdQuery, MediaItemsByIdQueryVariables>;