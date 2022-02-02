import { gql } from '@apollo/client';
import { CollectionPartsFragmentDoc } from './CollectionParts';
import { BulletinDataPartsFragmentDoc } from './BulletinDataParts';
import * as Apollo from '@apollo/client';
const defaultOptions = {};
export const NonHomeEssentialsDocument = /*#__PURE__*/ gql `
    query NonHomeEssentials($after: String = "", $perPage: Int) {
  collections(first: $perPage, after: $after, where: {tagNotIn: 400}) {
    nodes {
      ...CollectionParts
      bulletin {
        ...BulletinDataParts
      }
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}
    ${CollectionPartsFragmentDoc}
${BulletinDataPartsFragmentDoc}`;
/**
 * __useNonHomeEssentialsQuery__
 *
 * To run a query within a React component, call `useNonHomeEssentialsQuery` and pass it any options that fit your needs.
 * When your component renders, `useNonHomeEssentialsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNonHomeEssentialsQuery({
 *   variables: {
 *      after: // value for 'after'
 *      perPage: // value for 'perPage'
 *   },
 * });
 */
export function useNonHomeEssentialsQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useQuery(NonHomeEssentialsDocument, options);
}
export function useNonHomeEssentialsLazyQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useLazyQuery(NonHomeEssentialsDocument, options);
}
//# sourceMappingURL=NonHomeEssentials.js.map