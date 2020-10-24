import type * as Types from './types';
import type { ArticleTeaserPartsFragment } from './ArticleTeaserParts';
import * as Apollo from '@apollo/client';
export declare type ContentBySearchTermQueryVariables = Types.Exact<{
    after?: Types.Maybe<Types.Scalars['String']>;
    limit?: Types.Maybe<Types.Scalars['Int']>;
    search: Types.Scalars['String'];
}>;
export declare type ContentBySearchTermQuery = ({
    __typename?: 'RootQuery';
} & {
    content?: Types.Maybe<({
        __typename?: 'RootQueryToContentUnionConnection';
    } & {
        pageInfo?: Types.Maybe<({
            __typename?: 'WPPageInfo';
        } & Pick<Types.WpPageInfo, 'endCursor' | 'hasNextPage'>)>;
        nodes?: Types.Maybe<Array<Types.Maybe<({
            __typename?: 'Post';
        } & Pick<Types.Post, 'trackingUrls'> & ArticleTeaserPartsFragment) | {
            __typename?: 'Page';
        } | {
            __typename?: 'MediaItem';
        } | {
            __typename?: 'Email';
        } | {
            __typename?: 'Card';
        } | {
            __typename?: 'Chapter';
        } | {
            __typename?: 'Promotion';
        } | {
            __typename?: 'Collection';
        } | {
            __typename?: 'Stack';
        } | {
            __typename?: 'Bulletin';
        }>>>;
    })>;
});
export declare const ContentBySearchTermDocument: Apollo.DocumentNode;
/**
 * __useContentBySearchTermQuery__
 *
 * To run a query within a React component, call `useContentBySearchTermQuery` and pass it any options that fit your needs.
 * When your component renders, `useContentBySearchTermQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useContentBySearchTermQuery({
 *   variables: {
 *      after: // value for 'after'
 *      limit: // value for 'limit'
 *      search: // value for 'search'
 *   },
 * });
 */
export declare function useContentBySearchTermQuery(baseOptions?: Apollo.QueryHookOptions<ContentBySearchTermQuery, ContentBySearchTermQueryVariables>): Apollo.QueryResult<ContentBySearchTermQuery, Types.Exact<{
    after?: string | null | undefined;
    limit?: number | null | undefined;
    search: string;
}>>;
export declare function useContentBySearchTermLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ContentBySearchTermQuery, ContentBySearchTermQueryVariables>): Apollo.QueryTuple<ContentBySearchTermQuery, Types.Exact<{
    after?: string | null | undefined;
    limit?: number | null | undefined;
    search: string;
}>>;
export declare type ContentBySearchTermQueryHookResult = ReturnType<typeof useContentBySearchTermQuery>;
export declare type ContentBySearchTermLazyQueryHookResult = ReturnType<typeof useContentBySearchTermLazyQuery>;
export declare type ContentBySearchTermQueryResult = Apollo.QueryResult<ContentBySearchTermQuery, ContentBySearchTermQueryVariables>;
