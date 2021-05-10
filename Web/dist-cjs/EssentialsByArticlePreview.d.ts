import type * as Types from './types';
import type { CollectionPartsFragment } from './CollectionParts';
import type { ObsessionPartsFragment } from './ObsessionParts';
import type { GuidePartsFragment } from './GuideParts';
import * as Apollo from '@apollo/client';
export declare type EssentialsByArticlePreviewQueryVariables = Types.Exact<{
    id: Types.Scalars['Int'];
    time: Types.Scalars['Int'];
    token: Types.Scalars['String'];
}>;
export declare type EssentialsByArticlePreviewQuery = {
    __typename?: 'RootQuery';
    posts?: Types.Maybe<{
        __typename?: 'RootQueryToPostConnection';
        nodes?: Types.Maybe<Array<Types.Maybe<{
            __typename?: 'Post';
            id: string;
            essentials?: Types.Maybe<{
                __typename?: 'PostToCollectionConnection';
                nodes?: Types.Maybe<Array<Types.Maybe<({
                    __typename?: 'Collection';
                } & CollectionPartsFragment)>>>;
            }>;
            obsessions?: Types.Maybe<{
                __typename?: 'PostToObsessionConnection';
                nodes?: Types.Maybe<Array<Types.Maybe<({
                    __typename?: 'Obsession';
                    essentials?: Types.Maybe<{
                        __typename?: 'ObsessionToCollectionConnection';
                        nodes?: Types.Maybe<Array<Types.Maybe<({
                            __typename?: 'Collection';
                        } & CollectionPartsFragment)>>>;
                    }>;
                } & ObsessionPartsFragment)>>>;
            }>;
            guides?: Types.Maybe<{
                __typename?: 'PostToGuideConnection';
                nodes?: Types.Maybe<Array<Types.Maybe<({
                    __typename?: 'Guide';
                    essentials?: Types.Maybe<{
                        __typename?: 'GuideToCollectionConnection';
                        nodes?: Types.Maybe<Array<Types.Maybe<({
                            __typename?: 'Collection';
                        } & CollectionPartsFragment)>>>;
                    }>;
                } & GuidePartsFragment)>>>;
            }>;
        }>>>;
    }>;
};
export declare const EssentialsByArticlePreviewDocument: Apollo.DocumentNode;
/**
 * __useEssentialsByArticlePreviewQuery__
 *
 * To run a query within a React component, call `useEssentialsByArticlePreviewQuery` and pass it any options that fit your needs.
 * When your component renders, `useEssentialsByArticlePreviewQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEssentialsByArticlePreviewQuery({
 *   variables: {
 *      id: // value for 'id'
 *      time: // value for 'time'
 *      token: // value for 'token'
 *   },
 * });
 */
export declare function useEssentialsByArticlePreviewQuery(baseOptions: Apollo.QueryHookOptions<EssentialsByArticlePreviewQuery, EssentialsByArticlePreviewQueryVariables>): Apollo.QueryResult<EssentialsByArticlePreviewQuery, Types.Exact<{
    id: number;
    time: number;
    token: string;
}>>;
export declare function useEssentialsByArticlePreviewLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<EssentialsByArticlePreviewQuery, EssentialsByArticlePreviewQueryVariables>): Apollo.QueryTuple<EssentialsByArticlePreviewQuery, Types.Exact<{
    id: number;
    time: number;
    token: string;
}>>;
export declare type EssentialsByArticlePreviewQueryHookResult = ReturnType<typeof useEssentialsByArticlePreviewQuery>;
export declare type EssentialsByArticlePreviewLazyQueryHookResult = ReturnType<typeof useEssentialsByArticlePreviewLazyQuery>;
export declare type EssentialsByArticlePreviewQueryResult = Apollo.QueryResult<EssentialsByArticlePreviewQuery, EssentialsByArticlePreviewQueryVariables>;
//# sourceMappingURL=EssentialsByArticlePreview.d.ts.map