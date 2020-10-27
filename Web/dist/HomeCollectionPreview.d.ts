import type * as Types from './types';
import type { CollectionPartsFragment } from './CollectionParts';
import * as Apollo from '@apollo/client';
export declare type HomeCollectionPreviewQueryVariables = Types.Exact<{
    id: Types.Scalars['Int'];
    time: Types.Scalars['Int'];
    token: Types.Scalars['String'];
}>;
export declare type HomeCollectionPreviewQuery = ({
    __typename?: 'RootQuery';
} & {
    collections?: Types.Maybe<({
        __typename?: 'RootQueryToCollectionConnection';
    } & {
        nodes?: Types.Maybe<Array<Types.Maybe<({
            __typename?: 'Collection';
        } & CollectionPartsFragment)>>>;
    })>;
});
export declare const HomeCollectionPreviewDocument: Apollo.DocumentNode;
/**
 * __useHomeCollectionPreviewQuery__
 *
 * To run a query within a React component, call `useHomeCollectionPreviewQuery` and pass it any options that fit your needs.
 * When your component renders, `useHomeCollectionPreviewQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHomeCollectionPreviewQuery({
 *   variables: {
 *      id: // value for 'id'
 *      time: // value for 'time'
 *      token: // value for 'token'
 *   },
 * });
 */
export declare function useHomeCollectionPreviewQuery(baseOptions?: Apollo.QueryHookOptions<HomeCollectionPreviewQuery, HomeCollectionPreviewQueryVariables>): Apollo.QueryResult<HomeCollectionPreviewQuery, Types.Exact<{
    id: number;
    time: number;
    token: string;
}>>;
export declare function useHomeCollectionPreviewLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HomeCollectionPreviewQuery, HomeCollectionPreviewQueryVariables>): Apollo.QueryTuple<HomeCollectionPreviewQuery, Types.Exact<{
    id: number;
    time: number;
    token: string;
}>>;
export declare type HomeCollectionPreviewQueryHookResult = ReturnType<typeof useHomeCollectionPreviewQuery>;
export declare type HomeCollectionPreviewLazyQueryHookResult = ReturnType<typeof useHomeCollectionPreviewLazyQuery>;
export declare type HomeCollectionPreviewQueryResult = Apollo.QueryResult<HomeCollectionPreviewQuery, HomeCollectionPreviewQueryVariables>;
//# sourceMappingURL=HomeCollectionPreview.d.ts.map