import type * as Types from './types';
import type { EmailPartsFragment } from './EmailParts';
import type { ArticleTeaserPartsFragment } from './ArticleTeaserParts';
import * as Apollo from '@apollo/client';
export declare type ContentByAuthorQueryVariables = Types.Exact<{
    slug: Types.Scalars['String'];
    perPage?: Types.Scalars['Int'];
    after?: Types.Maybe<Types.Scalars['String']>;
}>;
export declare type ContentByAuthorQuery = {
    __typename?: 'RootQuery';
    authorContent?: Types.Maybe<{
        __typename?: 'RootQueryToContentUnionConnection';
        nodes?: Types.Maybe<Array<Types.Maybe<({
            __typename?: 'Post';
        } & ArticleTeaserPartsFragment) | {
            __typename?: 'Page';
        } | {
            __typename?: 'MediaItem';
        } | ({
            __typename?: 'Email';
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
            hasNextPage: boolean;
        }>;
    }>;
};
export declare const ContentByAuthorDocument: Apollo.DocumentNode;
/**
 * __useContentByAuthorQuery__
 *
 * To run a query within a React component, call `useContentByAuthorQuery` and pass it any options that fit your needs.
 * When your component renders, `useContentByAuthorQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useContentByAuthorQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *      perPage: // value for 'perPage'
 *      after: // value for 'after'
 *   },
 * });
 */
export declare function useContentByAuthorQuery(baseOptions: Apollo.QueryHookOptions<ContentByAuthorQuery, ContentByAuthorQueryVariables>): Apollo.QueryResult<ContentByAuthorQuery, Types.Exact<{
    slug: string;
    perPage?: number | undefined;
    after?: Types.Maybe<string> | undefined;
}>>;
export declare function useContentByAuthorLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ContentByAuthorQuery, ContentByAuthorQueryVariables>): Apollo.QueryTuple<ContentByAuthorQuery, Types.Exact<{
    slug: string;
    perPage?: number | undefined;
    after?: Types.Maybe<string> | undefined;
}>>;
export declare type ContentByAuthorQueryHookResult = ReturnType<typeof useContentByAuthorQuery>;
export declare type ContentByAuthorLazyQueryHookResult = ReturnType<typeof useContentByAuthorLazyQuery>;
export declare type ContentByAuthorQueryResult = Apollo.QueryResult<ContentByAuthorQuery, ContentByAuthorQueryVariables>;
//# sourceMappingURL=ContentByAuthor.d.ts.map