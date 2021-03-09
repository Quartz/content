import type * as Types from './types';
import type { EmailListPartsFragment } from './EmailListParts';
import * as Apollo from '@apollo/client';
export declare type EmailListsBySlugQueryVariables = Types.Exact<{
    slug: Array<Types.Maybe<Types.Scalars['String']>> | Types.Maybe<Types.Scalars['String']>;
}>;
export declare type EmailListsBySlugQuery = {
    __typename?: 'RootQuery';
    emailLists?: Types.Maybe<{
        __typename?: 'RootQueryToEmailListConnection';
        nodes?: Types.Maybe<Array<Types.Maybe<({
            __typename?: 'EmailList';
            emails?: Types.Maybe<{
                __typename?: 'EmailListToEmailConnection';
                nodes?: Types.Maybe<Array<Types.Maybe<{
                    __typename?: 'Email';
                    emailId: number;
                }>>>;
            }>;
        } & EmailListPartsFragment)>>>;
    }>;
};
export declare const EmailListsBySlugDocument: Apollo.DocumentNode;
/**
 * __useEmailListsBySlugQuery__
 *
 * To run a query within a React component, call `useEmailListsBySlugQuery` and pass it any options that fit your needs.
 * When your component renders, `useEmailListsBySlugQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEmailListsBySlugQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export declare function useEmailListsBySlugQuery(baseOptions: Apollo.QueryHookOptions<EmailListsBySlugQuery, EmailListsBySlugQueryVariables>): Apollo.QueryResult<EmailListsBySlugQuery, Types.Exact<{
    slug: Types.Maybe<string> | Types.Maybe<string>[];
}>>;
export declare function useEmailListsBySlugLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<EmailListsBySlugQuery, EmailListsBySlugQueryVariables>): Apollo.QueryTuple<EmailListsBySlugQuery, Types.Exact<{
    slug: Types.Maybe<string> | Types.Maybe<string>[];
}>>;
export declare type EmailListsBySlugQueryHookResult = ReturnType<typeof useEmailListsBySlugQuery>;
export declare type EmailListsBySlugLazyQueryHookResult = ReturnType<typeof useEmailListsBySlugLazyQuery>;
export declare type EmailListsBySlugQueryResult = Apollo.QueryResult<EmailListsBySlugQuery, EmailListsBySlugQueryVariables>;
//# sourceMappingURL=EmailListsBySlug.d.ts.map