import type * as Types from './types';
import type { ArticleTeaserPartsFragment } from './ArticleTeaserParts';
import type { EmailPartsFragment } from './EmailParts';
import * as Apollo from '@apollo/client';
export declare type FirstFeedConcentByRecencyQueryVariables = Types.Exact<{
    first?: Types.Maybe<Types.Scalars['Int']>;
}>;
export declare type FirstFeedConcentByRecencyQuery = {
    __typename?: 'RootQuery';
    feedContent?: Types.Maybe<{
        __typename?: 'RootQueryToFeedContentConnection';
        nodes?: Types.Maybe<Array<Types.Maybe<({
            __typename?: 'Post';
        } & ArticleTeaserPartsFragment) | {
            __typename?: 'Page';
        } | {
            __typename?: 'MediaItem';
        } | ({
            __typename?: 'Email';
            link?: Types.Maybe<string>;
            emailLists?: Types.Maybe<{
                __typename?: 'EmailToEmailListConnection';
                nodes?: Types.Maybe<Array<Types.Maybe<{
                    __typename?: 'EmailList';
                    slug?: Types.Maybe<string>;
                }>>>;
            }>;
        } & EmailPartsFragment) | {
            __typename?: 'Chapter';
        } | {
            __typename?: 'Promotion';
        } | {
            __typename?: 'Collection';
        } | {
            __typename?: 'Bulletin';
        }>>>;
        pageInfo?: Types.Maybe<{
            __typename?: 'WPPageInfo';
            endCursor?: Types.Maybe<string>;
        }>;
    }>;
};
export declare const FirstFeedConcentByRecencyDocument: Apollo.DocumentNode;
/**
 * __useFirstFeedConcentByRecencyQuery__
 *
 * To run a query within a React component, call `useFirstFeedConcentByRecencyQuery` and pass it any options that fit your needs.
 * When your component renders, `useFirstFeedConcentByRecencyQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFirstFeedConcentByRecencyQuery({
 *   variables: {
 *      first: // value for 'first'
 *   },
 * });
 */
export declare function useFirstFeedConcentByRecencyQuery(baseOptions?: Apollo.QueryHookOptions<FirstFeedConcentByRecencyQuery, FirstFeedConcentByRecencyQueryVariables>): Apollo.QueryResult<FirstFeedConcentByRecencyQuery, Types.Exact<{
    first?: Types.Maybe<number> | undefined;
}>>;
export declare function useFirstFeedConcentByRecencyLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FirstFeedConcentByRecencyQuery, FirstFeedConcentByRecencyQueryVariables>): Apollo.QueryTuple<FirstFeedConcentByRecencyQuery, Types.Exact<{
    first?: Types.Maybe<number> | undefined;
}>>;
export declare type FirstFeedConcentByRecencyQueryHookResult = ReturnType<typeof useFirstFeedConcentByRecencyQuery>;
export declare type FirstFeedConcentByRecencyLazyQueryHookResult = ReturnType<typeof useFirstFeedConcentByRecencyLazyQuery>;
export declare type FirstFeedConcentByRecencyQueryResult = Apollo.QueryResult<FirstFeedConcentByRecencyQuery, FirstFeedConcentByRecencyQueryVariables>;
//# sourceMappingURL=FirstFeedConcentByRecency.d.ts.map