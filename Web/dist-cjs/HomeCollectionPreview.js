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
exports.useHomeCollectionPreviewLazyQuery = exports.useHomeCollectionPreviewQuery = exports.HomeCollectionPreviewDocument = void 0;
const client_1 = require("@apollo/client");
const CollectionParts_1 = require("./CollectionParts");
const Apollo = __importStar(require("@apollo/client"));
exports.HomeCollectionPreviewDocument = client_1.gql `
    query HomeCollectionPreview($id: Int!, $time: Int!, $token: String!) {
  collections(where: {id: $id, preview: {time: $time, token: $token}}) {
    nodes {
      ...CollectionParts
    }
  }
}
    ${CollectionParts_1.CollectionPartsFragmentDoc}`;
/**
 * __useHomeCollectionPreviewQuery__
 *
 * To run a query within a React component, call `useHomeCollectionPreviewQuery` and pass it any options that fit your needs.
 * When your component renders, `useHomeCollectionPreviewQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHomeCollectionPreviewQuery({
 *   variables: {
 *      id: // value for 'id'
 *      time: // value for 'time'
 *      token: // value for 'token'
 *   },
 * });
 */
function useHomeCollectionPreviewQuery(baseOptions) {
    return Apollo.useQuery(exports.HomeCollectionPreviewDocument, baseOptions);
}
exports.useHomeCollectionPreviewQuery = useHomeCollectionPreviewQuery;
function useHomeCollectionPreviewLazyQuery(baseOptions) {
    return Apollo.useLazyQuery(exports.HomeCollectionPreviewDocument, baseOptions);
}
exports.useHomeCollectionPreviewLazyQuery = useHomeCollectionPreviewLazyQuery;
//# sourceMappingURL=HomeCollectionPreview.js.map