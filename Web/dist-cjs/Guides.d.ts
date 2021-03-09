import type * as Types from './types';
import type { GuidePartsFragment } from './GuideParts';
import type { ArticleTeaserPartsFragment } from './ArticleTeaserParts';
import * as Apollo from '@apollo/client';
export declare type GuidesQueryVariables = Types.Exact<{
    before?: Types.Maybe<Types.Scalars['String']>;
    perPage?: Types.Maybe<Types.Scalars['Int']>;
    postsPerGuide?: Types.Maybe<Types.Scalars['Int']>;
}>;
export declare type GuidesQuery = {
    __typename?: 'RootQuery';
    guides?: Types.Maybe<{
        __typename?: 'RootQueryToGuideConnection';
        nodes?: Types.Maybe<Array<Types.Maybe<({
            __typename?: 'Guide';
            posts?: Types.Maybe<{
                __typename?: 'GuideToPostConnection';
                nodes?: Types.Maybe<Array<Types.Maybe<({
                    __typename?: 'Post';
                } & ArticleTeaserPartsFragment)>>>;
            }>;
        } & GuidePartsFragment)>>>;
        pageInfo?: Types.Maybe<{
            __typename?: 'WPPageInfo';
            hasPreviousPage: boolean;
            startCursor?: Types.Maybe<string>;
        }>;
    }>;
};
export declare const GuidesDocument: Apollo.DocumentNode;
/**
 * __useGuidesQuery__
 *
 * To run a query within a React component, call `useGuidesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGuidesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGuidesQuery({
 *   variables: {
 *      before: // value for 'before'
 *      perPage: // value for 'perPage'
 *      postsPerGuide: // value for 'postsPerGuide'
 *   },
 * });
 */
export declare function useGuidesQuery(baseOptions?: Apollo.QueryHookOptions<GuidesQuery, GuidesQueryVariables>): Apollo.QueryResult<GuidesQuery, Types.Exact<{
    before?: Types.Maybe<string> | undefined;
    perPage?: Types.Maybe<number> | undefined;
    postsPerGuide?: Types.Maybe<number> | undefined;
}>>;
export declare function useGuidesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GuidesQuery, GuidesQueryVariables>): Apollo.QueryTuple<GuidesQuery, Types.Exact<{
    before?: Types.Maybe<string> | undefined;
    perPage?: Types.Maybe<number> | undefined;
    postsPerGuide?: Types.Maybe<number> | undefined;
}>>;
export declare type GuidesQueryHookResult = ReturnType<typeof useGuidesQuery>;
export declare type GuidesLazyQueryHookResult = ReturnType<typeof useGuidesLazyQuery>;
export declare type GuidesQueryResult = Apollo.QueryResult<GuidesQuery, GuidesQueryVariables>;
//# sourceMappingURL=Guides.d.ts.map