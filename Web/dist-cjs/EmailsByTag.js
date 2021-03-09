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
exports.useEmailsByTagLazyQuery = exports.useEmailsByTagQuery = exports.EmailsByTagDocument = void 0;
const client_1 = require("@apollo/client");
const EmailParts_1 = require("./EmailParts");
const EmailListParts_1 = require("./EmailListParts");
const Apollo = __importStar(require("@apollo/client"));
const defaultOptions = {};
exports.EmailsByTagDocument = client_1.gql `
    query EmailsByTag($after: String = "", $perPage: Int = 10, $slug: [String]) {
  emails(after: $after, first: $perPage, where: {tagSlugIn: $slug}) {
    nodes {
      ...EmailParts
      html
      link
      emailLists {
        nodes {
          ...EmailListParts
        }
      }
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}
    ${EmailParts_1.EmailPartsFragmentDoc}
${EmailListParts_1.EmailListPartsFragmentDoc}`;
/**
 * __useEmailsByTagQuery__
 *
 * To run a query within a React component, call `useEmailsByTagQuery` and pass it any options that fit your needs.
 * When your component renders, `useEmailsByTagQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEmailsByTagQuery({
 *   variables: {
 *      after: // value for 'after'
 *      perPage: // value for 'perPage'
 *      slug: // value for 'slug'
 *   },
 * });
 */
function useEmailsByTagQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useQuery(exports.EmailsByTagDocument, options);
}
exports.useEmailsByTagQuery = useEmailsByTagQuery;
function useEmailsByTagLazyQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useLazyQuery(exports.EmailsByTagDocument, options);
}
exports.useEmailsByTagLazyQuery = useEmailsByTagLazyQuery;
//# sourceMappingURL=EmailsByTag.js.map