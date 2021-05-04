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
exports.useEmailsByAuthorLazyQuery = exports.useEmailsByAuthorQuery = exports.EmailsByAuthorDocument = void 0;
const client_1 = require("@apollo/client");
const AuthorParts_1 = require("./AuthorParts");
const EmailParts_1 = require("./EmailParts");
const EmailListParts_1 = require("./EmailListParts");
const Apollo = __importStar(require("@apollo/client"));
const defaultOptions = {};
exports.EmailsByAuthorDocument = client_1.gql `
    query EmailsByAuthor($after: String = "", $perPage: Int = 10, $slug: [String]) {
  authors: coAuthors(where: {name: $slug}) {
    nodes {
      ...AuthorParts
      emails(after: $after, first: $perPage) {
        nodes {
          ...EmailParts
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
  }
}
    ${AuthorParts_1.AuthorPartsFragmentDoc}
${EmailParts_1.EmailPartsFragmentDoc}
${EmailListParts_1.EmailListPartsFragmentDoc}`;
/**
 * __useEmailsByAuthorQuery__
 *
 * To run a query within a React component, call `useEmailsByAuthorQuery` and pass it any options that fit your needs.
 * When your component renders, `useEmailsByAuthorQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEmailsByAuthorQuery({
 *   variables: {
 *      after: // value for 'after'
 *      perPage: // value for 'perPage'
 *      slug: // value for 'slug'
 *   },
 * });
 */
function useEmailsByAuthorQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useQuery(exports.EmailsByAuthorDocument, options);
}
exports.useEmailsByAuthorQuery = useEmailsByAuthorQuery;
function useEmailsByAuthorLazyQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useLazyQuery(exports.EmailsByAuthorDocument, options);
}
exports.useEmailsByAuthorLazyQuery = useEmailsByAuthorLazyQuery;
//# sourceMappingURL=EmailsByAuthor.js.map