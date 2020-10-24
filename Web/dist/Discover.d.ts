import type * as Types from './types';
import type { ArticleTeaserPartsFragment } from './ArticleTeaserParts';
import type { TopicPartsFragment } from './TopicParts';
import * as Apollo from '@apollo/client';
export declare type DiscoverQueryVariables = Types.Exact<{
    topics: Array<Types.Maybe<Types.Scalars['String']>>;
}>;
export declare type DiscoverQuery = ({
    __typename?: 'RootQuery';
} & {
    latest?: Types.Maybe<({
        __typename?: 'RootQueryToPostConnection';
    } & {
        nodes?: Types.Maybe<Array<Types.Maybe<({
            __typename?: 'Post';
        } & ArticleTeaserPartsFragment)>>>;
    })>;
    trendingPosts?: Types.Maybe<({
        __typename?: 'RootQueryToPostConnection';
    } & {
        nodes?: Types.Maybe<Array<Types.Maybe<({
            __typename?: 'Post';
        } & ArticleTeaserPartsFragment)>>>;
    })>;
    topics?: Types.Maybe<({
        __typename?: 'RootQueryToTopicConnection';
    } & {
        nodes?: Types.Maybe<Array<Types.Maybe<({
            __typename?: 'Topic';
        } & {
            posts?: Types.Maybe<({
                __typename?: 'TopicToPostConnection';
            } & {
                nodes?: Types.Maybe<Array<Types.Maybe<({
                    __typename?: 'Post';
                } & ArticleTeaserPartsFragment)>>>;
            })>;
        } & TopicPartsFragment)>>>;
    })>;
});
export declare const DiscoverDocument: Apollo.DocumentNode;
/**
 * __useDiscoverQuery__
 *
 * To run a query within a React component, call `useDiscoverQuery` and pass it any options that fit your needs.
 * When your component renders, `useDiscoverQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDiscoverQuery({
 *   variables: {
 *      topics: // value for 'topics'
 *   },
 * });
 */
export declare function useDiscoverQuery(baseOptions?: Apollo.QueryHookOptions<DiscoverQuery, DiscoverQueryVariables>): Apollo.QueryResult<DiscoverQuery, Types.Exact<{
    topics: (string | null)[];
}>>;
export declare function useDiscoverLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<DiscoverQuery, DiscoverQueryVariables>): Apollo.QueryTuple<DiscoverQuery, Types.Exact<{
    topics: (string | null)[];
}>>;
export declare type DiscoverQueryHookResult = ReturnType<typeof useDiscoverQuery>;
export declare type DiscoverLazyQueryHookResult = ReturnType<typeof useDiscoverLazyQuery>;
export declare type DiscoverQueryResult = Apollo.QueryResult<DiscoverQuery, DiscoverQueryVariables>;
//# sourceMappingURL=Discover.d.ts.map