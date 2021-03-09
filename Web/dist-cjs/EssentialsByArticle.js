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
exports.useEssentialsByArticleLazyQuery = exports.useEssentialsByArticleQuery = exports.EssentialsByArticleDocument = void 0;
const client_1 = require("@apollo/client");
const ObsessionParts_1 = require("./ObsessionParts");
const CollectionParts_1 = require("./CollectionParts");
const GuideParts_1 = require("./GuideParts");
const Apollo = __importStar(require("@apollo/client"));
const defaultOptions = {};
exports.EssentialsByArticleDocument = client_1.gql `
    query EssentialsByArticle($id: ID!) {
  post(id: $id) {
    id
    obsessions {
      nodes {
        ...ObsessionParts
        essentials(first: 1) {
          nodes {
            ...CollectionParts
          }
        }
      }
    }
    guides {
      nodes {
        ...GuideParts
        essentials(first: 1) {
          nodes {
            ...CollectionParts
          }
        }
      }
    }
  }
}
    ${ObsessionParts_1.ObsessionPartsFragmentDoc}
${CollectionParts_1.CollectionPartsFragmentDoc}
${GuideParts_1.GuidePartsFragmentDoc}`;
/**
 * __useEssentialsByArticleQuery__
 *
 * To run a query within a React component, call `useEssentialsByArticleQuery` and pass it any options that fit your needs.
 * When your component renders, `useEssentialsByArticleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEssentialsByArticleQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
function useEssentialsByArticleQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useQuery(exports.EssentialsByArticleDocument, options);
}
exports.useEssentialsByArticleQuery = useEssentialsByArticleQuery;
function useEssentialsByArticleLazyQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useLazyQuery(exports.EssentialsByArticleDocument, options);
}
exports.useEssentialsByArticleLazyQuery = useEssentialsByArticleLazyQuery;
//# sourceMappingURL=EssentialsByArticle.js.map