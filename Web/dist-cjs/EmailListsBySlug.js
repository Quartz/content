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
exports.useEmailListsBySlugLazyQuery = exports.useEmailListsBySlugQuery = exports.EmailListsBySlugDocument = void 0;
const client_1 = require("@apollo/client");
const EmailListParts_1 = require("./EmailListParts");
const Apollo = __importStar(require("@apollo/client"));
const defaultOptions = {};
exports.EmailListsBySlugDocument = client_1.gql `
    query EmailListsBySlug($perPage: Int = 10, $slug: [String]!) {
  emailLists(first: $perPage, where: {slug: $slug}) {
    nodes {
      ...EmailListParts
      emails(first: 1) {
        nodes {
          id
          emailId
        }
      }
    }
  }
}
    ${EmailListParts_1.EmailListPartsFragmentDoc}`;
/**
 * __useEmailListsBySlugQuery__
 *
 * To run a query within a React component, call `useEmailListsBySlugQuery` and pass it any options that fit your needs.
 * When your component renders, `useEmailListsBySlugQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEmailListsBySlugQuery({
 *   variables: {
 *      perPage: // value for 'perPage'
 *      slug: // value for 'slug'
 *   },
 * });
 */
function useEmailListsBySlugQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useQuery(exports.EmailListsBySlugDocument, options);
}
exports.useEmailListsBySlugQuery = useEmailListsBySlugQuery;
function useEmailListsBySlugLazyQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useLazyQuery(exports.EmailListsBySlugDocument, options);
}
exports.useEmailListsBySlugLazyQuery = useEmailListsBySlugLazyQuery;
//# sourceMappingURL=EmailListsBySlug.js.map