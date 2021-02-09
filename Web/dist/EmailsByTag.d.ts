import type * as Types from './types';
import type { EmailPartsFragment } from './EmailParts';
import type { EmailListPartsFragment } from './EmailListParts';
import * as Apollo from '@apollo/client';
export declare type EmailsByTagQueryVariables = Types.Exact<{
    after?: Types.Maybe<Types.Scalars['String']>;
    perPage?: Types.Maybe<Types.Scalars['Int']>;
    slug?: Types.Maybe<Array<Types.Maybe<Types.Scalars['String']>>>;
}>;
export declare type EmailsByTagQuery = {
    __typename?: 'RootQuery';
    emails?: Types.Maybe<{
        __typename?: 'RootQueryToEmailConnection';
        nodes?: Types.Maybe<Array<Types.Maybe<({
            __typename?: 'Email';
            html?: Types.Maybe<string>;
            link?: Types.Maybe<string>;
            emailLists?: Types.Maybe<{
                __typename?: 'EmailToEmailListConnection';
                nodes?: Types.Maybe<Array<Types.Maybe<({
                    __typename?: 'EmailList';
                } & EmailListPartsFragment)>>>;
            }>;
        } & EmailPartsFragment)>>>;
        pageInfo?: Types.Maybe<{
            __typename?: 'WPPageInfo';
            endCursor?: Types.Maybe<string>;
            hasNextPage: boolean;
        }>;
    }>;
};
export declare const EmailsByTagDocument: Apollo.DocumentNode;
/**
 * __useEmailsByTagQuery__
 *
 * To run a query within a React component, call `useEmailsByTagQuery` and pass it any options that fit your needs.
 * When your component renders, `useEmailsByTagQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEmailsByTagQuery({
 *   variables: {
 *      after: // value for 'after'
 *      perPage: // value for 'perPage'
 *      slug: // value for 'slug'
 *   },
 * });
 */
export declare function useEmailsByTagQuery(baseOptions?: Apollo.QueryHookOptions<EmailsByTagQuery, EmailsByTagQueryVariables>): Apollo.QueryResult<EmailsByTagQuery, Types.Exact<{
    after?: string | null | undefined;
    perPage?: number | null | undefined;
    slug?: (string | null)[] | null | undefined;
}>>;
export declare function useEmailsByTagLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<EmailsByTagQuery, EmailsByTagQueryVariables>): Apollo.QueryTuple<EmailsByTagQuery, Types.Exact<{
    after?: string | null | undefined;
    perPage?: number | null | undefined;
    slug?: (string | null)[] | null | undefined;
}>>;
export declare type EmailsByTagQueryHookResult = ReturnType<typeof useEmailsByTagQuery>;
export declare type EmailsByTagLazyQueryHookResult = ReturnType<typeof useEmailsByTagLazyQuery>;
export declare type EmailsByTagQueryResult = Apollo.QueryResult<EmailsByTagQuery, EmailsByTagQueryVariables>;
//# sourceMappingURL=EmailsByTag.d.ts.map