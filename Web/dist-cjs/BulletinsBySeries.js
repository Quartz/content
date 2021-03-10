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
exports.useBulletinsBySeriesLazyQuery = exports.useBulletinsBySeriesQuery = exports.BulletinsBySeriesDocument = void 0;
const client_1 = require("@apollo/client");
const SeriesParts_1 = require("./SeriesParts");
const BulletinParts_1 = require("./BulletinParts");
const Apollo = __importStar(require("@apollo/client"));
const defaultOptions = {};
exports.BulletinsBySeriesDocument = client_1.gql `
    query BulletinsBySeries($after: String = "", $perPage: Int, $slug: [String]) {
  serieses(where: {slug: $slug}) {
    nodes {
      ...SeriesParts
      posts: bulletins(after: $after, first: $perPage) {
        nodes {
          ...BulletinParts
        }
        pageInfo {
          endCursor
          hasNextPage
        }
      }
    }
  }
}
    ${SeriesParts_1.SeriesPartsFragmentDoc}
${BulletinParts_1.BulletinPartsFragmentDoc}`;
/**
 * __useBulletinsBySeriesQuery__
 *
 * To run a query within a React component, call `useBulletinsBySeriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useBulletinsBySeriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBulletinsBySeriesQuery({
 *   variables: {
 *      after: // value for 'after'
 *      perPage: // value for 'perPage'
 *      slug: // value for 'slug'
 *   },
 * });
 */
function useBulletinsBySeriesQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useQuery(exports.BulletinsBySeriesDocument, options);
}
exports.useBulletinsBySeriesQuery = useBulletinsBySeriesQuery;
function useBulletinsBySeriesLazyQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useLazyQuery(exports.BulletinsBySeriesDocument, options);
}
exports.useBulletinsBySeriesLazyQuery = useBulletinsBySeriesLazyQuery;
//# sourceMappingURL=BulletinsBySeries.js.map