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
exports.useNonHomeEssentialsLazyQuery = exports.useNonHomeEssentialsQuery = exports.NonHomeEssentialsDocument = void 0;
const client_1 = require("@apollo/client");
const CollectionParts_1 = require("./CollectionParts");
const BulletinDataParts_1 = require("./BulletinDataParts");
const Apollo = __importStar(require("@apollo/client"));
const defaultOptions = {};
exports.NonHomeEssentialsDocument = client_1.gql `
    query NonHomeEssentials($after: String = "", $perPage: Int) {
  collections(first: $perPage, after: $after, where: {tagNotIn: 400}) {
    nodes {
      ...CollectionParts
      bulletin {
        ...BulletinDataParts
      }
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}
    ${CollectionParts_1.CollectionPartsFragmentDoc}
${BulletinDataParts_1.BulletinDataPartsFragmentDoc}`;
/**
 * __useNonHomeEssentialsQuery__
 *
 * To run a query within a React component, call `useNonHomeEssentialsQuery` and pass it any options that fit your needs.
 * When your component renders, `useNonHomeEssentialsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNonHomeEssentialsQuery({
 *   variables: {
 *      after: // value for 'after'
 *      perPage: // value for 'perPage'
 *   },
 * });
 */
function useNonHomeEssentialsQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useQuery(exports.NonHomeEssentialsDocument, options);
}
exports.useNonHomeEssentialsQuery = useNonHomeEssentialsQuery;
function useNonHomeEssentialsLazyQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useLazyQuery(exports.NonHomeEssentialsDocument, options);
}
exports.useNonHomeEssentialsLazyQuery = useNonHomeEssentialsLazyQuery;
//# sourceMappingURL=NonHomeEssentials.js.map