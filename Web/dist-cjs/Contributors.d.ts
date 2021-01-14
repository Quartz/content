import type * as Types from './types';
import type { ArticleTeaserPartsFragment } from './ArticleTeaserParts';
import type { AuthorPartsFragment } from './AuthorParts';
import * as Apollo from '@apollo/client';
export declare type ContributorsQueryQueryVariables = Types.Exact<{
    perPage: Types.Scalars['Int'];
}>;
export declare type ContributorsQueryQuery = {
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
            } | {
                __typename?: 'MenuItem';
            }>;
        }>>>;
    }>;
};
export declare const ContributorsQueryDocument: Apollo.DocumentNode;
/**
 * __useContributorsQueryQuery__
 *
 * To run a query within a React component, call `useContributorsQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useContributorsQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useContributorsQueryQuery({
 *   variables: {
 *      perPage: // value for 'perPage'
 *   },
 * });
 */
export declare function useContributorsQueryQuery(baseOptions: Apollo.QueryHookOptions<ContributorsQueryQuery, ContributorsQueryQueryVariables>): Apollo.QueryResult<ContributorsQueryQuery, Types.Exact<{
    perPage: number;
}>>;
export declare function useContributorsQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ContributorsQueryQuery, ContributorsQueryQueryVariables>): Apollo.QueryTuple<ContributorsQueryQuery, Types.Exact<{
    perPage: number;
}>>;
export declare type ContributorsQueryQueryHookResult = ReturnType<typeof useContributorsQueryQuery>;
export declare type ContributorsQueryLazyQueryHookResult = ReturnType<typeof useContributorsQueryLazyQuery>;
export declare type ContributorsQueryQueryResult = Apollo.QueryResult<ContributorsQueryQuery, ContributorsQueryQueryVariables>;
//# sourceMappingURL=Contributors.d.ts.map