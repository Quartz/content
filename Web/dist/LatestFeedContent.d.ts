import type * as Types from './types';
import type { ArticleTeaserPartsFragment } from './ArticleTeaserParts';
import type { EmailPartsFragment } from './EmailParts';
import * as Apollo from '@apollo/client';
export declare type LatestFeedContentQueryVariables = Types.Exact<{
    after?: Types.Maybe<Types.Scalars['String']>;
    perPage?: Types.Maybe<Types.Scalars['Int']>;
}>;
export declare type LatestFeedContentQuery = {
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
export declare const LatestFeedContentDocument: Apollo.DocumentNode;
/**
 * __useLatestFeedContentQuery__
 *
 * To run a query within a React component, call `useLatestFeedContentQuery` and pass it any options that fit your needs.
 * When your component renders, `useLatestFeedContentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLatestFeedContentQuery({
 *   variables: {
 *      after: // value for 'after'
 *      perPage: // value for 'perPage'
 *   },
 * });
 */
export declare function useLatestFeedContentQuery(baseOptions?: Apollo.QueryHookOptions<LatestFeedContentQuery, LatestFeedContentQueryVariables>): Apollo.QueryResult<LatestFeedContentQuery, Types.Exact<{
    after?: Types.Maybe<string> | undefined;
    perPage?: Types.Maybe<number> | undefined;
}>>;
export declare function useLatestFeedContentLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LatestFeedContentQuery, LatestFeedContentQueryVariables>): Apollo.QueryTuple<LatestFeedContentQuery, Types.Exact<{
    after?: Types.Maybe<string> | undefined;
    perPage?: Types.Maybe<number> | undefined;
}>>;
export declare type LatestFeedContentQueryHookResult = ReturnType<typeof useLatestFeedContentQuery>;
export declare type LatestFeedContentLazyQueryHookResult = ReturnType<typeof useLatestFeedContentLazyQuery>;
export declare type LatestFeedContentQueryResult = Apollo.QueryResult<LatestFeedContentQuery, LatestFeedContentQueryVariables>;
//# sourceMappingURL=LatestFeedContent.d.ts.map