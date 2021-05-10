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
exports.useContentByAuthorLazyQuery = exports.useContentByAuthorQuery = exports.ContentByAuthorDocument = void 0;
const client_1 = require("@apollo/client");
const AuthorParts_1 = require("./AuthorParts");
const EmailParts_1 = require("./EmailParts");
const ArticleTeaserParts_1 = require("./ArticleTeaserParts");
const Apollo = __importStar(require("@apollo/client"));
const defaultOptions = {};
exports.ContentByAuthorDocument = client_1.gql `
    query ContentByAuthor($slug: String!, $perPage: Int! = 10, $after: String = "") {
  authors: coAuthors(where: {name: [$slug]}) {
    nodes {
      ...AuthorParts
    }
  }
  authorContent(after: $after, first: $perPage, where: {slug: $slug}) {
    nodes {
      ... on Email {
        ...EmailParts
        link
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
    ${AuthorParts_1.AuthorPartsFragmentDoc}
${EmailParts_1.EmailPartsFragmentDoc}
${ArticleTeaserParts_1.ArticleTeaserPartsFragmentDoc}`;
/**
 * __useContentByAuthorQuery__
 *
 * To run a query within a React component, call `useContentByAuthorQuery` and pass it any options that fit your needs.
 * When your component renders, `useContentByAuthorQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useContentByAuthorQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *      perPage: // value for 'perPage'
 *      after: // value for 'after'
 *   },
 * });
 */
function useContentByAuthorQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useQuery(exports.ContentByAuthorDocument, options);
}
exports.useContentByAuthorQuery = useContentByAuthorQuery;
function useContentByAuthorLazyQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useLazyQuery(exports.ContentByAuthorDocument, options);
}
exports.useContentByAuthorLazyQuery = useContentByAuthorLazyQuery;
//# sourceMappingURL=ContentByAuthor.js.map