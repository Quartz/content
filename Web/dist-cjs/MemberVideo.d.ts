import type * as Types from './types';
import type { TagPartsFragment } from './TagParts';
import type { ArticleTeaserPartsFragment } from './ArticleTeaserParts';
import * as Apollo from '@apollo/client';
export declare type MemberVideoQueryVariables = Types.Exact<{
    [key: string]: never;
}>;
export declare type MemberVideoQuery = {
    __typename?: 'RootQuery';
    features?: Types.Maybe<{
        __typename?: 'RootQueryToMenuItemConnection';
        nodes?: Types.Maybe<Array<Types.Maybe<{
            __typename?: 'MenuItem';
            id: string;
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
            } | ({
                __typename?: 'Tag';
                posts?: Types.Maybe<{
                    __typename?: 'TagToPostConnection';
                    nodes?: Types.Maybe<Array<Types.Maybe<({
                        __typename?: 'Post';
                    } & ArticleTeaserPartsFragment)>>>;
                }>;
            } & TagPartsFragment) | {
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
};
export declare const MemberVideoDocument: Apollo.DocumentNode;
/**
 * __useMemberVideoQuery__
 *
 * To run a query within a React component, call `useMemberVideoQuery` and pass it any options that fit your needs.
 * When your component renders, `useMemberVideoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMemberVideoQuery({
 *   variables: {
 *   },
 * });
 */
export declare function useMemberVideoQuery(baseOptions?: Apollo.QueryHookOptions<MemberVideoQuery, MemberVideoQueryVariables>): Apollo.QueryResult<MemberVideoQuery, Types.Exact<{
    [key: string]: never;
}>>;
export declare function useMemberVideoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MemberVideoQuery, MemberVideoQueryVariables>): Apollo.QueryTuple<MemberVideoQuery, Types.Exact<{
    [key: string]: never;
}>>;
export declare type MemberVideoQueryHookResult = ReturnType<typeof useMemberVideoQuery>;
export declare type MemberVideoLazyQueryHookResult = ReturnType<typeof useMemberVideoLazyQuery>;
export declare type MemberVideoQueryResult = Apollo.QueryResult<MemberVideoQuery, MemberVideoQueryVariables>;
//# sourceMappingURL=MemberVideo.d.ts.map