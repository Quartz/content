import type * as Types from './types';
import type { EmailPartsFragment } from './EmailParts';
import type { EmailListPartsFragment } from './EmailListParts';
import * as Apollo from '@apollo/client';
export declare type EmailByIdQueryVariables = Types.Exact<{
    id: Types.Scalars['ID'];
}>;
export declare type EmailByIdQuery = {
    __typename?: 'RootQuery';
    email?: Types.Maybe<({
        __typename?: 'Email';
        disablePaywall?: Types.Maybe<boolean>;
        html?: Types.Maybe<string>;
        emailLists?: Types.Maybe<{
            __typename?: 'EmailToEmailListConnection';
            nodes?: Types.Maybe<Array<Types.Maybe<({
                __typename?: 'EmailList';
            } & EmailListPartsFragment)>>>;
        }>;
    } & EmailPartsFragment)>;
};
export declare const EmailByIdDocument: Apollo.DocumentNode;
/**
 * __useEmailByIdQuery__
 *
 * To run a query within a React component, call `useEmailByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useEmailByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEmailByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export declare function useEmailByIdQuery(baseOptions: Apollo.QueryHookOptions<EmailByIdQuery, EmailByIdQueryVariables>): Apollo.QueryResult<EmailByIdQuery, Types.Exact<{
    id: string;
}>>;
export declare function useEmailByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<EmailByIdQuery, EmailByIdQueryVariables>): Apollo.QueryTuple<EmailByIdQuery, Types.Exact<{
    id: string;
}>>;
export declare type EmailByIdQueryHookResult = ReturnType<typeof useEmailByIdQuery>;
export declare type EmailByIdLazyQueryHookResult = ReturnType<typeof useEmailByIdLazyQuery>;
export declare type EmailByIdQueryResult = Apollo.QueryResult<EmailByIdQuery, EmailByIdQueryVariables>;
//# sourceMappingURL=EmailById.d.ts.map