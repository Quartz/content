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
exports.useGuidesLazyQuery = exports.useGuidesQuery = exports.GuidesDocument = void 0;
const client_1 = require("@apollo/client");
const GuideParts_1 = require("./GuideParts");
const ArticleTeaserParts_1 = require("./ArticleTeaserParts");
const Apollo = __importStar(require("@apollo/client"));
const defaultOptions = {};
exports.GuidesDocument = client_1.gql `
    query Guides($before: String = "", $perPage: Int = 10, $postsPerGuide: Int = 1, $search: String) {
  guides(
    before: $before
    last: $perPage
    where: {search: $search, orderby: TERM_ID}
  ) {
    nodes {
      ...GuideParts
      posts(last: $postsPerGuide) {
        nodes {
          ...ArticleTeaserParts
        }
      }
    }
    pageInfo {
      hasPreviousPage
      startCursor
    }
  }
}
    ${GuideParts_1.GuidePartsFragmentDoc}
${ArticleTeaserParts_1.ArticleTeaserPartsFragmentDoc}`;
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
 *      search: // value for 'search'
 *   },
 * });
 */
function useGuidesQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useQuery(exports.GuidesDocument, options);
}
exports.useGuidesQuery = useGuidesQuery;
function useGuidesLazyQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useLazyQuery(exports.GuidesDocument, options);
}
exports.useGuidesLazyQuery = useGuidesLazyQuery;
//# sourceMappingURL=Guides.js.map