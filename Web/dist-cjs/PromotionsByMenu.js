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
exports.usePromotionsByMenuLazyQuery = exports.usePromotionsByMenuQuery = exports.PromotionsByMenuDocument = void 0;
const client_1 = require("@apollo/client");
const PromotionParts_1 = require("./PromotionParts");
const Apollo = __importStar(require("@apollo/client"));
exports.PromotionsByMenuDocument = client_1.gql `
    query PromotionsByMenu($menuLocation: MenuLocationEnum!) {
  menuItems(first: 50, where: {location: $menuLocation}) {
    edges {
      node {
        connectedObject {
          ... on Promotion {
            ...PromotionParts
          }
        }
      }
    }
  }
}
    ${PromotionParts_1.PromotionPartsFragmentDoc}`;
/**
 * __usePromotionsByMenuQuery__
 *
 * To run a query within a React component, call `usePromotionsByMenuQuery` and pass it any options that fit your needs.
 * When your component renders, `usePromotionsByMenuQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePromotionsByMenuQuery({
 *   variables: {
 *      menuLocation: // value for 'menuLocation'
 *   },
 * });
 */
function usePromotionsByMenuQuery(baseOptions) {
    return Apollo.useQuery(exports.PromotionsByMenuDocument, baseOptions);
}
exports.usePromotionsByMenuQuery = usePromotionsByMenuQuery;
function usePromotionsByMenuLazyQuery(baseOptions) {
    return Apollo.useLazyQuery(exports.PromotionsByMenuDocument, baseOptions);
}
exports.usePromotionsByMenuLazyQuery = usePromotionsByMenuLazyQuery;
//# sourceMappingURL=PromotionsByMenu.js.map