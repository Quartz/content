import type * as Types from './types';
import type { EmailListPartsFragment } from './EmailListParts';
import type { EmailTeaserPartsFragment } from './EmailTeaserParts';
import * as Apollo from '@apollo/client';
export declare type EmailsByListQueryVariables = Types.Exact<{
    after?: Types.Maybe<Types.Scalars['String']>;
    perPage?: Types.Maybe<Types.Scalars['Int']>;
    slug: Array<Types.Maybe<Types.Scalars['String']>> | Types.Maybe<Types.Scalars['String']>;
    tags?: Types.Maybe<Array<Types.Maybe<Types.Scalars['String']>> | Types.Maybe<Types.Scalars['String']>>;
}>;
export declare type EmailsByListQuery = {
    __typename?: 'RootQuery';
    emailLists?: Types.Maybe<{
        __typename?: 'RootQueryToEmailListConnection';
        nodes?: Types.Maybe<Array<Types.Maybe<({
            __typename?: 'EmailList';
            emails?: Types.Maybe<{
                __typename?: 'EmailListToEmailConnection';
                nodes?: Types.Maybe<Array<Types.Maybe<({
                    __typename?: 'Email';
                } & EmailTeaserPartsFragment)>>>;
                pageInfo?: Types.Maybe<{
                    __typename?: 'WPPageInfo';
                    endCursor?: Types.Maybe<string>;
                    hasNextPage: boolean;
                }>;
            }>;
        } & EmailListPartsFragment)>>>;
    }>;
};
export declare const EmailsByListDocument: Apollo.DocumentNode;
/**
 * __useEmailsByListQuery__
 *
 * To run a query within a React component, call `useEmailsByListQuery` and pass it any options that fit your needs.
 * When your component renders, `useEmailsByListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEmailsByListQuery({
 *   variables: {
 *      after: // value for 'after'
 *      perPage: // value for 'perPage'
 *      slug: // value for 'slug'
 *      tags: // value for 'tags'
 *   },
 * });
 */
export declare function useEmailsByListQuery(baseOptions: Apollo.QueryHookOptions<EmailsByListQuery, EmailsByListQueryVariables>): Apollo.QueryResult<EmailsByListQuery, Types.Exact<{
    after?: Types.Maybe<string> | undefined;
    perPage?: Types.Maybe<number> | undefined;
    slug: Types.Maybe<string> | Types.Maybe<string>[];
    tags?: Types.Maybe<Types.Maybe<string> | Types.Maybe<string>[]> | undefined;
}>>;
export declare function useEmailsByListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<EmailsByListQuery, EmailsByListQueryVariables>): Apollo.QueryTuple<EmailsByListQuery, Types.Exact<{
    after?: Types.Maybe<string> | undefined;
    perPage?: Types.Maybe<number> | undefined;
    slug: Types.Maybe<string> | Types.Maybe<string>[];
    tags?: Types.Maybe<Types.Maybe<string> | Types.Maybe<string>[]> | undefined;
}>>;
export declare type EmailsByListQueryHookResult = ReturnType<typeof useEmailsByListQuery>;
export declare type EmailsByListLazyQueryHookResult = ReturnType<typeof useEmailsByListLazyQuery>;
export declare type EmailsByListQueryResult = Apollo.QueryResult<EmailsByListQuery, EmailsByListQueryVariables>;
//# sourceMappingURL=EmailsByList.d.ts.map