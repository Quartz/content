"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useMemberHomeLazyQuery = exports.useMemberHomeQuery = exports.MemberHomeDocument = void 0;
const client_1 = require("@apollo/client");
const TagParts_1 = require("./TagParts");
const ArticleTeaserParts_1 = require("./ArticleTeaserParts");
const GuideParts_1 = require("./GuideParts");
const Apollo = __importStar(require("@apollo/client"));
exports.MemberHomeDocument = client_1.gql `
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
    ${TagParts_1.TagPartsFragmentDoc}
${ArticleTeaserParts_1.ArticleTeaserPartsFragmentDoc}
${GuideParts_1.GuidePartsFragmentDoc}`;
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
function useMemberHomeQuery(baseOptions) {
    return Apollo.useQuery(exports.MemberHomeDocument, baseOptions);
}
exports.useMemberHomeQuery = useMemberHomeQuery;
function useMemberHomeLazyQuery(baseOptions) {
    return Apollo.useLazyQuery(exports.MemberHomeDocument, baseOptions);
}
exports.useMemberHomeLazyQuery = useMemberHomeLazyQuery;
//# sourceMappingURL=MemberHome.js.map