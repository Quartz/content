import type * as Types from './types';
import type { MediaPartsFragment } from './MediaParts';
import * as Apollo from '@apollo/client';
export declare type MediaItemsByIdQueryVariables = Types.Exact<{
    ids?: Types.Maybe<Array<Types.Scalars['ID']> | Types.Scalars['ID']>;
}>;
export declare type MediaItemsByIdQuery = {
    __typename?: 'RootQuery';
    mediaItems?: Types.Maybe<{
        __typename?: 'RootQueryToMediaItemConnection';
        nodes?: Types.Maybe<Array<Types.Maybe<({
            __typename?: 'MediaItem';
        } & MediaPartsFragment)>>>;
    }>;
};
export declare const MediaItemsByIdDocument: Apollo.DocumentNode;
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
export declare function useMediaItemsByIdQuery(baseOptions?: Apollo.QueryHookOptions<MediaItemsByIdQuery, MediaItemsByIdQueryVariables>): Apollo.QueryResult<MediaItemsByIdQuery, Types.Exact<{
    ids?: Types.Maybe<string | string[]> | undefined;
}>>;
export declare function useMediaItemsByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MediaItemsByIdQuery, MediaItemsByIdQueryVariables>): Apollo.QueryTuple<MediaItemsByIdQuery, Types.Exact<{
    ids?: Types.Maybe<string | string[]> | undefined;
}>>;
export declare type MediaItemsByIdQueryHookResult = ReturnType<typeof useMediaItemsByIdQuery>;
export declare type MediaItemsByIdLazyQueryHookResult = ReturnType<typeof useMediaItemsByIdLazyQuery>;
export declare type MediaItemsByIdQueryResult = Apollo.QueryResult<MediaItemsByIdQuery, MediaItemsByIdQueryVariables>;
//# sourceMappingURL=MediaItemsById.d.ts.map