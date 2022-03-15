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
exports.useArticlesByGuide2LazyQuery = exports.useArticlesByGuide2Query = exports.ArticlesByGuide2Document = void 0;
const client_1 = require("@apollo/client");
const GuideParts_1 = require("./GuideParts");
const CollectionParts_1 = require("./CollectionParts");
const ArticleTeaserParts_1 = require("./ArticleTeaserParts");
const Apollo = __importStar(require("@apollo/client"));
const defaultOptions = {};
exports.ArticlesByGuide2Document = client_1.gql `
    query ArticlesByGuide2($after: String = "", $perPage: Int!, $slug: ID!) {
  guide(id: $slug, idType: SLUG) {
    ...GuideParts
    essentials(first: 1) {
      nodes {
        ...CollectionParts
      }
    }
    posts(
      after: $after
      first: $perPage
      where: {orderby: {field: DATE, order: ASC}}
    ) {
      nodes {
        ...ArticleTeaserParts
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
}
    ${GuideParts_1.GuidePartsFragmentDoc}
${CollectionParts_1.CollectionPartsFragmentDoc}
${ArticleTeaserParts_1.ArticleTeaserPartsFragmentDoc}`;
/**
 * __useArticlesByGuide2Query__
 *
 * To run a query within a React component, call `useArticlesByGuide2Query` and pass it any options that fit your needs.
 * When your component renders, `useArticlesByGuide2Query` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useArticlesByGuide2Query({
 *   variables: {
 *      after: // value for 'after'
 *      perPage: // value for 'perPage'
 *      slug: // value for 'slug'
 *   },
 * });
 */
function useArticlesByGuide2Query(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useQuery(exports.ArticlesByGuide2Document, options);
}
exports.useArticlesByGuide2Query = useArticlesByGuide2Query;
function useArticlesByGuide2LazyQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useLazyQuery(exports.ArticlesByGuide2Document, options);
}
exports.useArticlesByGuide2LazyQuery = useArticlesByGuide2LazyQuery;
//# sourceMappingURL=ArticlesByGuide2.js.map