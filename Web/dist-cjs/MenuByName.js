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
exports.useMenuByNameLazyQuery = exports.useMenuByNameQuery = exports.MenuByNameDocument = void 0;
const client_1 = require("@apollo/client");
const MenuItemParts_1 = require("./MenuItemParts");
const Apollo = __importStar(require("@apollo/client"));
exports.MenuByNameDocument = client_1.gql `
    query MenuByName($id: ID!, $first: Int = 10) {
  menu(id: $id, idType: NAME) {
    id
    menuItems(first: $first) {
      nodes {
        ...MenuItemParts
      }
    }
  }
}
    ${MenuItemParts_1.MenuItemPartsFragmentDoc}`;
/**
 * __useMenuByNameQuery__
 *
 * To run a query within a React component, call `useMenuByNameQuery` and pass it any options that fit your needs.
 * When your component renders, `useMenuByNameQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMenuByNameQuery({
 *   variables: {
 *      id: // value for 'id'
 *      first: // value for 'first'
 *   },
 * });
 */
function useMenuByNameQuery(baseOptions) {
    return Apollo.useQuery(exports.MenuByNameDocument, baseOptions);
}
exports.useMenuByNameQuery = useMenuByNameQuery;
function useMenuByNameLazyQuery(baseOptions) {
    return Apollo.useLazyQuery(exports.MenuByNameDocument, baseOptions);
}
exports.useMenuByNameLazyQuery = useMenuByNameLazyQuery;
//# sourceMappingURL=MenuByName.js.map