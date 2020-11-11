import type * as Types from './types';
import type { PromotionPartsFragment } from './PromotionParts';
import type { BlockPartsFragment } from './BlockParts';
import * as Apollo from '@apollo/client';
export declare type PromotionsByTagQueryVariables = Types.Exact<{
    perPage: Types.Scalars['Int'];
    slug: Array<Types.Maybe<Types.Scalars['String']>>;
}>;
export declare type PromotionsByTagQuery = {
    __typename?: 'RootQuery';
    promotions?: Types.Maybe<{
        __typename?: 'RootQueryToPromotionConnection';
        nodes?: Types.Maybe<Array<Types.Maybe<({
            __typename?: 'Promotion';
            blocks?: Types.Maybe<Array<Types.Maybe<({
                __typename?: 'Block';
            } & BlockPartsFragment)>>>;
        } & PromotionPartsFragment)>>>;
    }>;
};
export declare const PromotionsByTagDocument: Apollo.DocumentNode;
/**
 * __usePromotionsByTagQuery__
 *
 * To run a query within a React component, call `usePromotionsByTagQuery` and pass it any options that fit your needs.
 * When your component renders, `usePromotionsByTagQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePromotionsByTagQuery({
 *   variables: {
 *      perPage: // value for 'perPage'
 *      slug: // value for 'slug'
 *   },
 * });
 */
export declare function usePromotionsByTagQuery(baseOptions: Apollo.QueryHookOptions<PromotionsByTagQuery, PromotionsByTagQueryVariables>): Apollo.QueryResult<PromotionsByTagQuery, Types.Exact<{
    perPage: number;
    slug: (string | null)[];
}>>;
export declare function usePromotionsByTagLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PromotionsByTagQuery, PromotionsByTagQueryVariables>): Apollo.QueryTuple<PromotionsByTagQuery, Types.Exact<{
    perPage: number;
    slug: (string | null)[];
}>>;
export declare type PromotionsByTagQueryHookResult = ReturnType<typeof usePromotionsByTagQuery>;
export declare type PromotionsByTagLazyQueryHookResult = ReturnType<typeof usePromotionsByTagLazyQuery>;
export declare type PromotionsByTagQueryResult = Apollo.QueryResult<PromotionsByTagQuery, PromotionsByTagQueryVariables>;
//# sourceMappingURL=PromotionsByTag.d.ts.map