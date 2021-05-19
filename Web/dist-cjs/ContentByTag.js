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
exports.useContentByTagLazyQuery = exports.useContentByTagQuery = exports.ContentByTagDocument = void 0;
const client_1 = require("@apollo/client");
const TagParts_1 = require("./TagParts");
const EmailParts_1 = require("./EmailParts");
const ArticleTeaserParts_1 = require("./ArticleTeaserParts");
const Apollo = __importStar(require("@apollo/client"));
const defaultOptions = {};
exports.ContentByTagDocument = client_1.gql `
    query ContentByTag($slug: String!, $perPage: Int = 10, $after: String) {
  tags(where: {slug: [$slug]}) {
    nodes {
      ...TagParts
    }
  }
  tagContent(after: $after, first: $perPage, where: {slug: $slug}) {
    nodes {
      ... on Email {
        ...EmailParts
        emailLists {
          nodes {
            slug
          }
        }
      }
      ... on Post {
        ...ArticleTeaserParts
      }
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}
    ${TagParts_1.TagPartsFragmentDoc}
${EmailParts_1.EmailPartsFragmentDoc}
${ArticleTeaserParts_1.ArticleTeaserPartsFragmentDoc}`;
/**
 * __useContentByTagQuery__
 *
 * To run a query within a React component, call `useContentByTagQuery` and pass it any options that fit your needs.
 * When your component renders, `useContentByTagQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useContentByTagQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *      perPage: // value for 'perPage'
 *      after: // value for 'after'
 *   },
 * });
 */
function useContentByTagQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useQuery(exports.ContentByTagDocument, options);
}
exports.useContentByTagQuery = useContentByTagQuery;
function useContentByTagLazyQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useLazyQuery(exports.ContentByTagDocument, options);
}
exports.useContentByTagLazyQuery = useContentByTagLazyQuery;
//# sourceMappingURL=ContentByTag.js.map