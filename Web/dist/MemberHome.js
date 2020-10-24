import { gql } from '@apollo/client';
import { TagPartsFragmentDoc } from './TagParts';
import { ArticleTeaserPartsFragmentDoc } from './ArticleTeaserParts';
import { GuidePartsFragmentDoc } from './GuideParts';
import * as Apollo from '@apollo/client';
export const MemberHomeDocument = /*#__PURE__*/ gql `
    query MemberHome {
  features: menuItems(first: 3, where: {location: FEATURES_MEMBERS}) {
    nodes {
      id
      connectedObject {
        ... on Tag {
          ...TagParts
          posts(first: 3, where: {orderby: {field: MEMBERSHIP}}) {
            nodes {
              ...ArticleTeaserParts
            }
          }
        }
      }
    }
  }
  guides(last: 6, where: {orderby: TERM_ORDER}) {
    nodes {
      ...GuideParts
    }
  }
}
    ${TagPartsFragmentDoc}
${ArticleTeaserPartsFragmentDoc}
${GuidePartsFragmentDoc}`;
/**
 * __useMemberHomeQuery__
 *
 * To run a query within a React component, call `useMemberHomeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMemberHomeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMemberHomeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMemberHomeQuery(baseOptions) {
    return Apollo.useQuery(MemberHomeDocument, baseOptions);
}
export function useMemberHomeLazyQuery(baseOptions) {
    return Apollo.useLazyQuery(MemberHomeDocument, baseOptions);
}
//# sourceMappingURL=MemberHome.js.map