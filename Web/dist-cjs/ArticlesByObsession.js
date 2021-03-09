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
exports.useArticlesByObsessionLazyQuery = exports.useArticlesByObsessionQuery = exports.ArticlesByObsessionDocument = void 0;
const client_1 = require("@apollo/client");
const ObsessionParts_1 = require("./ObsessionParts");
const ArticleTeaserParts_1 = require("./ArticleTeaserParts");
const BulletinParts_1 = require("./BulletinParts");
const PromotionParts_1 = require("./PromotionParts");
const Apollo = __importStar(require("@apollo/client"));
const defaultOptions = {};
exports.ArticlesByObsessionDocument = client_1.gql `
    query ArticlesByObsession($after: String = "", $perPage: Int = 10, $slug: [String]!) {
  obsessions(where: {slug: $slug}) {
    nodes {
      ...ObsessionParts
      posts: content(after: $after, first: $perPage) {
        nodes {
          ... on Post {
            ...ArticleTeaserParts
          }
          ... on Bulletin {
            ...BulletinParts
          }
          ... on Promotion {
            ...PromotionParts
          }
        }
        pageInfo {
          endCursor
          hasNextPage
        }
      }
    }
  }
}
    ${ObsessionParts_1.ObsessionPartsFragmentDoc}
${ArticleTeaserParts_1.ArticleTeaserPartsFragmentDoc}
${BulletinParts_1.BulletinPartsFragmentDoc}
${PromotionParts_1.PromotionPartsFragmentDoc}`;
/**
 * __useArticlesByObsessionQuery__
 *
 * To run a query within a React component, call `useArticlesByObsessionQuery` and pass it any options that fit your needs.
 * When your component renders, `useArticlesByObsessionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useArticlesByObsessionQuery({
 *   variables: {
 *      after: // value for 'after'
 *      perPage: // value for 'perPage'
 *      slug: // value for 'slug'
 *   },
 * });
 */
function useArticlesByObsessionQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useQuery(exports.ArticlesByObsessionDocument, options);
}
exports.useArticlesByObsessionQuery = useArticlesByObsessionQuery;
function useArticlesByObsessionLazyQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useLazyQuery(exports.ArticlesByObsessionDocument, options);
}
exports.useArticlesByObsessionLazyQuery = useArticlesByObsessionLazyQuery;
//# sourceMappingURL=ArticlesByObsession.js.map