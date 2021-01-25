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
exports.useEssentialsByGuideLazyQuery = exports.useEssentialsByGuideQuery = exports.EssentialsByGuideDocument = void 0;
const client_1 = require("@apollo/client");
const CollectionParts_1 = require("./CollectionParts");
const Apollo = __importStar(require("@apollo/client"));
exports.EssentialsByGuideDocument = client_1.gql `
    query EssentialsByGuide($slug: String!) {
  guides(last: 1, where: {slug: [$slug]}) {
    nodes {
      id
      essentials(first: 1) {
        nodes {
          ...CollectionParts
        }
      }
    }
  }
}
    ${CollectionParts_1.CollectionPartsFragmentDoc}`;
/**
 * __useEssentialsByGuideQuery__
 *
 * To run a query within a React component, call `useEssentialsByGuideQuery` and pass it any options that fit your needs.
 * When your component renders, `useEssentialsByGuideQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEssentialsByGuideQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
function useEssentialsByGuideQuery(baseOptions) {
    return Apollo.useQuery(exports.EssentialsByGuideDocument, baseOptions);
}
exports.useEssentialsByGuideQuery = useEssentialsByGuideQuery;
function useEssentialsByGuideLazyQuery(baseOptions) {
    return Apollo.useLazyQuery(exports.EssentialsByGuideDocument, baseOptions);
}
exports.useEssentialsByGuideLazyQuery = useEssentialsByGuideLazyQuery;
//# sourceMappingURL=EssentialsByGuide.js.map