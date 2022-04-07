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
exports.useLatestEmailByListLazyQuery = exports.useLatestEmailByListQuery = exports.LatestEmailByListDocument = void 0;
const client_1 = require("@apollo/client");
const EmailTeaserParts_1 = require("./EmailTeaserParts");
const Apollo = __importStar(require("@apollo/client"));
const defaultOptions = {};
exports.LatestEmailByListDocument = client_1.gql `
    query LatestEmailByList($perPage: Int = 1, $slug: [String]!) {
  emailLists(first: $perPage, where: {slug: $slug}) {
    nodes {
      id
      emails(first: 1) {
        nodes {
          html
          ...EmailTeaserParts
        }
      }
    }
  }
}
    ${EmailTeaserParts_1.EmailTeaserPartsFragmentDoc}`;
/**
 * __useLatestEmailByListQuery__
 *
 * To run a query within a React component, call `useLatestEmailByListQuery` and pass it any options that fit your needs.
 * When your component renders, `useLatestEmailByListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLatestEmailByListQuery({
 *   variables: {
 *      perPage: // value for 'perPage'
 *      slug: // value for 'slug'
 *   },
 * });
 */
function useLatestEmailByListQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useQuery(exports.LatestEmailByListDocument, options);
}
exports.useLatestEmailByListQuery = useLatestEmailByListQuery;
function useLatestEmailByListLazyQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useLazyQuery(exports.LatestEmailByListDocument, options);
}
exports.useLatestEmailByListLazyQuery = useLatestEmailByListLazyQuery;
//# sourceMappingURL=LatestEmailByList.js.map