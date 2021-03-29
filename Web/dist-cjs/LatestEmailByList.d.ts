import type * as Types from './types';
import type { EmailPartsFragment } from './EmailParts';
import * as Apollo from '@apollo/client';
export declare type LatestEmailByListQueryVariables = Types.Exact<{
    perPage?: Types.Maybe<Types.Scalars['Int']>;
    slug: Array<Types.Maybe<Types.Scalars['String']>> | Types.Maybe<Types.Scalars['String']>;
}>;
export declare type LatestEmailByListQuery = {
    __typename?: 'RootQuery';
    emailLists?: Types.Maybe<{
        __typename?: 'RootQueryToEmailListConnection';
        nodes?: Types.Maybe<Array<Types.Maybe<{
            __typename?: 'EmailList';
            id: string;
            emails?: Types.Maybe<{
                __typename?: 'EmailListToEmailConnection';
                nodes?: Types.Maybe<Array<Types.Maybe<({
                    __typename?: 'Email';
                    html?: Types.Maybe<string>;
                } & EmailPartsFragment)>>>;
            }>;
        }>>>;
    }>;
};
export declare const LatestEmailByListDocument: Apollo.DocumentNode;
/**
 * __useLatestEmailByListQuery__
 *
 * To run a query within a React component, call `useLatestEmailByListQuery` and pass it any options that fit your needs.
 * When your component renders, `useLatestEmailByListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLatestEmailByListQuery({
 *   variables: {
 *      perPage: // value for 'perPage'
 *      slug: // value for 'slug'
 *   },
 * });
 */
export declare function useLatestEmailByListQuery(baseOptions: Apollo.QueryHookOptions<LatestEmailByListQuery, LatestEmailByListQueryVariables>): Apollo.QueryResult<LatestEmailByListQuery, Types.Exact<{
    perPage?: Types.Maybe<number> | undefined;
    slug: Types.Maybe<string> | Types.Maybe<string>[];
}>>;
export declare function useLatestEmailByListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LatestEmailByListQuery, LatestEmailByListQueryVariables>): Apollo.QueryTuple<LatestEmailByListQuery, Types.Exact<{
    perPage?: Types.Maybe<number> | undefined;
    slug: Types.Maybe<string> | Types.Maybe<string>[];
}>>;
export declare type LatestEmailByListQueryHookResult = ReturnType<typeof useLatestEmailByListQuery>;
export declare type LatestEmailByListLazyQueryHookResult = ReturnType<typeof useLatestEmailByListLazyQuery>;
export declare type LatestEmailByListQueryResult = Apollo.QueryResult<LatestEmailByListQuery, LatestEmailByListQueryVariables>;
//# sourceMappingURL=LatestEmailByList.d.ts.map