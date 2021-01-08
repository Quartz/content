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
exports.useGuidesByTopicLazyQuery = exports.useGuidesByTopicQuery = exports.GuidesByTopicDocument = void 0;
const client_1 = require("@apollo/client");
const GuideParts_1 = require("./GuideParts");
const Apollo = __importStar(require("@apollo/client"));
exports.GuidesByTopicDocument = client_1.gql `
    query GuidesByTopic($topic: [String]!) {
  topics(where: {slug: $topic}) {
    nodes {
      id
      name
      slug
      guides(first: 50) {
        nodes {
          ...GuideParts
        }
      }
    }
  }
}
    ${GuideParts_1.GuidePartsFragmentDoc}`;
/**
 * __useGuidesByTopicQuery__
 *
 * To run a query within a React component, call `useGuidesByTopicQuery` and pass it any options that fit your needs.
 * When your component renders, `useGuidesByTopicQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGuidesByTopicQuery({
 *   variables: {
 *      topic: // value for 'topic'
 *   },
 * });
 */
function useGuidesByTopicQuery(baseOptions) {
    return Apollo.useQuery(exports.GuidesByTopicDocument, baseOptions);
}
exports.useGuidesByTopicQuery = useGuidesByTopicQuery;
function useGuidesByTopicLazyQuery(baseOptions) {
    return Apollo.useLazyQuery(exports.GuidesByTopicDocument, baseOptions);
}
exports.useGuidesByTopicLazyQuery = useGuidesByTopicLazyQuery;
//# sourceMappingURL=GuidesByTopic.js.map