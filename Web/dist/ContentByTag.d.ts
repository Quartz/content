import type * as Types from './types';
import type { TagPartsFragment } from './TagParts';
import type { EmailTeaserPartsFragment } from './EmailTeaserParts';
import type { ArticleTeaserPartsFragment } from './ArticleTeaserParts';
import * as Apollo from '@apollo/client';
export declare type ContentByTagQueryVariables = Types.Exact<{
    slug: Types.Scalars['String'];
    perPage?: Types.Maybe<Types.Scalars['Int']>;
    after?: Types.Maybe<Types.Scalars['String']>;
}>;
export declare type ContentByTagQuery = {
    __typename?: 'RootQuery';
    tags?: Types.Maybe<{
        __typename?: 'RootQueryToTagConnection';
        nodes?: Types.Maybe<Array<Types.Maybe<({
            __typename?: 'Tag';
        } & TagPartsFragment)>>>;
    }>;
    tagContent?: Types.Maybe<{
        __typename?: 'RootQueryToTagContentConnection';
        nodes?: Types.Maybe<Array<Types.Maybe<({
            __typename?: 'Post';
        } & ArticleTeaserPartsFragment) | {
            __typename?: 'Page';
        } | {
            __typename?: 'MediaItem';
        } | ({
            __typename?: 'Email';
            emailLists?: Types.Maybe<{
                __typename?: 'EmailToEmailListConnection';
                nodes?: Types.Maybe<Array<Types.Maybe<{
                    __typename?: 'EmailList';
                    slug?: Types.Maybe<string>;
                }>>>;
            }>;
        } & EmailTeaserPartsFragment) | {
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
export declare const ContentByTagDocument: Apollo.DocumentNode;
/**
 * __useContentByTagQuery__
 *
 * To run a query within a React component, call `useContentByTagQuery` and pass it any options that fit your needs.
 * When your component renders, `useContentByTagQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useContentByTagQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *      perPage: // value for 'perPage'
 *      after: // value for 'after'
 *   },
 * });
 */
export declare function useContentByTagQuery(baseOptions: Apollo.QueryHookOptions<ContentByTagQuery, ContentByTagQueryVariables>): Apollo.QueryResult<ContentByTagQuery, Types.Exact<{
    slug: string;
    perPage?: Types.Maybe<number> | undefined;
    after?: Types.Maybe<string> | undefined;
}>>;
export declare function useContentByTagLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ContentByTagQuery, ContentByTagQueryVariables>): Apollo.QueryTuple<ContentByTagQuery, Types.Exact<{
    slug: string;
    perPage?: Types.Maybe<number> | undefined;
    after?: Types.Maybe<string> | undefined;
}>>;
export declare type ContentByTagQueryHookResult = ReturnType<typeof useContentByTagQuery>;
export declare type ContentByTagLazyQueryHookResult = ReturnType<typeof useContentByTagLazyQuery>;
export declare type ContentByTagQueryResult = Apollo.QueryResult<ContentByTagQuery, ContentByTagQueryVariables>;
//# sourceMappingURL=ContentByTag.d.ts.map