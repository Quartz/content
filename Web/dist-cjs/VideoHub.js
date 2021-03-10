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
exports.useVideoHubLazyQuery = exports.useVideoHubQuery = exports.VideoHubDocument = void 0;
const client_1 = require("@apollo/client");
const ArticleTeaserParts_1 = require("./ArticleTeaserParts");
const ShowParts_1 = require("./ShowParts");
const Apollo = __importStar(require("@apollo/client"));
const defaultOptions = {};
exports.VideoHubDocument = client_1.gql `
    query VideoHub {
  featuredVideoPlayer: menuItems(where: {location: PLAYER_VIDEO}) {
    nodes {
      connectedObject {
        ...ArticleTeaserParts
        ... on Post {
          shows {
            nodes {
              ...ShowParts
            }
          }
        }
      }
    }
  }
  latest: tags(where: {slug: "quartz-video"}) {
    nodes {
      posts(first: 6) {
        nodes {
          ...ArticleTeaserParts
          shows {
            nodes {
              ...ShowParts
            }
          }
        }
      }
    }
  }
  featuredShows: menuItems(where: {location: SHOWS_VIDEO}) {
    nodes {
      connectedObject {
        ... on Show {
          ...ShowParts
          posts(first: 6) {
            nodes {
              ...ArticleTeaserParts
            }
          }
        }
      }
    }
  }
  allShows: shows(last: 40, where: {orderby: TERM_ID}) {
    nodes {
      ...ShowParts
    }
  }
}
    ${ArticleTeaserParts_1.ArticleTeaserPartsFragmentDoc}
${ShowParts_1.ShowPartsFragmentDoc}`;
/**
 * __useVideoHubQuery__
 *
 * To run a query within a React component, call `useVideoHubQuery` and pass it any options that fit your needs.
 * When your component renders, `useVideoHubQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useVideoHubQuery({
 *   variables: {
 *   },
 * });
 */
function useVideoHubQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useQuery(exports.VideoHubDocument, options);
}
exports.useVideoHubQuery = useVideoHubQuery;
function useVideoHubLazyQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useLazyQuery(exports.VideoHubDocument, options);
}
exports.useVideoHubLazyQuery = useVideoHubLazyQuery;
//# sourceMappingURL=VideoHub.js.map