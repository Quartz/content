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
exports.useObsessionsLazyQuery = exports.useObsessionsQuery = exports.ObsessionsDocument = void 0;
const client_1 = require("@apollo/client");
const ObsessionParts_1 = require("./ObsessionParts");
const ArticleTeaserParts_1 = require("./ArticleTeaserParts");
const Apollo = __importStar(require("@apollo/client"));
const defaultOptions = {};
exports.ObsessionsDocument = client_1.gql `
    query Obsessions($perPage: Int!, $postsPerPage: Int = 1, $location: MenuLocationEnum!) {
  menuItems(first: $perPage, where: {location: $location}) {
    nodes {
      id
      connectedObject {
        ... on Obsession {
          ...ObsessionParts
          posts(first: $postsPerPage) {
            nodes {
              ...ArticleTeaserParts
            }
          }
        }
      }
    }
  }
}
    ${ObsessionParts_1.ObsessionPartsFragmentDoc}
${ArticleTeaserParts_1.ArticleTeaserPartsFragmentDoc}`;
/**
 * __useObsessionsQuery__
 *
 * To run a query within a React component, call `useObsessionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useObsessionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useObsessionsQuery({
 *   variables: {
 *      perPage: // value for 'perPage'
 *      postsPerPage: // value for 'postsPerPage'
 *      location: // value for 'location'
 *   },
 * });
 */
function useObsessionsQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useQuery(exports.ObsessionsDocument, options);
}
exports.useObsessionsQuery = useObsessionsQuery;
function useObsessionsLazyQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useLazyQuery(exports.ObsessionsDocument, options);
}
exports.useObsessionsLazyQuery = useObsessionsLazyQuery;
//# sourceMappingURL=Obsessions.js.map