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
exports.useArticleTeaserLazyQuery = exports.useArticleTeaserQuery = exports.ArticleTeaserDocument = void 0;
const client_1 = require("@apollo/client");
const ArticleTeaserParts_1 = require("./ArticleTeaserParts");
const Apollo = __importStar(require("@apollo/client"));
exports.ArticleTeaserDocument = client_1.gql `
    query ArticleTeaser($id: ID!) {
  post(id: $id) {
    ...ArticleTeaserParts
  }
}
    ${ArticleTeaserParts_1.ArticleTeaserPartsFragmentDoc}`;
/**
 * __useArticleTeaserQuery__
 *
 * To run a query within a React component, call `useArticleTeaserQuery` and pass it any options that fit your needs.
 * When your component renders, `useArticleTeaserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useArticleTeaserQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
function useArticleTeaserQuery(baseOptions) {
    return Apollo.useQuery(exports.ArticleTeaserDocument, baseOptions);
}
exports.useArticleTeaserQuery = useArticleTeaserQuery;
function useArticleTeaserLazyQuery(baseOptions) {
    return Apollo.useLazyQuery(exports.ArticleTeaserDocument, baseOptions);
}
exports.useArticleTeaserLazyQuery = useArticleTeaserLazyQuery;
//# sourceMappingURL=ArticleTeaser.js.map