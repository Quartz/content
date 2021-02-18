import type * as Types from './types';
import type { ArticleTeaserPartsFragment } from './ArticleTeaserParts';
import type { AuthorPartsFragment } from './AuthorParts';
import * as Apollo from '@apollo/client';
export declare type ContributorsQueryVariables = Types.Exact<{
    perPage: Types.Scalars['Int'];
}>;
export declare type ContributorsQuery = {
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
                posts?: Types.Maybe<{
                    __typename?: 'CoAuthorToPostConnection';
                    nodes?: Types.Maybe<Array<Types.Maybe<({
                        __typename?: 'Post';
                        authors?: Types.Maybe<{
                            __typename?: 'PostToCoAuthorConnection';
                            edges?: Types.Maybe<Array<Types.Maybe<{
                                __typename?: 'PostToCoAuthorConnectionEdge';
                                node?: Types.Maybe<({
                                    __typename?: 'CoAuthor';
                                } & AuthorPartsFragment)>;
                            }>>>;
                        }>;
                    } & ArticleTeaserPartsFragment)>>>;
                }>;
            }>;
        }>>>;
    }>;
};
export declare const ContributorsDocument: Apollo.DocumentNode;
/**
 * __useContributorsQuery__
 *
 * To run a query within a React component, call `useContributorsQuery` and pass it any options that fit your needs.
 * When your component renders, `useContributorsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useContributorsQuery({
 *   variables: {
 *      perPage: // value for 'perPage'
 *   },
 * });
 */
export declare function useContributorsQuery(baseOptions: Apollo.QueryHookOptions<ContributorsQuery, ContributorsQueryVariables>): Apollo.QueryResult<ContributorsQuery, Types.Exact<{
    perPage: number;
}>>;
export declare function useContributorsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ContributorsQuery, ContributorsQueryVariables>): Apollo.QueryTuple<ContributorsQuery, Types.Exact<{
    perPage: number;
}>>;
export declare type ContributorsQueryHookResult = ReturnType<typeof useContributorsQuery>;
export declare type ContributorsLazyQueryHookResult = ReturnType<typeof useContributorsLazyQuery>;
export declare type ContributorsQueryResult = Apollo.QueryResult<ContributorsQuery, ContributorsQueryVariables>;
//# sourceMappingURL=Contributors.d.ts.map