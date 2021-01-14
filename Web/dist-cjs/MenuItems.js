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
exports.useMenuItemsLazyQuery = exports.useMenuItemsQuery = exports.MenuItemsDocument = void 0;
const client_1 = require("@apollo/client");
const MenuItemParts_1 = require("./MenuItemParts");
const Apollo = __importStar(require("@apollo/client"));
exports.MenuItemsDocument = client_1.gql `
    query MenuItems($perPage: Int!, $slug: MenuLocationEnum!) {
  menuItems(where: {location: $slug}, first: $perPage) {
    nodes {
      ...MenuItemParts
    }
  }
}
    ${MenuItemParts_1.MenuItemPartsFragmentDoc}`;
/**
 * __useMenuItemsQuery__
 *
 * To run a query within a React component, call `useMenuItemsQuery` and pass it any options that fit your needs.
 * When your component renders, `useMenuItemsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMenuItemsQuery({
 *   variables: {
 *      perPage: // value for 'perPage'
 *      slug: // value for 'slug'
 *   },
 * });
 */
function useMenuItemsQuery(baseOptions) {
    return Apollo.useQuery(exports.MenuItemsDocument, baseOptions);
}
exports.useMenuItemsQuery = useMenuItemsQuery;
function useMenuItemsLazyQuery(baseOptions) {
    return Apollo.useLazyQuery(exports.MenuItemsDocument, baseOptions);
}
exports.useMenuItemsLazyQuery = useMenuItemsLazyQuery;
//# sourceMappingURL=MenuItems.js.map