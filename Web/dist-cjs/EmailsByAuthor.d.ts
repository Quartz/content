import type * as Types from './types';
import type { AuthorPartsFragment } from './AuthorParts';
import type { EmailTeaserPartsFragment } from './EmailTeaserParts';
import type { EmailListPartsFragment } from './EmailListParts';
import * as Apollo from '@apollo/client';
export declare type EmailsByAuthorQueryVariables = Types.Exact<{
    after?: Types.Maybe<Types.Scalars['String']>;
    perPage?: Types.Maybe<Types.Scalars['Int']>;
    slug?: Types.Maybe<Array<Types.Maybe<Types.Scalars['String']>> | Types.Maybe<Types.Scalars['String']>>;
}>;
export declare type EmailsByAuthorQuery = {
    __typename?: 'RootQuery';
    authors?: Types.Maybe<{
        __typename?: 'RootQueryToCoAuthorConnection';
        nodes?: Types.Maybe<Array<Types.Maybe<({
            __typename?: 'CoAuthor';
            emails?: Types.Maybe<{
                __typename?: 'CoAuthorToEmailConnection';
                nodes?: Types.Maybe<Array<Types.Maybe<({
                    __typename?: 'Email';
                    link?: Types.Maybe<string>;
                    emailLists?: Types.Maybe<{
                        __typename?: 'EmailToEmailListConnection';
                        nodes?: Types.Maybe<Array<Types.Maybe<({
                            __typename?: 'EmailList';
                        } & EmailListPartsFragment)>>>;
                    }>;
                } & EmailTeaserPartsFragment)>>>;
                pageInfo?: Types.Maybe<{
                    __typename?: 'WPPageInfo';
                    endCursor?: Types.Maybe<string>;
                    hasNextPage: boolean;
                }>;
            }>;
        } & AuthorPartsFragment)>>>;
    }>;
};
export declare const EmailsByAuthorDocument: Apollo.DocumentNode;
/**
 * __useEmailsByAuthorQuery__
 *
 * To run a query within a React component, call `useEmailsByAuthorQuery` and pass it any options that fit your needs.
 * When your component renders, `useEmailsByAuthorQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEmailsByAuthorQuery({
 *   variables: {
 *      after: // value for 'after'
 *      perPage: // value for 'perPage'
 *      slug: // value for 'slug'
 *   },
 * });
 */
export declare function useEmailsByAuthorQuery(baseOptions?: Apollo.QueryHookOptions<EmailsByAuthorQuery, EmailsByAuthorQueryVariables>): Apollo.QueryResult<EmailsByAuthorQuery, Types.Exact<{
    after?: Types.Maybe<string> | undefined;
    perPage?: Types.Maybe<number> | undefined;
    slug?: Types.Maybe<Types.Maybe<string> | Types.Maybe<string>[]> | undefined;
}>>;
export declare function useEmailsByAuthorLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<EmailsByAuthorQuery, EmailsByAuthorQueryVariables>): Apollo.QueryTuple<EmailsByAuthorQuery, Types.Exact<{
    after?: Types.Maybe<string> | undefined;
    perPage?: Types.Maybe<number> | undefined;
    slug?: Types.Maybe<Types.Maybe<string> | Types.Maybe<string>[]> | undefined;
}>>;
export declare type EmailsByAuthorQueryHookResult = ReturnType<typeof useEmailsByAuthorQuery>;
export declare type EmailsByAuthorLazyQueryHookResult = ReturnType<typeof useEmailsByAuthorLazyQuery>;
export declare type EmailsByAuthorQueryResult = Apollo.QueryResult<EmailsByAuthorQuery, EmailsByAuthorQueryVariables>;
//# sourceMappingURL=EmailsByAuthor.d.ts.map