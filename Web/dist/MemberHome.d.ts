import type * as Types from './types';
import type { TagPartsFragment } from './TagParts';
import type { ArticleTeaserPartsFragment } from './ArticleTeaserParts';
import type { GuidePartsFragment } from './GuideParts';
import * as Apollo from '@apollo/client';
export declare type MemberHomeQueryVariables = Types.Exact<{
    [key: string]: never;
}>;
export declare type MemberHomeQuery = {
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
                __typename?: 'EmailSegments';
            } | {
                __typename?: 'CoAuthor';
            } | {
                __typename?: 'MenuItem';
            }>;
        }>>>;
    }>;
    guides?: Types.Maybe<{
        __typename?: 'RootQueryToGuideConnection';
        nodes?: Types.Maybe<Array<Types.Maybe<({
            __typename?: 'Guide';
            posts?: Types.Maybe<{
                __typename?: 'GuideToPostConnection';
                nodes?: Types.Maybe<Array<Types.Maybe<({
                    __typename?: 'Post';
                } & ArticleTeaserPartsFragment)>>>;
            }>;
        } & GuidePartsFragment)>>>;
    }>;
};
export declare const MemberHomeDocument: Apollo.DocumentNode;
/**
 * __useMemberHomeQuery__
 *
 * To run a query within a React component, call `useMemberHomeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMemberHomeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMemberHomeQuery({
 *   variables: {
 *   },
 * });
 */
export declare function useMemberHomeQuery(baseOptions?: Apollo.QueryHookOptions<MemberHomeQuery, MemberHomeQueryVariables>): Apollo.QueryResult<MemberHomeQuery, Types.Exact<{
    [key: string]: never;
}>>;
export declare function useMemberHomeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MemberHomeQuery, MemberHomeQueryVariables>): Apollo.QueryTuple<MemberHomeQuery, Types.Exact<{
    [key: string]: never;
}>>;
export declare type MemberHomeQueryHookResult = ReturnType<typeof useMemberHomeQuery>;
export declare type MemberHomeLazyQueryHookResult = ReturnType<typeof useMemberHomeLazyQuery>;
export declare type MemberHomeQueryResult = Apollo.QueryResult<MemberHomeQuery, MemberHomeQueryVariables>;
//# sourceMappingURL=MemberHome.d.ts.map