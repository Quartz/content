import type * as Types from './types';
import type { GuidePartsFragment } from './GuideParts';
import * as Apollo from '@apollo/client';
export declare type GuidesByTopicQueryVariables = Types.Exact<{
    perPage?: Types.Maybe<Types.Scalars['Int']>;
    slug: Array<Types.Maybe<Types.Scalars['String']>>;
}>;
export declare type GuidesByTopicQuery = {
    __typename?: 'RootQuery';
    topics?: Types.Maybe<{
        __typename?: 'RootQueryToTopicConnection';
        nodes?: Types.Maybe<Array<Types.Maybe<{
            __typename?: 'Topic';
            id: string;
            name?: Types.Maybe<string>;
            slug?: Types.Maybe<string>;
            guides?: Types.Maybe<{
                __typename?: 'TopicToGuideConnection';
                nodes?: Types.Maybe<Array<Types.Maybe<({
                    __typename?: 'Guide';
                } & GuidePartsFragment)>>>;
            }>;
        }>>>;
    }>;
};
export declare const GuidesByTopicDocument: Apollo.DocumentNode;
/**
 * __useGuidesByTopicQuery__
 *
 * To run a query within a React component, call `useGuidesByTopicQuery` and pass it any options that fit your needs.
 * When your component renders, `useGuidesByTopicQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGuidesByTopicQuery({
 *   variables: {
 *      perPage: // value for 'perPage'
 *      slug: // value for 'slug'
 *   },
 * });
 */
export declare function useGuidesByTopicQuery(baseOptions: Apollo.QueryHookOptions<GuidesByTopicQuery, GuidesByTopicQueryVariables>): Apollo.QueryResult<GuidesByTopicQuery, Types.Exact<{
    perPage?: number | null | undefined;
    slug: (string | null)[];
}>>;
export declare function useGuidesByTopicLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GuidesByTopicQuery, GuidesByTopicQueryVariables>): Apollo.QueryTuple<GuidesByTopicQuery, Types.Exact<{
    perPage?: number | null | undefined;
    slug: (string | null)[];
}>>;
export declare type GuidesByTopicQueryHookResult = ReturnType<typeof useGuidesByTopicQuery>;
export declare type GuidesByTopicLazyQueryHookResult = ReturnType<typeof useGuidesByTopicLazyQuery>;
export declare type GuidesByTopicQueryResult = Apollo.QueryResult<GuidesByTopicQuery, GuidesByTopicQueryVariables>;
//# sourceMappingURL=GuidesByTopic.d.ts.map