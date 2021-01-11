import type * as Types from './types';
import type { TopicPartsFragment } from './TopicParts';
import * as Apollo from '@apollo/client';
export declare type TopicsQueryVariables = Types.Exact<{
    [key: string]: never;
}>;
export declare type TopicsQuery = {
    __typename?: 'RootQuery';
    topics?: Types.Maybe<{
        __typename?: 'RootQueryToTopicConnection';
        nodes?: Types.Maybe<Array<Types.Maybe<({
            __typename?: 'Topic';
        } & TopicPartsFragment)>>>;
    }>;
};
export declare const TopicsDocument: Apollo.DocumentNode;
/**
 * __useTopicsQuery__
 *
 * To run a query within a React component, call `useTopicsQuery` and pass it any options that fit your needs.
 * When your component renders, `useTopicsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTopicsQuery({
 *   variables: {
 *   },
 * });
 */
export declare function useTopicsQuery(baseOptions?: Apollo.QueryHookOptions<TopicsQuery, TopicsQueryVariables>): Apollo.QueryResult<TopicsQuery, Types.Exact<{
    [key: string]: never;
}>>;
export declare function useTopicsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TopicsQuery, TopicsQueryVariables>): Apollo.QueryTuple<TopicsQuery, Types.Exact<{
    [key: string]: never;
}>>;
export declare type TopicsQueryHookResult = ReturnType<typeof useTopicsQuery>;
export declare type TopicsLazyQueryHookResult = ReturnType<typeof useTopicsLazyQuery>;
export declare type TopicsQueryResult = Apollo.QueryResult<TopicsQuery, TopicsQueryVariables>;
//# sourceMappingURL=Topics.d.ts.map