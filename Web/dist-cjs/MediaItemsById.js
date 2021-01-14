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
exports.useMediaItemsByIdLazyQuery = exports.useMediaItemsByIdQuery = exports.MediaItemsByIdDocument = void 0;
const client_1 = require("@apollo/client");
const MediaParts_1 = require("./MediaParts");
const Apollo = __importStar(require("@apollo/client"));
exports.MediaItemsByIdDocument = client_1.gql `
    query MediaItemsById($ids: [ID!]) {
  mediaItems(where: {in: $ids}) {
    nodes {
      ...MediaParts
    }
  }
}
    ${MediaParts_1.MediaPartsFragmentDoc}`;
/**
 * __useMediaItemsByIdQuery__
 *
 * To run a query within a React component, call `useMediaItemsByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useMediaItemsByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMediaItemsByIdQuery({
 *   variables: {
 *      ids: // value for 'ids'
 *   },
 * });
 */
function useMediaItemsByIdQuery(baseOptions) {
    return Apollo.useQuery(exports.MediaItemsByIdDocument, baseOptions);
}
exports.useMediaItemsByIdQuery = useMediaItemsByIdQuery;
function useMediaItemsByIdLazyQuery(baseOptions) {
    return Apollo.useLazyQuery(exports.MediaItemsByIdDocument, baseOptions);
}
exports.useMediaItemsByIdLazyQuery = useMediaItemsByIdLazyQuery;
//# sourceMappingURL=MediaItemsById.js.map