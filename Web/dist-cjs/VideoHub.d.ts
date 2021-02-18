import type * as Types from './types';
import type { ArticleTeaserPartsFragment } from './ArticleTeaserParts';
import type { ShowPartsFragment } from './ShowParts';
import * as Apollo from '@apollo/client';
export declare type VideoHubQueryVariables = Types.Exact<{
    [key: string]: never;
}>;
export declare type VideoHubQuery = {
    __typename?: 'RootQuery';
    featuredVideoPlayer?: Types.Maybe<{
        __typename?: 'RootQueryToMenuItemConnection';
        nodes?: Types.Maybe<Array<Types.Maybe<{
            __typename?: 'MenuItem';
            connectedObject?: Types.Maybe<({
                __typename?: 'Post';
                shows?: Types.Maybe<{
                    __typename?: 'PostToShowConnection';
                    nodes?: Types.Maybe<Array<Types.Maybe<({
                        __typename?: 'Show';
                    } & ShowPartsFragment)>>>;
                }>;
            } & ArticleTeaserPartsFragment) | {
                __typename?: 'Page';
            } | {
                __typename?: 'Email';
            } | {
                __typename?: 'Chapter';
            } | {
                __typename?: 'Promotion';
            } | {
                __typename?: 'BlogPost';
            } | {
                __typename?: 'Nug';
            } | {
                __typename?: 'Collection';
            } | {
                __typename?: 'Category';
            } | {
                __typename?: 'Tag';
            } | {
                __typename?: 'EmailList';
            } | {
                __typename?: 'Obsession';
            } | {
                __typename?: 'Topic';
            } | {
                __typename?: 'Show';
            } | {
                __typename?: 'EmailSegment';
            } | {
                __typename?: 'CoAuthor';
            }>;
        }>>>;
    }>;
    latest?: Types.Maybe<{
        __typename?: 'RootQueryToTagConnection';
        nodes?: Types.Maybe<Array<Types.Maybe<{
            __typename?: 'Tag';
            posts?: Types.Maybe<{
                __typename?: 'TagToPostConnection';
                nodes?: Types.Maybe<Array<Types.Maybe<({
                    __typename?: 'Post';
                    shows?: Types.Maybe<{
                        __typename?: 'PostToShowConnection';
                        nodes?: Types.Maybe<Array<Types.Maybe<({
                            __typename?: 'Show';
                        } & ShowPartsFragment)>>>;
                    }>;
                } & ArticleTeaserPartsFragment)>>>;
            }>;
        }>>>;
    }>;
    featuredShows?: Types.Maybe<{
        __typename?: 'RootQueryToMenuItemConnection';
        nodes?: Types.Maybe<Array<Types.Maybe<{
            __typename?: 'MenuItem';
            connectedObject?: Types.Maybe<{
                __typename?: 'Post';
            } | {
                __typename?: 'Page';
            } | {
                __typename?: 'Email';
            } | {
                __typename?: 'Chapter';
            } | {
                __typename?: 'Promotion';
            } | {
                __typename?: 'BlogPost';
            } | {
                __typename?: 'Nug';
            } | {
                __typename?: 'Collection';
            } | {
                __typename?: 'Category';
            } | {
                __typename?: 'Tag';
            } | {
                __typename?: 'EmailList';
            } | {
                __typename?: 'Obsession';
            } | {
                __typename?: 'Topic';
            } | ({
                __typename?: 'Show';
                posts?: Types.Maybe<{
                    __typename?: 'ShowToPostConnection';
                    nodes?: Types.Maybe<Array<Types.Maybe<({
                        __typename?: 'Post';
                    } & ArticleTeaserPartsFragment)>>>;
                }>;
            } & ShowPartsFragment) | {
                __typename?: 'EmailSegment';
            } | {
                __typename?: 'CoAuthor';
            }>;
        }>>>;
    }>;
    allShows?: Types.Maybe<{
        __typename?: 'RootQueryToShowConnection';
        nodes?: Types.Maybe<Array<Types.Maybe<({
            __typename?: 'Show';
        } & ShowPartsFragment)>>>;
    }>;
};
export declare const VideoHubDocument: Apollo.DocumentNode;
/**
 * __useVideoHubQuery__
 *
 * To run a query within a React component, call `useVideoHubQuery` and pass it any options that fit your needs.
 * When your component renders, `useVideoHubQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useVideoHubQuery({
 *   variables: {
 *   },
 * });
 */
export declare function useVideoHubQuery(baseOptions?: Apollo.QueryHookOptions<VideoHubQuery, VideoHubQueryVariables>): Apollo.QueryResult<VideoHubQuery, Types.Exact<{
    [key: string]: never;
}>>;
export declare function useVideoHubLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<VideoHubQuery, VideoHubQueryVariables>): Apollo.QueryTuple<VideoHubQuery, Types.Exact<{
    [key: string]: never;
}>>;
export declare type VideoHubQueryHookResult = ReturnType<typeof useVideoHubQuery>;
export declare type VideoHubLazyQueryHookResult = ReturnType<typeof useVideoHubLazyQuery>;
export declare type VideoHubQueryResult = Apollo.QueryResult<VideoHubQuery, VideoHubQueryVariables>;
//# sourceMappingURL=VideoHub.d.ts.map