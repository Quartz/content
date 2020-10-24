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
exports.useMemberVideoLazyQuery = exports.useMemberVideoQuery = exports.MemberVideoDocument = void 0;
const client_1 = require("@apollo/client");
const TagParts_1 = require("./TagParts");
const ArticleTeaserParts_1 = require("./ArticleTeaserParts");
const Apollo = __importStar(require("@apollo/client"));
exports.MemberVideoDocument = client_1.gql `
    query MemberVideo {
  features: menuItems(first: 3, where: {location: FEATURES_VIDEO_MEMBERS}) {
    nodes {
      id
      connectedObject {
        ... on Tag {
          ...TagParts
          posts(first: 6, where: {orderby: {field: MEMBERSHIP}}) {
            nodes {
              ...ArticleTeaserParts
            }
          }
        }
      }
    }
  }
}
    ${TagParts_1.TagPartsFragmentDoc}
${ArticleTeaserParts_1.ArticleTeaserPartsFragmentDoc}`;
/**
 * __useMemberVideoQuery__
 *
 * To run a query within a React component, call `useMemberVideoQuery` and pass it any options that fit your needs.
 * When your component renders, `useMemberVideoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMemberVideoQuery({
 *   variables: {
 *   },
 * });
 */
function useMemberVideoQuery(baseOptions) {
    return Apollo.useQuery(exports.MemberVideoDocument, baseOptions);
}
exports.useMemberVideoQuery = useMemberVideoQuery;
function useMemberVideoLazyQuery(baseOptions) {
    return Apollo.useLazyQuery(exports.MemberVideoDocument, baseOptions);
}
exports.useMemberVideoLazyQuery = useMemberVideoLazyQuery;
//# sourceMappingURL=MemberVideo.js.map