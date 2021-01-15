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
exports.usePageByUriLazyQuery = exports.usePageByUriQuery = exports.PageByUriDocument = void 0;
const client_1 = require("@apollo/client");
const Apollo = __importStar(require("@apollo/client"));
exports.PageByUriDocument = client_1.gql `
    query PageByUri($slug: String!) {
  pageBy(uri: $slug) {
    id
    content
    title
  }
}
    `;
/**
 * __usePageByUriQuery__
 *
 * To run a query within a React component, call `usePageByUriQuery` and pass it any options that fit your needs.
 * When your component renders, `usePageByUriQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePageByUriQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
function usePageByUriQuery(baseOptions) {
    return Apollo.useQuery(exports.PageByUriDocument, baseOptions);
}
exports.usePageByUriQuery = usePageByUriQuery;
function usePageByUriLazyQuery(baseOptions) {
    return Apollo.useLazyQuery(exports.PageByUriDocument, baseOptions);
}
exports.usePageByUriLazyQuery = usePageByUriLazyQuery;
//# sourceMappingURL=PageByUri.js.map