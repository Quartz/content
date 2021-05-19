import type * as Types from './types';
import type { ObsessionPartsFragment } from './ObsessionParts';
import type { ArticleTeaserPartsFragment } from './ArticleTeaserParts';
import * as Apollo from '@apollo/client';
export declare type ObsessionsQueryVariables = Types.Exact<{
    perPage: Types.Scalars['Int'];
    postsPerPage?: Types.Maybe<Types.Scalars['Int']>;
    location: Types.MenuLocationEnum;
}>;
export declare type ObsessionsQuery = {
    __typename?: 'RootQuery';
    menuItems?: Types.Maybe<{
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
            } | {
                __typename?: 'Tag';
            } | {
                __typename?: 'EmailList';
            } | ({
                __typename?: 'Obsession';
                posts?: Types.Maybe<{
                    __typename?: 'ObsessionToPostConnection';
                    nodes?: Types.Maybe<Array<Types.Maybe<({
                        __typename?: 'Post';
                    } & ArticleTeaserPartsFragment)>>>;
                }>;
            } & ObsessionPartsFragment) | {
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
export declare const ObsessionsDocument: Apollo.DocumentNode;
/**
 * __useObsessionsQuery__
 *
 * To run a query within a React component, call `useObsessionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useObsessionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useObsessionsQuery({
 *   variables: {
 *      perPage: // value for 'perPage'
 *      postsPerPage: // value for 'postsPerPage'
 *      location: // value for 'location'
 *   },
 * });
 */
export declare function useObsessionsQuery(baseOptions: Apollo.QueryHookOptions<ObsessionsQuery, ObsessionsQueryVariables>): Apollo.QueryResult<ObsessionsQuery, Types.Exact<{
    perPage: number;
    postsPerPage?: Types.Maybe<number> | undefined;
    location: Types.MenuLocationEnum;
}>>;
export declare function useObsessionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ObsessionsQuery, ObsessionsQueryVariables>): Apollo.QueryTuple<ObsessionsQuery, Types.Exact<{
    perPage: number;
    postsPerPage?: Types.Maybe<number> | undefined;
    location: Types.MenuLocationEnum;
}>>;
export declare type ObsessionsQueryHookResult = ReturnType<typeof useObsessionsQuery>;
export declare type ObsessionsLazyQueryHookResult = ReturnType<typeof useObsessionsLazyQuery>;
export declare type ObsessionsQueryResult = Apollo.QueryResult<ObsessionsQuery, ObsessionsQueryVariables>;
//# sourceMappingURL=Obsessions.d.ts.map