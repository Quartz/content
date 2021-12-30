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
exports.useNugsByTagLazyQuery = exports.useNugsByTagQuery = exports.NugsByTagDocument = void 0;
const client_1 = require("@apollo/client");
const NugParts_1 = require("./NugParts");
const BulletinDataParts_1 = require("./BulletinDataParts");
const Apollo = __importStar(require("@apollo/client"));
const defaultOptions = {};
exports.NugsByTagDocument = client_1.gql `
    query NugsByTag($perPage: Int!, $slug: [String]!) {
  nugs(first: $perPage, where: {tagSlugIn: $slug}) {
    nodes {
      ...NugParts
      bulletin {
        ...BulletinDataParts
      }
    }
  }
}
    ${NugParts_1.NugPartsFragmentDoc}
${BulletinDataParts_1.BulletinDataPartsFragmentDoc}`;
/**
 * __useNugsByTagQuery__
 *
 * To run a query within a React component, call `useNugsByTagQuery` and pass it any options that fit your needs.
 * When your component renders, `useNugsByTagQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNugsByTagQuery({
 *   variables: {
 *      perPage: // value for 'perPage'
 *      slug: // value for 'slug'
 *   },
 * });
 */
function useNugsByTagQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useQuery(exports.NugsByTagDocument, options);
}
exports.useNugsByTagQuery = useNugsByTagQuery;
function useNugsByTagLazyQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useLazyQuery(exports.NugsByTagDocument, options);
}
exports.useNugsByTagLazyQuery = useNugsByTagLazyQuery;
//# sourceMappingURL=NugsByTag.js.map